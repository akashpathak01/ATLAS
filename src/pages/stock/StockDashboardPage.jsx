
import React, { useState } from 'react';
import { stockDashboardData } from '../../data/stockDummyData';
import { Home, Package, Box, Warehouse, AlertTriangle, XCircle, ClipboardList, CheckCircle, X, Calendar } from 'lucide-react';

export function StockDashboardPage() {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            {showBanner && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex justify-between items-center text-green-700">
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span className="font-medium">Welcome Stock Keeper! Login successful.</span>
                    </div>
                    <button onClick={() => setShowBanner(false)} className="text-green-500 hover:text-green-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Dashboard</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Package className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Stock Keeper Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage warehouse inventory and stock operations</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                    <select className="border border-gray-200 rounded-lg text-sm px-3 py-2 text-gray-600 focus:outline-none bg-white">
                        <option>All Time</option>
                    </select>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Custom Range
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Products</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.totalProducts}</h3>
                    </div>
                    <div className="p-4 bg-blue-100 rounded-xl">
                        <Package className="w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Pieces</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.totalPieces}</h3>
                    </div>
                    <div className="p-4 bg-green-100 rounded-xl">
                        <Box className="w-8 h-8 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Warehouses</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.warehouses}</h3>
                    </div>
                    <div className="p-4 bg-orange-100 rounded-xl">
                        <Warehouse className="w-8 h-8 text-orange-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Near Expiry</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.nearExpiry}</h3>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-xl">
                        <AlertTriangle className="w-8 h-8 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Out of Stock</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.outOfStock}</h3>
                    </div>
                    <div className="p-4 bg-red-100 rounded-xl">
                        <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Orders Awaiting Pick</p>
                        <h3 className="text-4xl font-bold text-gray-900">{stockDashboardData.stats.ordersAwaitingPick}</h3>
                    </div>
                    <div className="p-4 bg-purple-100 rounded-xl">
                        <ClipboardList className="w-8 h-8 text-purple-600" />
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Stock Status</h3>
                    <div className="flex items-center justify-center h-64">
                        {/* Simple Donut Chart Representation using CSS */}
                        <div className="relative w-48 h-48 rounded-full border-[16px] border-emerald-500 flex items-center justify-center">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900">{stockDashboardData.stockStatus.totalItems}</span>
                                <span className="text-gray-500 text-xs">Total Items</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Quantities by Warehouse</h3>
                    <div className="flex items-center justify-center h-64 text-gray-400">
                        {/* Empty chart placeholder as per screenshot implication (though screenshot cuts off) */}
                        <p>Chart data will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
