import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { MainLayout } from './layouts/MainLayout';

// Admin Pages (Strict Conversion)
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminUsersPage } from './pages/admin/AdminUsersPage';
import { AdminSellersPage } from './pages/admin/AdminSellersPage';
import { AdminOrdersPage } from './pages/admin/AdminOrdersPage';
import { AdminProductsPage } from './pages/admin/AdminProductsPage';
import { AdminInventoryPage } from './pages/admin/AdminInventoryPage';
import { AdminAddProductPage } from './pages/admin/AdminAddProductPage';
import { AdminWarehousesPage } from './pages/admin/AdminWarehousesPage';
import { AdminAddWarehousePage } from './pages/admin/AdminAddWarehousePage';

import { AdminFinancePage } from './pages/admin/AdminFinancePage';
import { AdminPaymentManagementPage } from './pages/admin/AdminPaymentManagementPage';
import { AdminAddPaymentPage } from './pages/admin/AdminAddPaymentPage';
import { AdminPaymentPlatformsPage } from './pages/admin/AdminPaymentPlatformsPage';
import { AdminFinancialReportsPage } from './pages/admin/AdminFinancialReportsPage';
import { AdminCreateInvoicePage } from './pages/admin/AdminCreateInvoicePage';
import { AdminSourcingPage } from './pages/admin/AdminSourcingPage';
import { AdminCreateSourcingRequestPage } from './pages/admin/AdminCreateSourcingRequestPage';
import { AdminSourcingRequestsPage } from './pages/admin/AdminSourcingRequestsPage';
import { AdminSuppliersPage } from './pages/admin/AdminSuppliersPage';
import { AdminPackagingPage } from './pages/admin/AdminPackagingPage';
import { AdminCallCenterPage } from './pages/admin/AdminCallCenterPage';
import { AdminDeliveryPage } from './pages/admin/AdminDeliveryPage';
import { AdminSubscribersPage } from './pages/admin/AdminSubscribersPage';
import { AdminRolesPage } from './pages/admin/AdminRolesPage';


import { AuthProvider } from './context/AuthContext';


// Seller Pages
import { SellerDashboardPage } from './pages/seller/SellerDashboardPage';
import { SellerOrdersPage } from './pages/seller/SellerOrdersPage';
import { SellerInventoryPage } from './pages/seller/SellerInventoryPage';
import { SellerProductsPage } from './pages/seller/SellerProductsPage';
import { SellerFinancePage } from './pages/seller/SellerFinancePage';
import { SellerSourcingPage } from './pages/seller/SellerSourcingPage';

// Call Center Pages
import { CallCenterDashboardPage } from './pages/call-center/CallCenterDashboardPage';
import { CallCenterOrdersPage } from './pages/call-center/CallCenterOrdersPage';

// Manager Pages
import { ManagerDashboardPage } from './pages/manager/ManagerDashboardPage';
import { ManagerOrdersPage } from './pages/manager/ManagerOrdersPage';
import { ManagerAgentsPage } from './pages/manager/ManagerAgentsPage';
import { ManagerPerformancePage } from './pages/manager/ManagerPerformancePage';
import { ManagerStatisticsPage } from './pages/manager/ManagerStatisticsPage';

