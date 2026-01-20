
import React from 'react';
import { sellerInventoryData } from '../../data/sellerDummyData';
import { Warehouse, Plus, Upload, Home, Search, AlertTriangle, XCircle, Package, Edit, Trash2, Eye } from 'lucide-react';

export function SellerInventoryPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Inventory</span>
            </div>

            {/* Header & Actions */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Warehouse className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Inventory Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage your product inventory and stock levels</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                    </button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Upload className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Search & Filters</h3>
                <p className="text-sm text-gray-500 mb-6">Find and filter inventory items quickly</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Inventory</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, SKU, etc."
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Warehouse</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Warehouses</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Levels</option>
                        </select>
                    </div>
                    <div>
                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                        <Package className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Items</p>
                        <h3 className="text-2xl font-bold text-gray-900">31</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Low Stock</p>
                        <h3 className="text-2xl font-bold text-gray-900">0</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                        <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Out of Stock</p>
                        <h3 className="text-2xl font-bold text-gray-900">0</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <Warehouse className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Warehouses</p>
                        <h3 className="text-2xl font-bold text-gray-900">1</h3>
                    </div>
                </div>
            </div>

            {/* Inventory List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Inventory List</h3>
                        <p className="text-sm text-gray-500">Manage and monitor your inventory</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Total Products</p>
                        <p className="text-xl font-bold text-orange-600">31</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">SKU</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Stock Level</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Warehouse</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Last Updated</th>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sellerInventoryData.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center mr-3 text-gray-500">
                                                <Package className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{item.name}</p>
                                                <p className="text-xs text-gray-500">{item.model}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.sku}</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.stock}</span>
                                            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">{item.stockStatus}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{item.warehouse}</td>
                                    <td className="px-6 py-4 text-gray-500">{item.lastUpdated}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
