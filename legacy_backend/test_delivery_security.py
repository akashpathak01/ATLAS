#!/usr/bin/env python3
"""
Live test script for Delivery Security Layer
Tests manager confirmation workflow and security features
"""

import os
import django
import sys

# Setup Django environment
sys.path.insert(0, '/root/new-python-code')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'crm_fulfillment.settings')
django.setup()

from decimal import Decimal
from django.contrib.auth import get_user_model
from django.utils import timezone
from delivery.models import DeliveryRecord, DeliveryCompany, Courier, DeliveryOTP, DeliveryPIN
from orders.models import Order

User = get_user_model()

def test_delivery_model_fields():
    """Test 1: Verify DeliveryRecord has manager confirmation fields"""
    print("\n=== Test 1: Delivery Model Field Verification ===")

    expected_fields = [
        'manager_confirmation_status',
        'manager_confirmed_by',
        'manager_confirmed_at',
        'manager_rejection_reason',
    ]

    from delivery.models import DeliveryRecord
    model_fields = [f.name for f in DeliveryRecord._meta.get_fields()]

    missing_fields = []
    for field in expected_fields:
        if field not in model_fields:
            missing_fields.append(field)

    if missing_fields:
        print(f"❌ FAILED: Missing fields: {missing_fields}")
        return False
    else:
        print(f"✅ PASSED: All manager confirmation fields exist")
        return True

def test_delivery_security_models():
    """Test 2: Verify security models exist"""
    print("\n=== Test 2: Delivery Security Models ===")

    try:
        # Check if security models can be imported
        from delivery.models import (
            DeliveryOTP, DeliveryPIN, GeofenceZone, DeliveryStatusHistory
        )
        print("✅ PASSED: All security models exist")
        return True
    except ImportError as e:
        print(f"❌ FAILED: Missing security model: {e}")
        return False

