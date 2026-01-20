
import React from 'react';
import { adminSourcingData } from '../../data/adminDummyData';
import { Plus, Check, Clock, Globe, ArrowRight } from 'lucide-react';

export function AdminSourcingPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Sourcing Management</h1>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    New Request
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-2 bg-yellow-50 rounded-lg">
                            <Clock className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full">Updates</span>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-3xl font-bold text-gray-900">{adminSourcingData.stats.pending}</h3>
                        <p className="text-sm text-gray-500 font-medium">Pending Approvals</p>
                    </div>
                    <p className="text-xs text-gray-400">Requires immediate attention</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full">This Month</span>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-3xl font-bold text-gray-900">{adminSourcingData.stats.approved}</h3>
                        <p className="text-sm text-gray-500 font-medium">Approved Requests</p>
                    </div>
                    <p className="text-xs text-gray-400">+12% from last month</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-sm border border-gray-800 text-white">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-1">Global Suppliers</h3>
                            <p className="text-gray-400 text-sm">Manage your supplier network</p>
                        </div>
                        <Globe className="w-8 h-8 text-gray-600/50" />
                    </div>
                    <button className="mt-8 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        View Supplier Directory
                    </button>
                </div>
            </div>

            {/* Requests Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Sourcing Requests</h2>
                </div>
                {adminSourcingData.requests.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Request ID</th>
                                    <th className="px-6 py-3">Product</th>
                                    <th className="px-6 py-3">Supplier</th>
                                    <th className="px-6 py-3">Quantity</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminSourcingData.requests.map((request) => (
                                    <tr key={request.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{request.id}</td>
                                        <td className="px-6 py-4">{request.product}</td>
                                        <td className="px-6 py-4 text-blue-600">{request.supplier}</td>
                                        <td className="px-6 py-4">{request.quantity}</td>
                                        <td className="px-6 py-4 text-gray-500">{request.requestDate}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${request.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-gray-400 hover:text-gray-900">
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-12 text-center text-gray-500">
                        <p>No sourcing requests found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
