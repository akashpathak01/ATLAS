#!/bin/bash

echo "========================================="
echo "Atlas CRM - Railway Deployment Script"
echo "========================================="
echo ""

# Check if railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Check if logged in
echo "Checking Railway authentication..."
if ! railway whoami &> /dev/null; then
    echo "⚠️  Not logged in to Railway. Please login:"
    railway login
else
    echo "✅ Already logged in to Railway"
    railway whoami
fi

echo ""
echo "========================================="
echo "Railway Project Setup"
echo "========================================="
echo ""
echo "Choose an option:"
echo "1) Create a new Railway project"
echo "2) Link to existing Railway project"
echo "3) Skip project setup (already configured)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "Creating new Railway project..."
        railway init
        ;;
    2)
        echo "Linking to existing Railway project..."
        railway link
        ;;
    3)
        echo "Skipping project setup..."
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "========================================="
echo "Database Setup"
echo "========================================="
echo ""
read -p "Add PostgreSQL database? (y/n): " add_db

if [ "$add_db" = "y" ]; then
    echo "Adding PostgreSQL database..."
    railway add --database postgresql
    echo "✅ Database added. DATABASE_URL will be automatically set."
fi

echo ""
echo "========================================="
echo "Environment Variables"
echo "========================================="
echo ""
read -p "Set environment variables? (y/n): " set_vars

if [ "$set_vars" = "y" ]; then
    echo "Generating SECRET_KEY..."
    SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
    railway variables set SECRET_KEY="$SECRET_KEY"
    echo "✅ SECRET_KEY set"

    railway variables set DEBUG=False
    echo "✅ DEBUG set to False"

    railway variables set DJANGO_ALLOWED_HOSTS=".up.railway.app"
    echo "✅ ALLOWED_HOSTS set"

    echo ""
    read -p "Configure email settings? (y/n): " config_email

    if [ "$config_email" = "y" ]; then
        read -p "Enter EMAIL_HOST (default: smtp.hostinger.com): " email_host
        email_host=${email_host:-smtp.hostinger.com}

        read -p "Enter EMAIL_PORT (default: 465): " email_port
        email_port=${email_port:-465}

        read -p "Enter EMAIL_HOST_USER: " email_user
        read -sp "Enter EMAIL_HOST_PASSWORD: " email_pass
        echo ""

        railway variables set EMAIL_HOST="$email_host"
        railway variables set EMAIL_PORT="$email_port"
        railway variables set EMAIL_USE_SSL=True
        railway variables set EMAIL_HOST_USER="$email_user"
        railway variables set EMAIL_HOST_PASSWORD="$email_pass"
        railway variables set DEFAULT_FROM_EMAIL="Atlas CRM <noreply@atlas.alexandratechlab.com>"

        echo "✅ Email settings configured"
    fi
fi

echo ""
echo "========================================="
echo "Deployment"
echo "========================================="
echo ""
read -p "Deploy to Railway now? (y/n): " deploy_now

if [ "$deploy_now" = "y" ]; then
    echo "Deploying to Railway..."
    railway up

    echo ""
    echo "========================================="
    echo "Deployment Status"
    echo "========================================="
    echo ""

    echo "Checking deployment status..."
    sleep 5
    railway status

    echo ""
    echo "Getting deployment URL..."
    railway domain

    echo ""
    echo "========================================="
    echo "Post-Deployment Tasks"
    echo "========================================="
    echo ""

    read -p "View deployment logs? (y/n): " view_logs
    if [ "$view_logs" = "y" ]; then
        railway logs
    fi

    echo ""
    read -p "Create superuser? (y/n): " create_super
    if [ "$create_super" = "y" ]; then
        railway run python manage.py createsuperuser
    fi
fi

echo ""
echo "========================================="
echo "Deployment Complete! 🚀"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. View your app: railway domain"
echo "2. Check logs: railway logs"
echo "3. Configure custom domain (optional)"
echo "4. Set up monitoring"
echo ""
echo "For more information, see RAILWAY_DEPLOYMENT_GUIDE.md"
echo ""
