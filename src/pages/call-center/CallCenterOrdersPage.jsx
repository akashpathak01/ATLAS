
import React from 'react';
import { callCenterOrdersData } from '../../data/callCenterDummyData';
import { Home, Phone, List, Filter, Search, X, Check, Clock, AlertCircle } from 'lucide-react';

export function CallCenterOrdersPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Call Center</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Agent Order List</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <List className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">My Assigned Orders</h1>
                        <p className="text-gray-500 text-sm mt-1">View and manage your assigned orders</p>
                    </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                    ← Back to Dashboard
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        <List className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Assigned</p>
                        <h3 className="text-2xl font-bold text-gray-900">{callCenterOrdersData.stats.totalAssigned}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-orange-50 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pending</p>
                        <h3 className="text-2xl font-bold text-gray-900">{callCenterOrdersData.stats.pending}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <Check className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Confirmed</p>
                        <h3 className="text-2xl font-bold text-gray-900">{callCenterOrdersData.stats.confirmed}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-red-50 rounded-lg mr-4">
                        <X className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Cancelled</p>
                        <h3 className="text-2xl font-bold text-gray-900">{callCenterOrdersData.stats.cancelled}</h3>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Filters & Search</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <div className="relative">
                            <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm text-gray-600">
                                <option>All Status</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                        <div className="relative">
                            <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm text-gray-600">
                                <option>All Priorities</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Apply Filters
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm">
                        <X className="w-4 h-4 mr-2" />
                        Clear
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium shadow-sm ml-auto">
                        <span className="mr-2">+</span>
                        تعيين الطلبات
                    </button>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden run-in">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Orders</h3>
                    <p className="text-sm text-gray-500">Total: 17 orders</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-600">ORDER ID</th>
                                <th className="px-6 py-4 font-bold text-gray-600">CUSTOMER</th>
                                <th className="px-6 py-4 font-bold text-gray-600">PRODUCT</th>
                                <th className="px-6 py-4 font-bold text-gray-600">PRICE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">ADDRESS</th>
                                <th className="px-6 py-4 font-bold text-gray-600">STATUS</th>
                                <th className="px-6 py-4 font-bold text-gray-600">DATE</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {callCenterOrdersData.orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{order.customer}</div>
                                        <div className="text-xs text-gray-500">{order.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{order.product}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-green-600">{order.price}</div>
                                        <div className="text-xs text-gray-400">per unit</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start text-xs text-gray-500 max-w-xs">
                                            <div className="mr-1 mt-0.5"><svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg></div>
                                            {order.address}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-sm">
                                            <Clock className="w-3 h-3 text-yellow-500 mr-1.5" />
                                            <div>
                                                <div className="font-bold text-gray-900">{order.statusAr}</div>
                                                <div className="text-[10px] text-gray-500">{order.status}</div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-xs">
                                        {order.date}
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
