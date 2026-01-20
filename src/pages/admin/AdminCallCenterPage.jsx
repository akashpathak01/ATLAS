
import React from 'react';
import { adminCallCenterData } from '../../data/adminDummyData';
import { Phone, CheckCircle, Clock, Users, ArrowRight, UserCheck } from 'lucide-react';

export function AdminCallCenterPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Call Center Manager</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Orders</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminCallCenterData.stats.totalOrders}</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Pending Approval</p>
                        <h3 className="text-xl font-bold text-orange-600 mt-1">{adminCallCenterData.stats.pendingApproval}</h3>
                    </div>
                    <div className="p-2 bg-orange-50 rounded-lg">
                        <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Active Agents</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminCallCenterData.stats.activeAgents}</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <Users className="w-5 h-5 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Approved Today</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminCallCenterData.stats.approvedToday}</h3>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pending Approvals Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                {adminCallCenterData.pendingOrders.length} Pending
                            </span>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {adminCallCenterData.pendingOrders.length > 0 ? (
                                adminCallCenterData.pendingOrders.map((order) => (
                                    <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-gray-900">{order.id}</span>
                                                    <span className="text-sm text-gray-500">by {order.customer}</span>
                                                </div>
                                                <div className="mt-1 flex items-center text-xs text-gray-500">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {order.createdDate}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-lg">
                                                    Approve
                                                </button>
                                                <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg">
                                                    Review
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">No pending orders</div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Approved Orders</h2>
                        {adminCallCenterData.approvedOrders.length > 0 ? (
                            <p>List of approved orders...</p>
                        ) : (
                            <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-200 text-gray-500">
                                No approved orders for today.
                            </div>
                        )}
                    </div>
                </div>

                {/* Management Section */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Management</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium text-xs mr-3">
                                        JD
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">John Doe</span>
                                </div>
                                <span className="text-xs text-green-600 font-medium">Online</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mr-3">
                                        JS
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Jane Smith</span>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">Offline</span>
                            </div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
                            Assign Tasks
                        </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-2">
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg flex items-center">
                                <UserCheck className="w-4 h-4 mr-2" />
                                Verify Customer Details
                            </button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                Initialize Call Batch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
