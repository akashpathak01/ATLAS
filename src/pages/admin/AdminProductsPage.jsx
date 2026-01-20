
import React from 'react';
import { adminProductsData } from '../../data/adminDummyData';
import { Search, Filter, Plus, Edit, Trash2, MoreVertical, Package } from 'lucide-react';

export function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
                <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                </button>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products by name, SKU..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-yellow-500 bg-white">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home</option>
                        <option>Sports</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-yellow-500 bg-white">
                        <option>All Status</option>
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>Out of Stock</option>
                    </select>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Product Name</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Stock</th>
                                <th className="px-6 py-3">Seller</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminProductsData.map((product) => (
                                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3 text-gray-500">
                                                <Package className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                                    <td className="px-6 py-4">{product.stock}</td>
                                    <td className="px-6 py-4 text-gray-600">{product.seller}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                                product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-1 text-gray-400 hover:text-blue-600">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-red-600">
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
