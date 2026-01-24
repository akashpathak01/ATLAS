import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    Store,
    Truck,
    Settings,
    LogOut,
    PieChart,
    FileText,
    Warehouse,
    DollarSign,
    Globe,
    Box,
    Headphones,
    UserCheck,
    Shield,
    RefreshCw
} from 'lucide-react';
import { cn } from '../lib/utils';

const roleMenus = {
    'Super Admin': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
        { icon: Users, label: 'Users', href: '/admin/users' },
        { icon: Store, label: 'Sellers', href: '/admin/sellers' },
        { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
        { icon: Package, label: 'Products', href: '/admin/products' },
        { icon: Warehouse, label: 'Inventory', href: '/admin/inventory' },
        { icon: DollarSign, label: 'Finance', href: '/admin/finance' },
        { icon: Globe, label: 'Sourcing', href: '/admin/sourcing' },
        { icon: Box, label: 'Packaging', href: '/admin/packaging' },
        { icon: Headphones, label: 'Call Center', href: '/admin/call-center' },
        { icon: Truck, label: 'Delivery', href: '/admin/delivery' },
        { icon: UserCheck, label: 'Subscribers', href: '/admin/subscribers' },
        { icon: Shield, label: 'Roles', href: '/admin/roles' },

    ],
    'Admin': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
        { icon: Users, label: 'Users', href: '/admin/users' },
        { icon: Store, label: 'Sellers', href: '/admin/sellers' },
        { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
        { icon: Package, label: 'Products', href: '/admin/products' },
        { icon: Warehouse, label: 'Inventory', href: '/admin/inventory' },
        { icon: DollarSign, label: 'Finance', href: '/admin/finance' },
        { icon: Globe, label: 'Sourcing', href: '/admin/sourcing' },
        { icon: Box, label: 'Packaging', href: '/admin/packaging' },
        { icon: Headphones, label: 'Call Center', href: '/admin/call-center' },
        { icon: Truck, label: 'Delivery', href: '/admin/delivery' },
        { icon: UserCheck, label: 'Subscribers', href: '/admin/subscribers' },
    ],
    'Seller': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/seller/dashboard' },
        { icon: ShoppingCart, label: 'Orders', href: '/seller/orders' },
        { icon: Warehouse, label: 'Inventory', href: '/seller/inventory' },
        { icon: Package, label: 'Products', href: '/seller/products' },
        { icon: DollarSign, label: 'Finance', href: '/seller/finance' },
        { icon: Globe, label: 'Sourcing', href: '/seller/sourcing' },
    ],
    'Call Center Agent': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/call-center/dashboard' },
        { icon: ShoppingCart, label: 'Orders', href: '/call-center/orders' },
    ],
    'Call Center Manager': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/manager/dashboard' },
        { icon: ShoppingCart, label: 'Orders', href: '/manager/orders' },
        { icon: Users, label: 'Agents', href: '/manager/agents' },
        { icon: PieChart, label: 'Performance', href: '/manager/performance' },
        { icon: PieChart, label: 'Statistics', href: '/manager/statistics' },
        { icon: Settings, label: 'Settings', href: '/manager/settings' }, // Optional, linking for completeness
    ],
    'Stock Keeper': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/stock/dashboard' },
        { icon: Warehouse, label: 'Inventory Management', href: '/stock/inventory' },
        { icon: Truck, label: 'Receiving', href: '/stock/receiving' },
        { icon: ShoppingCart, label: 'Order Picking', href: '/stock/picking' },
        { icon: RefreshCw, label: 'Return Orders', href: '/stock/returns' },
        { icon: Warehouse, label: 'Warehouses', href: '/stock/warehouses' }, // Placeholder based on sidebar
        { icon: FileText, label: 'Stock History', href: '/stock/history' }, // Placeholder based on sidebar
    ],
    'Packaging Agent': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/packaging/dashboard' },
        { icon: ShoppingCart, label: 'Orders', href: '/packaging/orders' },
        { icon: Package, label: 'Materials', href: '/packaging/materials' },
        { icon: Settings, label: 'Materials Management', href: '/packaging/management' },
        { icon: FileText, label: 'Reports', href: '/packaging/reports' },
    ],
    'Delivery Agent': [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/delivery/dashboard' },
        { icon: ShoppingCart, label: 'Orders', href: '/delivery/orders' },
        { icon: PieChart, label: 'Performance', href: '/delivery/performance' },
        { icon: Settings, label: 'Settings', href: '/delivery/settings' },
    ],
};

export function Sidebar({ isOpen, onClose }) {
    const { user, logout } = useAuth();
    const currentRole = user?.role || 'Super Admin';
    const menuItems = roleMenus[currentRole] || roleMenus['Super Admin'];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-16 left-0 bottom-0 w-[280px] bg-white border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto custom-scrollbar shadow-lg lg:shadow-none",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Header Section */}
                    <div className="px-6 pt-6 pb-2">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {currentRole}
                        </h3>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 px-3 space-y-1">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) => cn(
                                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-200 group relative mb-1",
                                    isActive
                                        ? "bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon
                                            className={cn(
                                                "w-5 h-5 mr-3 transition-colors duration-200",
                                                isActive ? "text-yellow-600" : "text-gray-400 group-hover:text-gray-500"
                                            )}
                                        />
                                        <span className="relative z-10">{item.label}</span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Footer Section (Sign Out) */}
                    <div className="p-4 border-t border-gray-100 mt-auto">
                        <button
                            onClick={logout}
                            className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-all duration-200 group"
                        >
                            <LogOut className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
