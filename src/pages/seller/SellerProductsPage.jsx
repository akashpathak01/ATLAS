
import React from 'react';
import { sellerProductsData } from '../../data/sellerDummyData';
import { Package, Plus, Upload, Home, Search, Eye, Edit, Trash2 } from 'lucide-react';

export function SellerProductsPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Products</span>
            </div>

            {/* Header & Actions */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Package className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Product Management</h1>
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
                <p className="text-sm text-gray-500 mb-6">Find and filter products quickly</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, code, etc"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Status</option>
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

            {/* Products List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Products List</h3>
                        <p className="text-sm text-gray-500">Manage and monitor your products</p>
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
                                <th className="px-6 py-3 font-semibold text-gray-700">Code</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Stock Level</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Approval</th>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sellerProductsData.map((product, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3 text-orange-500 flex-shrink-0">
                                                <Package className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.model}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-700 text-xs">
                                        {product.code}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.stock}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium border border-green-100">
                                            {product.approval}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 rounded text-white shadow-sm transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded text-white shadow-sm transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded text-white shadow-sm transition-colors">
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
