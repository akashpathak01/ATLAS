
import React from 'react';
import { managerOrdersData } from '../../data/managerDummyData';
import { Home, List, ShoppingCart, Clock, Settings, CheckCircle, Users, DollarSign, Filter, Search, X, Eye, Edit } from 'lucide-react';

export function ManagerOrdersPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mr-2">Home</span> {/* This repetition is in the screenshot? No, looks like Home > icon? > home text? I'll stick to standard breadcrumb */}
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <List className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Orders Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and track all orders</p>
                    </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                    ← Back to Dashboard
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        <ShoppingCart className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.totalOrders}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-yellow-50 rounded-lg mr-3">
                        <Clock className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Pending</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.pending}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-purple-50 rounded-lg mr-3">
                        <Settings className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Processing</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.processing}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-green-50 rounded-lg mr-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Completed</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.completed}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-purple-50 rounded-lg mr-3">
                        <Users className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Active Agents</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.activeAgents}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-2 bg-green-50 rounded-lg mr-3">
                        <DollarSign className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Today's Revenue</p>
                        <h3 className="text-xl font-bold text-gray-900">{managerOrdersData.stats.todaysRevenue}</h3>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                    <Filter className="w-5 h-5 text-blue-500 mr-2" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Filters & Search</h3>
                        <p className="text-xs text-gray-500">Refine your order list with filtering options</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Search</label>
                        <input
                            type="text"
                            placeholder="Order code, customer..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Status</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                            <option>All Statuses</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Agent</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                            <option>All Agents</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Date Range</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                            <option>All Dates</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Sort By</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm">
                        <Search className="w-4 h-4 mr-2" />
                        Apply Filters
                    </button>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm">
                        <X className="w-4 h-4 mr-2" />
                        Clear Filters
                    </button>
                </div>
            </div>

            {/* Orders List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center">
                    <div className="p-1.5 bg-blue-100 rounded mr-2">
                        <List className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Orders List</h3>
                        <p className="text-xs text-gray-500">Showing 1-20 of 67 orders</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-600">ORDER CODE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">CUSTOMER</th>
                                <th className="px-6 py-4 font-bold text-gray-600">STATUS</th>
                                <th className="px-6 py-4 font-bold text-gray-600">AGENT</th>
                                <th className="px-6 py-4 font-bold text-gray-600">CREATED</th>
                                <th className="px-6 py-4 font-bold text-gray-600">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {managerOrdersData.orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{order.id}</div>
                                        <div className="text-xs text-gray-500">{order.amount}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{order.customer}</div>
                                        <div className="text-xs text-gray-500">{order.customerPhone}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full font-medium">{order.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 italic">
                                        {order.agent}
                                    </td>
                                    <td className="px-6 py-4 text-xs text-gray-500">
                                        <div className="font-medium">{order.created.split(' ')[0]} {order.created.split(' ')[1]} {order.created.split(' ')[2]}</div>
                                        <div className="text-gray-400">{order.created.split(' ')[3]}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <button className="flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded border border-blue-200 hover:bg-blue-100">
                                                <Eye className="w-3 h-3 mr-1" /> View
                                            </button>
                                            <button className="flex items-center px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded border border-green-200 hover:bg-green-100">
                                                <Edit className="w-3 h-3 mr-1" /> Edit
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
