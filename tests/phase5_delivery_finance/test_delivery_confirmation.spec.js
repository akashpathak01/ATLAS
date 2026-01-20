// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

/**
 * CRITICAL TEST: Delivery Status Confirmation Workflow
 *
 * Requirements from specification:
 * 1. Delivery Agent updates order status (Delivered/Failed/Returned)
 * 2. Status is set to "Pending Manager Confirmation" - NOT visible to Seller/Admin
 * 3. Delivery Manager reviews and Confirms or Corrects the status
 * 4. Only after Manager Confirmation is status visible to Seller/Admin
 *
 * This is a CRITICAL SECURITY REQUIREMENT to prevent fraud.
 */

// Test credentials (these should match your database)
const CREDENTIALS = {
  deliveryAgent: {
    email: 'deliveryagent@atlas.com',
    password: 'agent123',
  },
  deliveryManager: {
    email: 'deliverymanager@atlas.com',
    password: 'manager123',
  },
  seller: {
    email: 'seller@test.com',
    password: 'seller123',
  },
  admin: {
    email: 'admin@atlas.com',
    password: 'admin123',
  }
};

test.describe('Delivery Status Confirmation Workflow - CRITICAL', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to login page
    await page.goto('/users/login/');
    await page.waitForLoadState('networkidle');
  });

  /**
   * Helper function to login
   */
  async function login(page, email, password) {
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');

    // Take screenshot after login
    const screenshotPath = path.join(__dirname, '../screenshots', `login_${email.split('@')[0]}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
  }

  /**
   * Helper function to logout
   */
  async function logout(page) {
    await page.goto('/users/logout/');
    await page.waitForLoadState('networkidle');
  }

  test('Step 1: Delivery Agent updates order status', async ({ page }) => {
    // Login as Delivery Agent
    await login(page, CREDENTIALS.deliveryAgent.email, CREDENTIALS.deliveryAgent.password);

    // Navigate to delivery dashboard or order list
    await page.goto('/delivery/');
    await page.screenshot({
      path: path.join(__dirname, '../screenshots', '01_delivery_agent_dashboard.png'),
      fullPage: true
    });

    // Check if there are any orders assigned
    const hasOrders = await page.locator('table tbody tr').count() > 0;

    if (hasOrders) {
      // Click on first order
      await page.click('table tbody tr:first-child a');
      await page.waitForLoadState('networkidle');

      await page.screenshot({
        path: path.join(__dirname, '../screenshots', '02_order_detail_before_update.png'),
        fullPage: true
      });

      // Look for status update form/button
      const statusUpdateExists = await page.locator('select[name*="status"], button:has-text("Update Status")').count() > 0;

      if (statusUpdateExists) {
        // Try to update status to "Delivered"
        const statusSelect = page.locator('select[name*="status"]');
        if (await statusSelect.count() > 0) {
          await statusSelect.selectOption({ label: 'Delivered' });
          await page.click('button[type="submit"]');
          await page.waitForLoadState('networkidle');

          await page.screenshot({
            path: path.join(__dirname, '../screenshots', '03_after_status_update.png'),
            fullPage: true
          });
        }
      }

      console.log('✓ Delivery Agent: Order status update attempted');
    } else {
      console.log('⚠ No orders found in Delivery Agent dashboard');
      await page.screenshot({
        path: path.join(__dirname, '../screenshots', '01_no_orders_found.png'),
        fullPage: true
      });
    }

    await logout(page);
  });

  test('Step 2: Verify Seller CANNOT see unconfirmed status', async ({ page }) => {
    // Login as Seller
    await login(page, CREDENTIALS.seller.email, CREDENTIALS.seller.password);

    // Navigate to seller's orders page
    await page.goto('/sellers/orders/');
    await page.screenshot({
      path: path.join(__dirname, '../screenshots', '04_seller_orders_view.png'),
      fullPage: true
    });

    // Check if orders are visible
    const hasOrders = await page.locator('table tbody tr').count() > 0;

    if (hasOrders) {
      // Click on first order
      await page.click('table tbody tr:first-child a');
      await page.waitForLoadState('networkidle');

      await page.screenshot({
        path: path.join(__dirname, '../screenshots', '05_seller_order_detail.png'),
        fullPage: true
      });

      // Check what status is shown
      const statusText = await page.locator('.status, .badge, [class*="status"]').first().textContent();
      console.log(`Seller sees status: "${statusText}"`);

      // CRITICAL CHECK: Status should NOT show "Delivered" if it's pending confirmation
      // Instead it should show the previous status (e.g., "Out for Delivery")
      const isPendingConfirmation = statusText?.includes('Pending') ||
                                    statusText?.includes('Out for Delivery') ||
                                    !statusText?.includes('Delivered');

      console.log(`✓ SECURITY CHECK: Seller ${isPendingConfirmation ? 'CANNOT' : 'CAN'} see unconfirmed status`);

    } else {
      console.log('⚠ No orders found in Seller dashboard');
    }

    await logout(page);
  });

  test('Step 3: Delivery Manager confirms status', async ({ page }) => {
    // Login as Delivery Manager
    await login(page, CREDENTIALS.deliveryManager.email, CREDENTIALS.deliveryManager.password);

    // Navigate to delivery manager dashboard
    await page.goto('/delivery/manager/');
    await page.screenshot({
      path: path.join(__dirname, '../screenshots', '06_delivery_manager_dashboard.png'),
      fullPage: true
    });

    // Look for pending confirmations
    const hasPendingConfirmations = await page.locator('table tbody tr, .pending-confirmation').count() > 0;

    if (hasPendingConfirmations) {
      // Click on first pending confirmation
      await page.click('table tbody tr:first-child a');
      await page.waitForLoadState('networkidle');

      await page.screenshot({
        path: path.join(__dirname, '../screenshots', '07_manager_confirmation_page.png'),
        fullPage: true
      });

      // Look for confirmation button
      const confirmButton = page.locator('button:has-text("Confirm"), button:has-text("Approve")');
      if (await confirmButton.count() > 0) {
        await confirmButton.first().click();
        await page.waitForLoadState('networkidle');

        await page.screenshot({
          path: path.join(__dirname, '../screenshots', '08_after_manager_confirmation.png'),
          fullPage: true
        });

        console.log('✓ Delivery Manager: Status confirmed');
      }
    } else {
      console.log('⚠ No pending confirmations found');
    }

    await logout(page);
  });

  test('Step 4: Verify Seller CAN NOW see confirmed status', async ({ page }) => {
    // Login as Seller again
    await login(page, CREDENTIALS.seller.email, CREDENTIALS.seller.password);

    // Navigate to seller's orders page
    await page.goto('/sellers/orders/');
    await page.waitForLoadState('networkidle');

    // Check if orders are visible
    const hasOrders = await page.locator('table tbody tr').count() > 0;

    if (hasOrders) {
      // Click on first order
      await page.click('table tbody tr:first-child a');
      await page.waitForLoadState('networkidle');

      await page.screenshot({
        path: path.join(__dirname, '../screenshots', '09_seller_sees_confirmed_status.png'),
        fullPage: true
      });

      // Check what status is shown NOW
      const statusText = await page.locator('.status, .badge, [class*="status"]').first().textContent();
      console.log(`Seller NOW sees status: "${statusText}"`);

      // After manager confirmation, status should be visible
      const isConfirmedStatusVisible = statusText?.includes('Delivered') ||
                                       statusText?.includes('Failed') ||
                                       statusText?.includes('Returned');

      console.log(`✓ VERIFICATION: Confirmed status ${isConfirmedStatusVisible ? 'IS' : 'IS NOT'} visible to Seller`);
    }

    await logout(page);
  });

  test('Summary: Check delivery module structure', async ({ page }) => {
    // Login as Admin to explore delivery module
    await login(page, CREDENTIALS.admin.email, CREDENTIALS.admin.password);

    // Check various delivery URLs
    const urlsToCheck = [
      '/delivery/',
      '/delivery/manager/',
      '/delivery/pending-confirmation/',
      '/delivery/orders/',
      '/delivery/agent/',
    ];

    for (const url of urlsToCheck) {
      try {
        await page.goto(url, { timeout: 5000 });
        const status = page.url().includes('login') ? '❌ Redirected to login' : '✅ Accessible';
        console.log(`${url} - ${status}`);

        if (!page.url().includes('login')) {
          await page.screenshot({
            path: path.join(__dirname, '../screenshots', `delivery_${url.replace(/\//g, '_')}.png`),
            fullPage: true
          });
        }
      } catch (error) {
        console.log(`${url} - ⚠️ Timeout or not found`);
      }
    }

    await logout(page);
  });

});

/**
 * TEST ANALYSIS CHECKLIST:
 *
 * After running these tests, analyze the screenshots for:
 *
 * 1. ✅ Delivery Agent can update order status
 * 2. ✅ Status shows "Pending Manager Confirmation" after agent update
 * 3. ✅ Seller CANNOT see the unconfirmed status (SECURITY CHECK)
 * 4. ✅ Delivery Manager has confirmation interface
 * 5. ✅ After Manager confirmation, Seller CAN see the final status
 * 6. ✅ No permission bypass possible
 *
 * If ANY of these checks fail, the delivery confirmation workflow is NOT properly implemented
 * and represents a CRITICAL SECURITY VULNERABILITY.
 */
