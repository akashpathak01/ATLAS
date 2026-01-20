
import React from 'react';
import { sellerOrdersData } from '../../data/sellerDummyData';
import { ShoppingCart, Plus, Upload, Download, Home, Search, Calendar, User, Phone, MapPin, Package } from 'lucide-react';

export function SellerOrdersPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Orders</span>
            </div>

            {/* Header & Actions */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <ShoppingCart className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Order Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage your order processing and fulfillment</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Order
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Upload className="w-4 h-4 mr-2" />
                        Import Orders
                    </button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" />
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
                <p className="text-sm text-gray-500 mb-6">Find and filter orders quickly</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Orders</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by order ID, customer"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="All Time"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Orders List</h3>
                        <p className="text-sm text-gray-500">Manage and monitor your orders</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Total Orders</p>
                        <p className="text-xl font-bold text-orange-600">61</p>
                    </div>
                </div>

                {/* Info Alert */}
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-blue-700 font-medium">
                                يمكن للسيلر ان يحذف الطلبية حالة pending اذا لساتاه في
                            </p>
                            <p className="text-sm text-blue-600 mt-1">
                                Note: If an order status is still pending, the seller can delete the order.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-gray-700">Order ID</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Customer</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Address</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Payment</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sellerOrdersData.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{order.customer}</p>
                                                <p className="text-xs text-gray-500">{order.phone}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3 text-gray-500">
                                                <Package className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{order.product}</p>
                                                <p className="text-xs text-gray-500">Qty: {order.qty}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                                            <span>{order.address}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-md text-xs font-medium ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                                    'bg-gray-100 text-gray-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">
                                            {order.payment}
                                        </span>
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
