
import React from 'react';
import { adminOrderStats, adminOrdersData, adminProductsData, adminFinanceData } from '../../data/adminDummyData';
import { Users, ShoppingCart, DollarSign, Package } from 'lucide-react';

export function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminFinanceData.revenue.total}</h3>
                        </div>
                        <div className="p-2 bg-green-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Orders</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminOrderStats.total}</h3>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <ShoppingCart className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Products</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminProductsData.length}</h3>
                        </div>
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <Package className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Active Users</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">1,234</h3>
                        </div>
                        <div className="p-2 bg-orange-50 rounded-lg">
                            <Users className="w-5 h-5 text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders - Dummy Table/Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Order ID</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminOrdersData.slice(0, 5).map((order) => (
                                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
