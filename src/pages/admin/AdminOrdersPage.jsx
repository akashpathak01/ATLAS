
import React from 'react';
import { adminOrdersData, adminOrderStats } from '../../data/adminDummyData';
import { Search, Filter, Download, Eye, MoreVertical, ShoppingBag, Clock, CheckCircle, XCircle } from 'lucide-react';

export function AdminOrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    Export Orders
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Orders</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminOrderStats.total}</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <ShoppingBag className="w-5 h-5 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Pending</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminOrderStats.pending}</h3>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded-lg">
                        <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Delivered</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminOrderStats.delivered}</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Cancelled</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminOrderStats.cancelled}</h3>
                    </div>
                    <div className="p-2 bg-red-50 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by Order ID, Customer..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-yellow-500 bg-white">
                        <option>All Status</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                    <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Filter className="w-4 h-4 mr-2" />
                        More Filters
                    </button>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Order ID</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Seller</th>
                                <th className="px-6 py-3">Items</th>
                                <th className="px-6 py-3">Total</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminOrdersData.map((order) => (
                                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-500">{order.seller}</td>
                                    <td className="px-6 py-4">{order.items}</td>
                                    <td className="px-6 py-4 font-medium">{order.total}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                    order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                                                        order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                                            'bg-gray-100 text-gray-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                                <MoreVertical className="w-4 h-4" />
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
