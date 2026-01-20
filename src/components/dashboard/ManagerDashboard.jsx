import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Home, Headphones, Clock, ShoppingCart, Users, TrendingUp, PieChart, Settings } from 'lucide-react';

export function ManagerDashboard() {
    const { user } = useAuth();

    // Get current date and time
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    return (
        <div className="space-y-6">
            {/* Success Alert */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-sm relative">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">
                                Welcome Manager User! Login successful.
                            </p>
                        </div>
                    </div>
                    <button className="text-green-500 hover:text-green-700">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-600 space-x-2">
                <Home className="w-4 h-4" />
                <span className="font-medium text-gray-900">Home</span>
                <span>›</span>
                <Headphones className="w-4 h-4" />
                <span className="font-medium text-gray-900">Call Center</span>
                <span>›</span>
                <span className="text-gray-500">Manager Dashboard</span>
            </div>

            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <Headphones className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Call Center Manager</h1>
                            <p className="text-gray-600 mt-1">Manager: Manager User</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-3">
                            <Home className="w-4 h-4" />
                            <span className="text-sm font-medium">Main Dashboard</span>
                        </button>
                        <div className="text-sm text-gray-600">Live Operations</div>
                        <div className="text-xl font-bold text-gray-900">{currentTime}</div>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Total Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <ShoppingCart className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-medium mb-1">Total Orders</p>
                        <p className="text-3xl font-bold text-gray-900">67</p>
                    </div>
                </div>

                {/* Pending Approval */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-medium mb-1">Pending Approval</p>
                        <p className="text-3xl font-bold text-gray-900">1</p>
                    </div>
                </div>

                {/* Active Agents */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <Users className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-medium mb-1">Active Agents</p>
                        <p className="text-3xl font-bold text-gray-900">1</p>
                    </div>
                </div>

                {/* Approved Today */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-medium mb-1">Approved Today</p>
                        <p className="text-3xl font-bold text-gray-900">0</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Orders Awaiting Approval */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-lg font-bold text-gray-900">Orders Awaiting Approval</h3>
                        </div>
                        <span className="text-sm text-orange-600 font-medium">1 orders</span>
                    </div>
                    <div className="space-y-3">
                        {/* Sample Order */}
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-orange-100 p-2 rounded">
                                        <ShoppingCart className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Order ##260117001</h4>
                                        <p className="text-sm text-gray-600">Customer: dummy</p>
                                        <p className="text-xs text-gray-500">Created: Jan 17, 2026 00:46</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                                        Callcenter_Review
                                    </span>
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full flex items-center">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        Review
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recently Approved Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-lg font-bold text-gray-900">Recently Approved Orders</h3>
                        </div>
                        <span className="text-sm text-green-600 font-medium">0 today</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                        <Clock className="w-16 h-16 mb-3" />
                        <p className="text-sm font-medium">No Recent Approvals</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
