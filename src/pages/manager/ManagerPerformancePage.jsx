import React, { useState } from 'react';
import { managerPerformanceData } from '../../data/managerDummyData';
import { Home, ChartLine as ChartLineIcon, Download, Users, Percent, Trophy, ShoppingCart, BarChart, Table, Star, ArrowLeft, X, Eye, FileText, Calendar, CheckCircle2, TrendingUp, AlertCircle, PieChart, Activity, Clock } from 'lucide-react';

export function ManagerPerformancePage() {
    const [showExportModal, setShowExportModal] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [exportFormat, setExportFormat] = useState('PDF');

    const handleViewDetails = (agent) => {
        setSelectedAgent(agent);
        setShowDetailsModal(true);
    };

    const handleExport = () => {
        alert(`Generating ${exportFormat} performance report...`);
        setShowExportModal(false);
    };

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
                        <h1 className="text-2xl font-bold text-orange-500">Performance Analytics</h1>
                        <p className="text-gray-500 text-sm mt-1">Real-time performance monitoring and historical reporting</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50 transition-all active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                    </button>
                    <button
                        onClick={() => setShowExportModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-lg shadow-blue-100"
                    >
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
                                <th className="px-6 py-4 font-bold text-gray-600 text-right">ACTION</th>
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
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase border ${parseFloat(agent.performanceScore) >= 90 ? 'bg-green-50 text-green-600 border-green-100' :
                                            parseFloat(agent.performanceScore) >= 80 ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                'bg-orange-50 text-orange-600 border-orange-100'
                                            }`}>
                                            {agent.performanceScore}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleViewDetails(agent)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Export Report Modal */}
            {showExportModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Export Analytics</h2>
                            </div>
                            <button onClick={() => setShowExportModal(false)} className="p-2 hover:bg-white rounded-full"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Target Range</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Active Agents', 'Historical Data'].map(range => (
                                        <button key={range} className="p-4 border-2 border-gray-50 hover:border-blue-200 rounded-xl text-center focus:border-blue-600 focus:bg-blue-50 transition-all">
                                            <p className="text-xs font-black text-gray-800 uppercase">{range}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Export Format</label>
                                <div className="flex gap-2">
                                    {['PDF', 'Excel', 'CSV'].map(fmt => (
                                        <button
                                            key={fmt}
                                            onClick={() => setExportFormat(fmt)}
                                            className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-black transition-all ${exportFormat === fmt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-50 text-gray-400 hover:border-gray-200'
                                                }`}
                                        >
                                            {fmt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-3">
                            <button onClick={() => setShowExportModal(false)} className="flex-1 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-all">Discard</button>
                            <button onClick={handleExport} className="flex-[2] py-3 bg-blue-600 text-white rounded-xl text-sm font-black hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-95 flex items-center justify-center">
                                <Download className="w-4 h-4 mr-2" /> Download Report
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Agent Statistics Detailed Modal */}
            {showDetailsModal && selectedAgent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-orange-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                                    <Activity className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Agent Performance Deep-Dive</h2>
                                    <p className="text-xs text-gray-500">{selectedAgent.agent} • Detailed Metrics</p>
                                </div>
                            </div>
                            <button onClick={() => setShowDetailsModal(false)} className="p-2 hover:bg-white rounded-full"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Calls</p>
                                    <p className="text-xl font-black text-gray-800">{selectedAgent.totalCalls || 'N/A'}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Handled Orders</p>
                                    <p className="text-xl font-black text-gray-800">{selectedAgent.ordersHandled}</p>
                                </div>
                                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Missed Calls</p>
                                    <p className="text-xl font-black text-red-600">{selectedAgent.missedCalls || 'N/A'}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase mb-2">
                                        <span>Conversion Success Rate</span>
                                        <span className="text-green-600">{selectedAgent.successRate}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full transition-all duration-1000 ease-out" style={{ width: selectedAgent.successRate }}></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
                                        <div className="p-3 bg-white rounded-xl shadow-sm"><Clock className="w-5 h-5 text-orange-600" /></div>
                                        <div>
                                            <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Avg Response</p>
                                            <p className="text-sm font-black text-gray-800">{selectedAgent.avgResponseTime}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-yellow-50/50 p-4 rounded-2xl border border-yellow-100">
                                        <div className="p-3 bg-white rounded-xl shadow-sm"><Star className="w-5 h-5 text-yellow-600" /></div>
                                        <div>
                                            <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Customer Score</p>
                                            <p className="text-sm font-black text-gray-800">{selectedAgent.rating} / 5.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-center">
                            <button onClick={() => setShowDetailsModal(false)} className="px-16 py-3 bg-gray-900 text-white rounded-2xl text-xs font-black shadow-lg hover:bg-black transition-all active:scale-95">Close Statistics</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
