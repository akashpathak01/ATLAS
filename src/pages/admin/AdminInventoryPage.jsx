
import React from 'react';
import { adminInventoryData, adminInventoryStats } from '../../data/adminDummyData';
import { Search, AlertTriangle, Package, Warehouse, DollarSign, RefreshCw } from 'lucide-react';

export function AdminInventoryPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Inventory Dashboard</h1>

            {/* Inventory Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Items</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminInventoryStats.totalItems}</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Package className="w-5 h-5 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Low Stock</p>
                        <h3 className="text-xl font-bold text-yellow-600 mt-1">{adminInventoryStats.lowStock}</h3>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Out of Stock</p>
                        <h3 className="text-xl font-bold text-red-600 mt-1">{adminInventoryStats.outOfStock}</h3>
                    </div>
                    <div className="p-2 bg-red-50 rounded-lg">
                        <Warehouse className="w-5 h-5 text-red-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Value</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminInventoryStats.totalValue}</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                </div>
            </div>

            {/* Low Stock & Inventory Management */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Inventory Table */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900">Inventory Items</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search inventory..."
                                className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-yellow-500"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Product / SKU</th>
                                    <th className="px-6 py-3">Location</th>
                                    <th className="px-6 py-3">Quantity</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminInventoryData.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">{item.product}</p>
                                                <p className="text-xs text-gray-500">{item.sku}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{item.location}</td>
                                        <td className="px-6 py-4 font-medium">{item.quantity}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.quantity === 0 ? 'bg-red-100 text-red-700' :
                                                    item.quantity < 10 ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-green-100 text-green-700'
                                                }`}>
                                                {item.quantity === 0 ? 'Out of Stock' : item.quantity < 10 ? 'Low Stock' : 'In Stock'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Alerts Section */}
                <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-3" />
                            <div>
                                <h3 className="font-semibold text-red-900">Critical Stock Alerts</h3>
                                <p className="text-sm text-red-700 mt-1">5 items are completely out of stock and need immediate replenishment.</p>
                                <button className="mt-3 text-sm font-medium text-red-700 hover:text-red-900 underline">
                                    View Out of Stock Items
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center space-x-3 mb-4">
                            <RefreshCw className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">Recent Updates</h3>
                        </div>
                        <div className="space-y-4">
                            {adminInventoryData.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Stock updated for <span className="font-medium text-gray-900">{item.product}</span></span>
                                    <span className="text-gray-400 text-xs">2h ago</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
