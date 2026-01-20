
import React from 'react';
import { managerDashboardData } from '../../data/managerDummyData';
import { Home, Phone, ShoppingCart, Clock, Users, CheckCircle, AlertTriangle, Play, Settings } from 'lucide-react';

export function ManagerDashboardPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Call Center</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Manager Dashboard</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Phone className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Call Center Manager</h1>
                        <p className="text-gray-500 text-sm mt-1">Manager: {managerDashboardData.user}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
                        <Home className="w-4 h-4 mr-2" />
                        Main Dashboard
                    </button>
                    <div className="text-right">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Live Operations</p>
                        <p className="text-xl font-bold text-gray-900">{managerDashboardData.liveOperations}</p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        <ShoppingCart className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                        <h3 className="text-3xl font-bold text-gray-900">{managerDashboardData.stats.totalOrders}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-orange-50 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pending Approval</p>
                        <h3 className="text-3xl font-bold text-gray-900">{managerDashboardData.stats.pendingApproval}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <Users className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Active Agents</p>
                        <h3 className="text-3xl font-bold text-gray-900">{managerDashboardData.stats.activeAgents}</h3>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Approved Today</p>
                        <h3 className="text-3xl font-bold text-gray-900">{managerDashboardData.stats.approvedToday}</h3>
                    </div>
                </div>
            </div>

            {/* Approval Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Orders Awaiting Approval */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-orange-50/30 flex justify-between items-center">
                        <div className="flex items-center text-orange-700 font-bold">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Orders Awaiting Approval
                        </div>
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-bold">
                            {managerDashboardData.ordersAwaitingApproval.length} orders
                        </span>
                    </div>
                    <div className="p-4 space-y-3">
                        {managerDashboardData.ordersAwaitingApproval.map((order, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                                <div className="flex items-center">
                                    <div className="p-2 bg-orange-100 rounded mr-3">
                                        <ShoppingCart className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Order {order.id}</h4>
                                        <p className="text-xs text-gray-500">Customer: {order.customer}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">Created: {order.created}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-medium">{order.status}</span>
                                    <button className="flex items-center px-3 py-1.5 bg-white border border-orange-500 text-orange-500 text-xs font-bold rounded hover:bg-orange-50">
                                        <Settings className="w-3 h-3 mr-1" />
                                        Review
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recently Approved Orders */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 bg-green-50/30 flex justify-between items-center">
                        <div className="flex items-center text-green-700 font-bold">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Recently Approved Orders
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                            {managerDashboardData.recentlyApprovedOrders.length} today
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h4 className="text-gray-900 font-medium mb-1">No Recent Approvals</h4>
                        <p className="text-gray-500 text-xs">No orders have been approved recently</p>
                    </div>
                </div>
            </div>

            {/* Order Assignment Management */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-blue-50/30 flex justify-between items-center">
                    <div className="flex items-center text-blue-700 font-bold">
                        <Users className="w-5 h-5 mr-2" />
                        Order Assignment Management
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded flex items-center hover:bg-blue-700">
                            <Play className="w-3 h-3 mr-1" /> Auto Assign Orders
                        </button>
                        <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded flex items-center hover:bg-green-700">
                            <Settings className="w-3 h-3 mr-1" /> Fix Unassigned Orders
                        </button>
                        <button className="px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded flex items-center hover:bg-purple-700">
                            <Play className="w-3 h-3 mr-1" /> Create Test Orders
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                    {/* Assigned Orders List */}
                    <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-4 text-sm">Assigned Orders</h4>
                        <div className="space-y-3">
                            {managerDashboardData.assignedOrders.map((order, idx) => (
                                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-bold text-gray-800 text-xs">Order {order.id}</h5>
                                        <p className="text-[10px] text-gray-500">Customer: {order.customer}</p>
                                        <p className="text-[10px] text-gray-500">Agent: {order.agent}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded font-medium">{order.status}</span>
                                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Unassigned Orders List */}
                    <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-4 text-sm">Unassigned Orders</h4>
                        <div className="space-y-3">
                            {managerDashboardData.unassignedOrders.map((order, idx) => (
                                <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-bold text-gray-800 text-xs">Order {order.id}</h5>
                                        <p className="text-[10px] text-gray-500">Customer: {order.customer}</p>
                                        <p className="text-[10px] text-gray-500">Created: {order.created}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded font-medium">Unassigned</span>
                                        <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
