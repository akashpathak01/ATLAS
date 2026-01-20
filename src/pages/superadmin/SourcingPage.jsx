import React from 'react';
import { Globe, Clock, CheckCircle, Truck } from 'lucide-react';
import { sourcingData, sourcingStats } from '../../data/superAdminDummyData';

export function SourcingPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Sourcing Management</h1>
                <p className="text-sm text-gray-600 mt-1">Manage sourcing requests and suppliers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Total Requests</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">{sourcingStats.totalRequests}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Pending</div>
                    <div className="text-2xl font-bold text-yellow-600 mt-1">{sourcingStats.pending}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Approved</div>
                    <div className="text-2xl font-bold text-green-600 mt-1">{sourcingStats.approved}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">In Transit</div>
                    <div className="text-2xl font-bold text-blue-600 mt-1">{sourcingStats.inTransit}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Completed</div>
                    <div className="text-2xl font-bold text-indigo-600 mt-1">{sourcingStats.completed}</div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Sourcing Requests</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sourcingData.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.product}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.supplier}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                            request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.expectedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