def test_manager_confirmation_workflow():
    """Test 3: Verify manager confirmation workflow"""
    print("\n=== Test 3: Manager Confirmation Workflow ===")

    try:
        # Get or create test users
        courier_user, _ = User.objects.get_or_create(
            email='test_courier@test.com'
        )
        manager_user, _ = User.objects.get_or_create(
            email='test_manager@test.com',
            defaults={'is_staff': True}
        )

        # Get or create delivery company
        company, _ = DeliveryCompany.objects.get_or_create(
            name_en='Test Delivery Company',
            defaults={
                'name_ar': 'Test Delivery Company',
                'base_cost': Decimal('10.00')
            }
        )

        # Get or create courier
        courier, _ = Courier.objects.get_or_create(
            user=courier_user,
            defaults={
                'employee_id': 'TEST-COURIER-001',
                'delivery_company': company,
                'phone_number': '1234567890'
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=courier_user,
            order_code=f'ORD-DEL-SEC-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='pending',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create delivery record
        delivery = DeliveryRecord.objects.create(
            order=order,
            courier=courier,
            status='delivered',
            tracking_number=f'TRACK-{timezone.now().timestamp()}',
            estimated_delivery_date=timezone.now().date(),
            manager_confirmation_status='pending'
        )

        # Verify initial status
        if delivery.manager_confirmation_status != 'pending':
            print(f"❌ FAILED: Initial status should be 'pending', got '{delivery.manager_confirmation_status}'")
            return False

        # Test confirmation
        delivery.manager_confirmation_status = 'confirmed'
        delivery.manager_confirmed_by = manager_user
        delivery.manager_confirmed_at = timezone.now()
        delivery.save()

        delivery.refresh_from_db()

        if delivery.manager_confirmation_status != 'confirmed':
            print(f"❌ FAILED: Status should be 'confirmed', got '{delivery.manager_confirmation_status}'")
            return False

        if delivery.manager_confirmed_by != manager_user:
            print("❌ FAILED: manager_confirmed_by not set correctly")
            return False

        if not delivery.manager_confirmed_at:
            print("❌ FAILED: manager_confirmed_at should be set")
            return False

        print(f"✅ PASSED: Manager confirmation workflow works correctly")

        # Cleanup
        delivery.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def test_delivery_otp_model():
    """Test 4: Verify DeliveryOTP functionality"""
    print("\n=== Test 4: Delivery OTP Model ===")

    try:
        # Get or create test users
        courier_user, _ = User.objects.get_or_create(
            email='test_otp_courier@test.com'
        )

        # Get or create delivery company
        company, _ = DeliveryCompany.objects.get_or_create(
            name_en='Test OTP Company',
            defaults={
                'name_ar': 'Test OTP Company',
                'base_cost': Decimal('10.00')
            }
        )

        # Get or create courier
        courier, _ = Courier.objects.get_or_create(
            user=courier_user,
            defaults={
                'employee_id': 'TEST-OTP-COURIER',
                'delivery_company': company,
                'phone_number': '1234567890'
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=courier_user,
            order_code=f'ORD-OTP-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='pending',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create delivery record
        delivery = DeliveryRecord.objects.create(
            order=order,
            courier=courier,
            status='in_transit',
            tracking_number=f'TRACK-OTP-{timezone.now().timestamp()}',
            estimated_delivery_date=timezone.now().date()
        )

        # Create OTP
        otp = DeliveryOTP.objects.create(
            delivery=delivery,
            otp_code='123456',
            expires_at=timezone.now() + timezone.timedelta(hours=1)
        )

        # Verify creation
        if not otp.otp_code:
            print("❌ FAILED: OTP code not set")
            return False

        if not otp.expires_at:
            print("❌ FAILED: OTP expiry not set")
            return False

        print(f"✅ PASSED: DeliveryOTP creation works correctly")

        # Cleanup
        delivery.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def test_delivery_pin_model():
    """Test 5: Verify DeliveryPIN functionality"""
    print("\n=== Test 5: Delivery PIN Model ===")

    try:
        # Get or create test users
        courier_user, _ = User.objects.get_or_create(
            email='test_pin_courier@test.com'
        )

        # Get or create delivery company
        company, _ = DeliveryCompany.objects.get_or_create(
            name_en='Test PIN Company',
            defaults={
                'name_ar': 'Test PIN Company',
                'base_cost': Decimal('10.00')
            }
        )

        # Get or create courier
        courier, _ = Courier.objects.get_or_create(
            user=courier_user,
            defaults={
                'employee_id': 'TEST-PIN-COURIER',
                'delivery_company': company,
                'phone_number': '1234567890'
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=courier_user,
            order_code=f'ORD-PIN-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='pending',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create delivery record
        delivery = DeliveryRecord.objects.create(
            order=order,
            courier=courier,
            status='in_transit',
            tracking_number=f'TRACK-PIN-{timezone.now().timestamp()}',
            estimated_delivery_date=timezone.now().date()
        )

        # Create PIN
        pin = DeliveryPIN.objects.create(
            delivery=delivery,
            pin_code='4567'
        )

        # Verify creation
        if not pin.pin_code:
            print("❌ FAILED: PIN code not set")
            return False

        print(f"✅ PASSED: DeliveryPIN creation works correctly")

        # Cleanup
        delivery.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Run all tests"""
    print("\n" + "="*60)
    print("DELIVERY SECURITY LAYER - LIVE TESTS")
    print("="*60)

    tests = [
        test_delivery_model_fields,
        test_delivery_security_models,
        test_manager_confirmation_workflow,
        test_delivery_otp_model,
        test_delivery_pin_model,
    ]

    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
        except Exception as e:
            print(f"❌ Test crashed: {str(e)}")
            results.append(False)

    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    passed = sum(results)
    total = len(results)
    print(f"Passed: {passed}/{total}")
    print(f"Failed: {total - passed}/{total}")

    if passed == total:
        print("\n✅ ALL TESTS PASSED!")
        return 0
    else:
        print(f"\n❌ {total - passed} TEST(S) FAILED")
        return 1

if __name__ == '__main__':
    sys.exit(main())
