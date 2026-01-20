
import React from 'react';
import { managerStatisticsData } from '../../data/managerDummyData';
import { Home, PieChart, Download, ShoppingCart, Calendar, CheckCircle, DollarSign, TrendingUp, Table, Clock } from 'lucide-react';

export function ManagerStatisticsPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-white rounded-xl mr-4">
                        <PieChart className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Order Statistics</h1>
                        <p className="text-gray-500 text-sm mt-1">Comprehensive order analytics and reporting</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                        ← Back to Dashboard
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        <ShoppingCart className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerStatisticsData.stats.totalOrders}</h3>
                        <p className="text-xs text-blue-600 font-medium">{managerStatisticsData.stats.totalOrdersChange}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <Calendar className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">This Month</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerStatisticsData.stats.thisMonth}</h3>
                        <p className="text-xs text-green-600 font-medium">{managerStatisticsData.stats.thisMonthChange}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-orange-50 rounded-lg mr-4">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Completion Rate</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerStatisticsData.stats.completionRate}</h3>
                        <p className="text-xs text-orange-600 font-medium">{managerStatisticsData.stats.completionRateChange}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-purple-50 rounded-lg mr-4">
                        <DollarSign className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Avg Order Value</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerStatisticsData.stats.avgOrderValue}</h3>
                        <p className="text-xs text-purple-600 font-medium">{managerStatisticsData.stats.avgOrderValueChange}</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                        Orders Trend
                    </h3>
                    <div className="flex items-center justify-center h-full bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                        <div className="text-center text-gray-400">
                            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                            <p>Orders trend chart will be displayed here</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <PieChart className="w-5 h-5 mr-2 text-green-500" />
                        Status Distribution
                    </h3>
                    <div className="flex items-center justify-center h-full bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                        <div className="text-center text-gray-400">
                            <PieChart className="w-8 h-8 mx-auto mb-2" />
                            <p>Status distribution chart will be displayed here</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Statistics Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden run-in">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="p-1.5 bg-blue-100 rounded mr-2">
                            <Table className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Order Statistics by Status</h3>
                            <p className="text-xs text-gray-500">Detailed breakdown of orders by status</p>
                        </div>
                    </div>
                    <select className="border border-gray-200 rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>This Week</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-600">STATUS</th>
                                <th className="px-6 py-4 font-bold text-gray-600">COUNT</th>
                                <th className="px-6 py-4 font-bold text-gray-600">PERCENTAGE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">REVENUE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">AVG PROCESSING TIME</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {Object.entries(managerStatisticsData.ordersByStatus).map(([status, data], idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold
                                            ${status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                status === 'processing' ? 'bg-blue-100 text-blue-800' :
                                                    status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{data.count}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                                <div className={`h-1.5 rounded-full ${status === 'pending' ? 'bg-yellow-500' : status === 'processing' ? 'bg-blue-500' : status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: data.percentage }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">{data.percentage}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{data.revenue}</td>
                                    <td className="px-6 py-4 text-gray-600">{data.avgTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
