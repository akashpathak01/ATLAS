
import React from 'react';
import { adminFinanceData } from '../../data/adminDummyData';
import { DollarSign, CreditCard, Download, ArrowUpRight, TrendingUp, Clock, FileText } from 'lucide-react';

export function AdminFinancePage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Finance & Billing</h1>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <FileText className="w-4 h-4 mr-2" />
                        Invoices
                    </button>
                    <button className="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium hover:bg-yellow-500">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                    </button>
                </div>
            </div>

            {/* Revenue Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Today's Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminFinanceData.revenue.today}</h3>
                        </div>
                        <div className="p-2 bg-green-50 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">This Week</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminFinanceData.revenue.thisWeek}</h3>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">This Month</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminFinanceData.revenue.thisMonth}</h3>
                        </div>
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pending Payments</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{adminFinanceData.pendingPayments}</h3>
                        </div>
                        <div className="p-2 bg-yellow-50 rounded-lg">
                            <Clock className="w-5 h-5 text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 h-96">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No recent transactions</h3>
                        <p className="text-sm text-gray-500 mt-1">Transactions will appear here once new orders are processed.</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mr-3">
                                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Process Refund</span>
                            </div>
                            <span className="text-gray-400">→</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                                    <FileText className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Generate Invoice</span>
                            </div>
                            <span className="text-gray-400">→</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center mr-3">
                                    <CreditCard className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Payout Settings</span>
                            </div>
                            <span className="text-gray-400">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
