
import React from 'react';
import { managerPerformanceData } from '../../data/managerDummyData';
import { Home, ChartLine as ChartLineIcon, Download, Users, Percent, Trophy, ShoppingCart, BarChart, Table, Star } from 'lucide-react';

export function ManagerPerformancePage() {
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
                        <ChartLineIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Agent Performance</h1>
                        <p className="text-gray-500 text-sm mt-1">Performance reports and analytics for call center agents</p>
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
                        <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Total Agents</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerPerformanceData.stats.totalAgents}</h3>
                        <p className="text-xs text-green-600 font-medium">↑ {managerPerformanceData.stats.activeAgents}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <Percent className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Avg Performance</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerPerformanceData.stats.avgPerformance}</h3>
                        <p className="text-xs text-green-600 font-medium">{managerPerformanceData.stats.performanceChange}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-yellow-50 rounded-lg mr-4">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Top Performer</p>
                        <h3 className="text-lg font-bold text-gray-900">{managerPerformanceData.stats.topPerformer}</h3>
                        <p className="text-xs text-yellow-600 font-medium">↑ {managerPerformanceData.stats.topPerformerPeriod}</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-purple-50 rounded-lg mr-4">
                        <ShoppingCart className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900">{managerPerformanceData.stats.totalOrders}</h3>
                        <p className="text-xs text-purple-600 font-medium">{managerPerformanceData.stats.ordersPeriod}</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <BarChart className="w-5 h-5 mr-2 text-blue-500" />
                        Performance Trends
                    </h3>
                    <div className="flex items-center justify-center h-full bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                        <div className="text-center text-gray-400">
                            <ChartLineIcon className="w-8 h-8 mx-auto mb-2" />
                            <p>Performance chart will be displayed here</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <ChartLineIcon className="w-5 h-5 mr-2 text-green-500" />  {/* Placeholder icon since 'Agent Comparison' icon isn't standard */}
                        Agent Comparison
                    </h3>
                    <div className="flex items-center justify-center h-full bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                        <div className="text-center text-gray-400">
                            <BarChart className="w-8 h-8 mx-auto mb-2" />
                            <p>Comparison chart will be displayed here</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agent Performance Details Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="p-1.5 bg-blue-100 rounded mr-2">
                            <Table className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Agent Performance Details</h3>
                            <p className="text-xs text-gray-500">Detailed performance metrics for each agent</p>
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
                                <th className="px-6 py-4 font-bold text-gray-600">AGENT</th>
                                <th className="px-6 py-4 font-bold text-gray-600">ORDERS HANDLED</th>
                                <th className="px-6 py-4 font-bold text-gray-600">SUCCESS RATE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">AVG RESPONSE TIME</th>
                                <th className="px-6 py-4 font-bold text-gray-600">CUSTOMER RATING</th>
                                <th className="px-6 py-4 font-bold text-gray-600">PERFORMANCE SCORE</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {managerPerformanceData.agentDetails.map((agent, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 text-orange-500">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{agent.agent}</div>
                                                <div className="text-xs text-gray-500">{agent.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{agent.ordersHandled}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: agent.successRate }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">{agent.successRate}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{agent.avgResponseTime}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-yellow-400">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 text-gray-300" />
                                            <span className="ml-2 text-gray-600 text-xs font-medium">{agent.rating}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full font-bold border border-red-100">{agent.performanceScore}</span>
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
