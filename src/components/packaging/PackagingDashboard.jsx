import React from 'react';
import { Package, Clock, CheckCircle, BarChart2, Search, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';

export function PackagingDashboard({ onNavigate }) {
    // Mock data for the dashboard (can be replaced with props or context later)
    const stats = [
        { label: 'Pending Packaging', value: '12', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'In Progress', value: '5', icon: RefreshCw, color: 'text-yellow-600', bg: 'bg-yellow-100' },
        { label: 'Completed Today', value: '28', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Total Records', value: '1,245', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-xl">
                            <Package className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Pick and Pack</h1>
                            <p className="text-sm text-gray-500">Manage packaging operations and materials</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => onNavigate('dashboard')}
                            className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 flex items-center gap-2"
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => onNavigate('orders')}
                            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                            View Orders
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by Order Code, Customer, Phone..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-1.5 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700">
                        Search
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                        </div>
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                    onClick={() => onNavigate('orders')}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-300 transition-all text-left"
                >
                    <div className="p-3 bg-green-50 rounded-lg">
                        <Package className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Packaging Orders</h3>
                        <p className="text-sm text-gray-500">View all packaging orders</p>
                    </div>
                </button>

                <button
                    onClick={() => onNavigate('materials')}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-300 transition-all text-left"
                >
                    <div className="p-3 bg-purple-50 rounded-lg">
                        <RefreshCw className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Materials</h3>
                        <p className="text-sm text-gray-500">Manage packaging materials</p>
                    </div>
                </button>

                <button
                    onClick={() => onNavigate('reports')}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-300 transition-all text-left"
                >
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <BarChart2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Reports</h3>
                        <p className="text-sm text-gray-500">View packaging reports</p>
                    </div>
                </button>
            </div>

            {/* Update Pending */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                    onClick={() => onNavigate('orders')}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-300 transition-all text-left"
                >
                    <div className="p-3 bg-yellow-50 rounded-lg">
                        <Clock className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Update Pending</h3>
                        <p className="text-sm text-gray-500">Mark old orders as postponed</p>
                    </div>
                </button>
            </div>

            {/* Recent Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Packaging */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Recent Packaging</h2>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                        No recent packaging records
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                        No recent orders found
                    </div>
                </div>
            </div>
        </div>
    );
}
