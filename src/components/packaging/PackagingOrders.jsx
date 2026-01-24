import React, { useState } from 'react';
import { Search, Filter, ScanLine, Info, HelpCircle, Package, ArrowRight, Eye, Printer, CheckSquare } from 'lucide-react';

export function PackagingOrders({ onNavigate }) {
    // Mock data
    const orders = [
        { id: 'ORD-2025-001', product: 'Wireless Headphones', customer: 'Ahmed Ali', address: 'Dubai, UAE', quantity: 2, status: 'Pending', date: '2025-01-23' },
        { id: 'ORD-2025-002', product: 'Smart Watch', customer: 'Fatima Hassan', address: 'Abu Dhabi, UAE', quantity: 1, status: 'In Progress', date: '2025-01-23' },
        { id: 'ORD-2025-003', product: 'Running Shoes', customer: 'John Doe', address: 'Sharjah, UAE', quantity: 1, status: 'Ready', date: '2025-01-22' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Orders List</h1>
                    <p className="text-sm text-gray-500">Manage orders for packaging</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 flex items-center gap-2"
                >
                    Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Orders List Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Orders List</h2>
                        </div>

                        {/* Search Bar Code Section */}
                        <div className="p-6 bg-blue-50 border-b border-blue-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <ScanLine className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold text-blue-900">Scan Order Barcode</h3>
                                        <p className="text-xs text-blue-700">Use barcode scanner or enter order code manually</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2">
                                    Open Scanner
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter order code (e.g., ORD-2025-001)"
                                    className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="p-4 flex flex-col md:flex-row gap-4 border-b border-gray-100">
                            <div className="flex-1">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Status</label>
                                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none">
                                    <option>All Statuses</option>
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Ready</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Time Period</label>
                                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none">
                                    <option>All Time</option>
                                    <option>Today</option>
                                    <option>This Week</option>
                                </select>
                            </div>
                            <div className="flex-[2]">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Search</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search by ID or Customer"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-3 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-yellow-100 text-gray-700 font-semibold uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3">Order ID</th>
                                        <th className="px-4 py-3">Product</th>
                                        <th className="px-4 py-3">Customer</th>
                                        <th className="px-4 py-3">Address</th>
                                        <th className="px-4 py-3">Quantity</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-blue-600">{order.id}</td>
                                                <td className="px-4 py-3">{order.product}</td>
                                                <td className="px-4 py-3">{order.customer}</td>
                                                <td className="px-4 py-3 text-gray-500">{order.address}</td>
                                                <td className="px-4 py-3">{order.quantity}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                                ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-gray-500">{order.date}</td>
                                                <td className="px-4 py-3 flex gap-2">
                                                    <button className="p-1 text-gray-400 hover:text-blue-600" title="View">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1 text-gray-400 hover:text-green-600" title="Print Label">
                                                        <Printer className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="px-6 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="p-4 bg-gray-50 rounded-full mb-3">
                                                        <Package className="w-8 h-8 text-gray-300" />
                                                    </div>
                                                    <h3 className="text-gray-900 font-medium mb-1">No orders need packaging at the moment</h3>
                                                    <p className="text-gray-500 text-sm">Orders will appear here when they're ready for packaging.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-1">Packaging Guide</h3>
                        <p className="text-sm text-gray-500 mb-4">Shipping Illustration</p>
                        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
                            [Illustration Placeholder]
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 text-sm">Packaging Process</h4>
                                <p className="text-sm text-blue-700 mt-1 leading-relaxed">
                                    Click on the box icon to start processing an order. Make sure to verify all items before confirming.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                        <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-yellow-900 text-sm">Need Help?</h4>
                                <p className="text-sm text-yellow-700 mt-1 leading-relaxed">
                                    For assistance with the packaging process, contact the support team or check the documentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
