
import React from 'react';
import { Home, Truck, Layout, BarChart, Settings, ShoppingCart, Search, Filter, Scan, Package, Eye, Clock, List, Box } from 'lucide-react';
import { deliveryDashboardData } from '../../data/deliveryDummyData';
import { useNavigate } from 'react-router-dom';

export function DeliveryDashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <Truck className="w-4 h-4 mr-2" />
                <span className="mr-2">Delivery</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Dashboard</span>
            </div>

            {/* Header with Actions */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 bg-orange-100 rounded-full mr-4">
                        <Truck className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Delivery Management</h1>
                        <p className="text-gray-500 text-sm">Manage and track your delivery assignments</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/delivery/performance')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <BarChart className="w-4 h-4 mr-2" />
                        Performance
                    </button>
                    <button onClick={() => navigate('/delivery/settings')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-4 bg-orange-100/50 rounded-xl mr-4">
                        <ShoppingCart className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryDashboardData.stats.total}</h3>
                        <p className="text-gray-400 text-xs flex items-center mt-1">
                            <span className="text-green-500 mr-1">↑</span> All orders
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-4 bg-blue-100/50 rounded-xl mr-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryDashboardData.stats.pending}</h3>
                        <p className="text-gray-400 text-xs flex items-center mt-1">
                            <span className="text-blue-500 mr-1">↑</span> Awaiting delivery
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-4 bg-purple-100/50 rounded-xl mr-4">
                        <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Processing</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryDashboardData.stats.processing}</h3>
                        <p className="text-gray-400 text-xs flex items-center mt-1">
                            <span className="text-purple-500 mr-1">↑</span> In progress
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-4 bg-green-100/50 rounded-xl mr-4">
                        <Truck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Shipped</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryDashboardData.stats.shipped}</h3>
                        <p className="text-gray-400 text-xs flex items-center mt-1">
                            <span className="text-green-500 mr-1">↑</span> Ready for delivery
                        </p>
                    </div>
                </div>
            </div>

            {/* Scan Barcode */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4">
                        <Scan className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-blue-900">Scan Order Barcode</h3>
                        <p className="text-blue-600 text-sm">Use barcode scanner to quickly find orders</p>
                    </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center font-bold shadow-sm transition-colors">
                    <Scan className="w-4 h-4 mr-2" />
                    Open Scanner
                </button>
            </div>


            {/* Filter & Search */}
            <div className="bg-yellow-500 p-6 rounded-xl shadow-sm text-white">
                <div className="flex items-center mb-4">
                    <Search className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-lg">Filter & Search</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-xs font-bold mb-1 opacity-90">Status</label>
                        <select className="w-full bg-white text-gray-700 rounded-lg p-2.5 focus:outline-none text-sm cursor-pointer">
                            <option>All Statuses</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold mb-1 opacity-90">Date Range</label>
                        <select className="w-full bg-white text-gray-700 rounded-lg p-2.5 focus:outline-none text-sm cursor-pointer">
                            <option>All Time</option>
                        </select>
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-xs font-bold mb-1 opacity-90">Search</label>
                        <input type="text" placeholder="Search orders..." className="w-full bg-white text-gray-700 rounded-lg p-2.5 focus:outline-none text-sm placeholder-gray-400" />
                    </div>
                    <div className="flex items-end">
                        <button className="w-full bg-white text-yellow-600 font-bold py-2.5 rounded-lg hover:bg-yellow-50 transition-colors shadow-sm">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">All Orders</h3>
                    <p className="text-gray-500 text-sm">All delivery orders with pagination</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-yellow-100/50 text-xs font-bold text-gray-600 uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left">Order ID</th>
                                <th className="px-6 py-4 text-left">Customer</th>
                                <th className="px-6 py-4 text-left">Date</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-left">Priority</th>
                                <th className="px-6 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {deliveryDashboardData.orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium border border-gray-200">
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.priority}</td>
                                    <td className="px-6 py-4 text-sm font-medium">
                                        <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                                        <button className="text-green-600 hover:text-green-800">Start Delivery</button>
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
