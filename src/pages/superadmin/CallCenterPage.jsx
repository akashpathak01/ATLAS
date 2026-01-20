import React from 'react';
import { Headphones, Phone, Clock, TrendingUp } from 'lucide-react';
import { callCenterData } from '../../data/superAdminDummyData';

export function CallCenterPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Call Center Dashboard</h1>
                <p className="text-sm text-gray-600 mt-1">Monitor call center operations and agents</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Total Calls</div>
                            <div className="text-2xl font-bold text-gray-900 mt-1">{callCenterData.stats.totalCalls}</div>
                        </div>
                        <Phone className="w-10 h-10 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Active Agents</div>
                            <div className="text-2xl font-bold text-green-600 mt-1">{callCenterData.stats.activeAgents}</div>
                        </div>
                        <Headphones className="w-10 h-10 text-green-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Avg Wait Time</div>
                            <div className="text-2xl font-bold text-yellow-600 mt-1">{callCenterData.stats.avgWaitTime}</div>
                        </div>
                        <Clock className="w-10 h-10 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Satisfaction</div>
                            <div className="text-2xl font-bold text-indigo-600 mt-1">{callCenterData.stats.satisfaction}</div>
                        </div>
                        <TrendingUp className="w-10 h-10 text-indigo-600" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Agent Performance</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Calls</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Call Time</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {callCenterData.agents.map((agent) => (
                                <tr key={agent.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Headphones className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${agent.status === 'On Call' ? 'bg-green-100 text-green-800' :
                                            agent.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {agent.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.calls}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.avgTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
