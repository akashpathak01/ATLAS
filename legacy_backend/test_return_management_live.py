#!/usr/bin/env python3
"""
Live test script for Return Management System
Tests actual models and functionality without needing test database
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
from orders.models import Order, OrderItem, Return, ReturnItem, ReturnStatusLog
from sellers.models import Product

User = get_user_model()

def test_return_model_fields():
    """Test 1: Verify Return model has correct field names"""
    print("\n=== Test 1: Return Model Field Verification ===")

    expected_fields = [
        'return_code', 'order', 'customer',
        'return_reason', 'return_description', 'return_status',
        'approved_by', 'approved_at', 'rejection_reason',
        'received_at_warehouse', 'received_by',
        'inspector', 'inspection_completed_at',
        'refund_amount', 'refund_method', 'refund_status',
        'refund_processed_by', 'refund_processed_at',
        'created_at', 'updated_at'
    ]

    from orders.models import Return
    model_fields = [f.name for f in Return._meta.get_fields()]

    missing_fields = []
    for field in expected_fields:
        if field not in model_fields:
            missing_fields.append(field)

    if missing_fields:
        print(f"❌ FAILED: Missing fields: {missing_fields}")
        return False
    else:
        print(f"✅ PASSED: All expected fields exist")
        return True

def test_return_code_generation():
    """Test 2: Verify return code auto-generation works"""
    print("\n=== Test 2: Return Code Auto-Generation ===")

    try:
        # Get or create test user
        user, _ = User.objects.get_or_create(
            email='test_return_user@test.com'
        )

        # Get or create test product
        product, _ = Product.objects.get_or_create(
            code='TEST-RETURN-001',
            defaults={
                'name_en': 'Test Return Product',
                'name_ar': 'Test Return Product',
                'selling_price': Decimal('100.00'),
                'stock_quantity': 50,
                'seller': user
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=user,
            order_code=f'ORD-TEST-RETURN-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='delivered',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create return
        return_obj = Return.objects.create(
            customer=user,
            order=order,
            return_reason='defective',
            return_description='Test return code generation',
            refund_method='pickup'
        )

        # Verify return code exists
        if not return_obj.return_code:
            print("❌ FAILED: Return code not auto-generated")
            return False

        # Verify format
        today = timezone.now()
        date_part = f"RET{today.year % 100:02d}{today.month:02d}{today.day:02d}"
        if not return_obj.return_code.startswith(date_part):
            print(f"❌ FAILED: Return code format incorrect. Expected to start with {date_part}, got {return_obj.return_code}")
            return False

        print(f"✅ PASSED: Return code generated: {return_obj.return_code}")

        # Cleanup
        return_obj.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def test_return_status_transitions():
    """Test 3: Verify status transitions work correctly"""
    print("\n=== Test 3: Return Status Transitions ===")

    try:
        # Get or create test users
        customer, _ = User.objects.get_or_create(
            email='test_customer@test.com'
        )
        admin, _ = User.objects.get_or_create(
            email='test_admin@test.com',
            defaults={'is_staff': True}
        )

        # Get or create test product
        product, _ = Product.objects.get_or_create(
            code='TEST-STATUS-001',
            defaults={
                'name_en': 'Test Status Product',
                'name_ar': 'Test Status Product',
                'selling_price': Decimal('100.00'),
                'stock_quantity': 50,
                'seller': customer
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=customer,
            order_code=f'ORD-TEST-STATUS-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='delivered',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create return
        return_obj = Return.objects.create(
            customer=customer,
            order=order,
            return_reason='defective',
            return_description='Test status transitions',
            refund_method='pickup'
        )

        # Test initial status
        if return_obj.return_status != 'requested':
            print(f"❌ FAILED: Initial status should be 'requested', got '{return_obj.return_status}'")
            return False

        # Test transition to approved
        return_obj.return_status = 'approved'
        return_obj.approved_by = admin
        return_obj.approved_at = timezone.now()
        return_obj.refund_amount = Decimal('100.00')
        return_obj.save()

        return_obj.refresh_from_db()
        if return_obj.return_status != 'approved':
            print(f"❌ FAILED: Status should be 'approved', got '{return_obj.return_status}'")
            return False

        if not return_obj.approved_at:
            print("❌ FAILED: approved_at should be set")
            return False

        print(f"✅ PASSED: Status transitions work correctly")

        # Cleanup
        return_obj.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def test_return_item_creation():
    """Test 4: Verify ReturnItem model works correctly"""
    print("\n=== Test 4: ReturnItem Creation ===")

    try:
        # Get or create test user
        user, _ = User.objects.get_or_create(
            email='test_item_user@test.com'
        )

        # Get or create test product
        product, _ = Product.objects.get_or_create(
            code='TEST-ITEM-001',
            defaults={
                'name_en': 'Test Item Product',
                'name_ar': 'Test Item Product',
                'selling_price': Decimal('100.00'),
                'stock_quantity': 50,
                'seller': user
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=user,
            order_code=f'ORD-TEST-ITEM-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=2,
            customer_phone="1234567890",
            status='delivered',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        order_item = OrderItem.objects.create(
            order=order,
            product=product,
            quantity=2,
            price=Decimal('100.00')
        )

        # Create return
        return_obj = Return.objects.create(
            customer=user,
            order=order,
            return_reason='defective',
            return_description='Test return items',
            refund_method='pickup'
        )

        # Create return item
        return_item = ReturnItem.objects.create(
            return_request=return_obj,
            order_item=order_item,
            quantity=1,
            reason='damaged',
            condition='poor'
        )

        # Verify creation
        if return_obj.items.count() != 1:
            print(f"❌ FAILED: Expected 1 return item, got {return_obj.items.count()}")
            return False

        if return_item.quantity != 1:
            print(f"❌ FAILED: Expected quantity 1, got {return_item.quantity}")
            return False

        print(f"✅ PASSED: ReturnItem creation works correctly")

        # Cleanup
        return_obj.delete()
        order.delete()

        return True

    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def test_return_status_logging():
    """Test 5: Verify ReturnStatusLog works correctly"""
    print("\n=== Test 5: Return Status Logging ===")

    try:
        # Get or create test users
        customer, _ = User.objects.get_or_create(
            email='test_log_customer@test.com'
        )
        admin, _ = User.objects.get_or_create(
            email='test_log_admin@test.com',
            defaults={'is_staff': True}
        )

        # Get or create test product
        product, _ = Product.objects.get_or_create(
            code='TEST-LOG-001',
            defaults={
                'name_en': 'Test Log Product',
                'name_ar': 'Test Log Product',
                'selling_price': Decimal('100.00'),
                'stock_quantity': 50,
                'seller': customer
            }
        )

        # Create test order
        order = Order.objects.create(
            customer=customer,
            order_code=f'ORD-TEST-LOG-{timezone.now().timestamp()}',
            store_link="https://example.com/product",
            price_per_unit=Decimal("100.00"),
            quantity=1,
            customer_phone="1234567890",
            status='delivered',
            city="Test City",
            state="Test State",
            shipping_address='123 Test St'
        )

        # Create return
        return_obj = Return.objects.create(
            customer=customer,
            order=order,
            return_reason='defective',
            return_description='Test status logging',
            refund_method='pickup'
        )

        # Create status log
        log_entry = ReturnStatusLog.objects.create(
            return_request=return_obj,
            new_status='approved',
            changed_by=admin,
            notes='Return approved by admin'
        )

        # Verify creation
        if return_obj.status_logs.count() != 1:
            print(f"❌ FAILED: Expected 1 status log, got {return_obj.status_logs.count()}")
            return False

        if log_entry.new_status != 'approved':
            print(f"❌ FAILED: Expected status 'approved', got '{log_entry.new_status}'")
            return False

        if not log_entry.timestamp:
            print("❌ FAILED: timestamp should be auto-set")
            return False

        print(f"✅ PASSED: ReturnStatusLog works correctly")

        # Cleanup
        return_obj.delete()
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
    print("RETURN MANAGEMENT SYSTEM - LIVE TESTS")
    print("="*60)

    tests = [
        test_return_model_fields,
        test_return_code_generation,
        test_return_status_transitions,
        test_return_item_creation,
        test_return_status_logging,
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