// Stock Keeper Pages
import { StockDashboardPage } from './pages/stock/StockDashboardPage';
import { StockInventoryPage } from './pages/stock/StockInventoryPage';
import { StockReceivingPage } from './pages/stock/StockReceivingPage';
import { StockPickingPage } from './pages/stock/StockPickingPage';
import { StockReturnsPage } from './pages/stock/StockReturnsPage';
import { StockWarehousesPage } from './pages/stock/StockWarehousesPage';
import { StockHistoryPage } from './pages/stock/StockHistoryPage';
import { PackagingDashboardPage } from './pages/packaging/PackagingDashboardPage';
import { DeliveryDashboardPage } from './pages/delivery/DeliveryDashboardPage';
import { DeliveryOrdersPage } from './pages/delivery/DeliveryOrdersPage';
import { DeliveryPerformancePage } from './pages/delivery/DeliveryPerformancePage';
import { DeliverySettingsPage } from './pages/delivery/DeliverySettingsPage';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes - Using MainLayout as strictly requested */}
          <Route path="/admin/dashboard" element={
            <MainLayout>
              <AdminDashboardPage />
            </MainLayout>
          } />

          <Route path="/admin/users" element={
            <MainLayout>
              <AdminUsersPage />
            </MainLayout>
          } />

          <Route path="/admin/sellers" element={
            <MainLayout>
              <AdminSellersPage />
            </MainLayout>
          } />

          <Route path="/admin/orders" element={
            <MainLayout>
              <AdminOrdersPage />
            </MainLayout>
          } />

          <Route path="/admin/products" element={
            <MainLayout>
              <AdminProductsPage />
            </MainLayout>
          } />

          <Route path="/admin/products/add" element={
            <MainLayout>
              <AdminAddProductPage />
            </MainLayout>
          } />

          <Route path="/admin/inventory" element={
            <MainLayout>
              <AdminInventoryPage />
            </MainLayout>
          } />

          <Route path="/admin/inventory/warehouses" element={
            <MainLayout>
              <AdminWarehousesPage />
            </MainLayout>
          } />

          <Route path="/admin/inventory/warehouses/add" element={
            <MainLayout>
              <AdminAddWarehousePage />
            </MainLayout>
          } />

          <Route path="/admin/finance" element={
            <MainLayout>
              <AdminFinancePage />
            </MainLayout>
          } />

          <Route path="/admin/finance/payments" element={
            <MainLayout>
              <AdminPaymentManagementPage />
            </MainLayout>
          } />

          <Route path="/admin/finance/payments/add" element={
            <MainLayout>
              <AdminAddPaymentPage />
            </MainLayout>
          } />





          <Route path="/admin/finance/platforms" element={
            <MainLayout>
              <AdminPaymentPlatformsPage />
            </MainLayout>
          } />

          <Route path="/admin/finance/reports" element={
            <MainLayout>
              <AdminFinancialReportsPage />
            </MainLayout>
          } />

          <Route path="/admin/finance/invoices/create" element={
            <MainLayout>
              <AdminCreateInvoicePage />
            </MainLayout>
          } />



          // ...

          <Route path="/admin/finance/invoices/create" element={
            <MainLayout>
              <AdminCreateInvoicePage />
            </MainLayout>
          } />

          <Route path="/admin/sourcing" element={
            <MainLayout>
              <AdminSourcingPage />
            </MainLayout>
          } />

          <Route path="/admin/sourcing/create" element={
            <MainLayout>
              <AdminCreateSourcingRequestPage />
            </MainLayout>
          } />

          <Route path="/admin/sourcing/requests" element={
            <MainLayout>
              <AdminSourcingRequestsPage />
            </MainLayout>
          } />

          <Route path="/admin/sourcing/suppliers" element={
            <MainLayout>
              <AdminSuppliersPage />
            </MainLayout>
          } />


          <Route path="/admin/packaging" element={
            <MainLayout>
              <AdminPackagingPage />
            </MainLayout>
          } />

          <Route path="/admin/call-center" element={
            <MainLayout>
              <AdminCallCenterPage />
            </MainLayout>
          } />

          <Route path="/admin/delivery" element={
            <MainLayout>
              <AdminDeliveryPage />
            </MainLayout>
          } />

          <Route path="/admin/subscribers" element={
            <MainLayout>
              <AdminSubscribersPage />
            </MainLayout>
          } />

          <Route path="/admin/roles" element={
            <MainLayout>
              <AdminRolesPage />
            </MainLayout>
          } />


          {/* Seller Routes - Using MainLayout for consistency */}
          <Route path="/seller/dashboard" element={
            <MainLayout>
              <SellerDashboardPage />
            </MainLayout>
          } />

          <Route path="/seller/orders" element={
            <MainLayout>
              <SellerOrdersPage />
            </MainLayout>
          } />

          <Route path="/seller/inventory" element={
            <MainLayout>
              <SellerInventoryPage />
            </MainLayout>
          } />

          <Route path="/seller/products" element={
            <MainLayout>
              <SellerProductsPage />
            </MainLayout>
          } />

          <Route path="/seller/finance" element={
            <MainLayout>
              <SellerFinancePage />
            </MainLayout>
          } />

          <Route path="/seller/sourcing" element={
            <MainLayout>
              <SellerSourcingPage />
            </MainLayout>
          } />

          {/* Call Center Routes - Using MainLayout */}
          <Route path="/call-center/dashboard" element={
            <MainLayout>
              <CallCenterDashboardPage />
            </MainLayout>
          } />

          <Route path="/call-center/orders" element={
            <MainLayout>
              <CallCenterOrdersPage />
            </MainLayout>
          } />



          {/* Call Center Manager Routes - Using MainLayout */}
          <Route path="/manager/dashboard" element={
            <MainLayout>
              <ManagerDashboardPage />
            </MainLayout>
          } />

          <Route path="/manager/orders" element={
            <MainLayout>
              <ManagerOrdersPage />
            </MainLayout>
          } />

          <Route path="/manager/agents" element={
            <MainLayout>
              <ManagerAgentsPage />
            </MainLayout>
          } />

          <Route path="/manager/performance" element={
            <MainLayout>
              <ManagerPerformancePage />
            </MainLayout>
          } />

          <Route path="/manager/statistics" element={
            <MainLayout>
              <ManagerStatisticsPage />
            </MainLayout>
          } />



          {/* Stock Keeper Routes - Using MainLayout */}
          <Route path="/stock/dashboard" element={
            <MainLayout>
              <StockDashboardPage />
            </MainLayout>
          } />
          <Route path="/stock/inventory" element={
            <MainLayout>
              <StockInventoryPage />
            </MainLayout>
          } />
          <Route path="/stock/receiving" element={
            <MainLayout>
              <StockReceivingPage />
            </MainLayout>
          } />
          <Route path="/stock/picking" element={
            <MainLayout>
              <StockPickingPage />
            </MainLayout>
          } />
          <Route path="/stock/returns" element={
            <MainLayout>
              <StockReturnsPage />
            </MainLayout>
          } />

          <Route path="/stock/warehouses" element={
            <MainLayout>
              <StockWarehousesPage />
            </MainLayout>
          } />

          <Route path="/stock/history" element={
            <MainLayout>
              <StockHistoryPage />
            </MainLayout>
          } />

          {/* Packaging Agent Routes - Using MainLayout */}
          <Route path="/packaging/dashboard" element={
            <MainLayout>
              <PackagingDashboardPage />
            </MainLayout>
          } />

          {/* Delivery Agent Routes - Using MainLayout */}
          <Route path="/delivery/dashboard" element={
            <MainLayout>
              <DeliveryDashboardPage />
            </MainLayout>
          } />
          <Route path="/delivery/orders" element={
            <MainLayout>
              <DeliveryOrdersPage />
            </MainLayout>
          } />
          <Route path="/delivery/performance" element={
            <MainLayout>
              <DeliveryPerformancePage />
            </MainLayout>
          } />
          <Route path="/delivery/settings" element={
            <MainLayout>
              <DeliverySettingsPage />
            </MainLayout>
          } />

          {/* Fallback to dashboard for unknown routes if logged in, or login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
