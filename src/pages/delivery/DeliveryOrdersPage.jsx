
import React from 'react';
import { Home, Truck, Layout, BarChart, Settings, ShoppingCart, Search, Filter, Scan, Box, X, Check, AlertCircle, Eye } from 'lucide-react';
import { deliveryOrdersData } from '../../data/deliveryDummyData';
import { useNavigate } from 'react-router-dom';

export function DeliveryOrdersPage() {
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
                <span className="font-medium text-gray-900">Orders</span>
            </div>

            {/* Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                        <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Delivery Orders</h1>
                        <p className="text-gray-500 text-sm">Manage orders ready for delivery or in transit.</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => navigate('/delivery/dashboard')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-100/50 rounded-xl mr-4">
                        <Box className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Ready for Delivery</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.ready}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-yellow-100/50 rounded-xl mr-4">
                        <Truck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">In Delivery</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.inDelivery}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-green-100/50 rounded-xl mr-4">
                        <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Delivered</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.delivered}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-red-100/50 rounded-xl mr-4">
                        <X className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Failed Deliveries</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.failed}</h3>
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

            {/* Filters */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="md:col-span-2">
                        <label className="block text-xs font-bold mb-2 text-gray-500">Search</label>
                        <input type="text" placeholder="Order Code, Customer, Phone..." className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold mb-2 text-gray-500">Status</label>
                        <select className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                            <option>All Statuses</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold mb-2 text-gray-500">Date Filter</label>
                        <select className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                            <option>All Dates</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center">
                        <Search className="w-4 h-4 mr-2" />
                        Apply Filters
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center">
                        <X className="w-4 h-4 mr-2" />
                        Clear Filters
                    </button>
                </div>
            </div>

            {/* Orders List Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center">
                    <Layout className="w-5 h-5 text-blue-600 mr-2" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Orders List</h3>
                        <p className="text-gray-500 text-sm">Showing 1-20 of 50 orders</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-yellow-100/50 text-xs font-bold text-gray-500 uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left">Order Code</th>
                                <th className="px-6 py-4 text-left">Customer</th>
                                <th className="px-6 py-4 text-left">Address</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-left">Amount</th>
                                <th className="px-6 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {deliveryOrdersData.orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800 text-sm">{order.code}</div>
                                        <div className="text-xs text-gray-500">{idx === 0 ? "Jan 17, 2026" : idx === 1 ? "Jan 03, 2026" : "Jan 20, 2026"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800 text-sm">{order.customer}</div>
                                        <div className="text-xs text-gray-500">{order.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">{order.address}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-3 py-1 rounded-full font-medium border ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.amount}</td>
                                    <td className="px-6 py-4 text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button className="flex items-center text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-100">
                                                <Eye className="w-3 h-3 mr-1" /> View
                                            </button>
                                            <button className="flex items-center text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-100">
                                                <Check className="w-3 h-3 mr-1" /> Update
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

