
import React from 'react';
import { sellerFinanceData } from '../../data/sellerDummyData';
import { DollarSign, Plus, Upload, Home, Search, Banknote, Percent, Clock, TrendingUp } from 'lucide-react';

export function SellerFinancePage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Finance</span>
            </div>

            {/* Header & Actions */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Banknote className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Finance Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage your financial data, payments, and revenue analytics</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                    </button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Upload className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Search & Filters</h3>
                <p className="text-sm text-gray-500 mb-6">Find and filter financial records quickly</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Records</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by transaction ID, desc"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Types</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="All Time"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                        <Banknote className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerFinanceData.stats.totalRevenue}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Monthly Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerFinanceData.stats.monthlyRevenue}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pending Payments</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerFinanceData.stats.pendingPayments}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-purple-50 rounded-lg mr-4">
                        <Percent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Commission</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerFinanceData.stats.commission}</h3>
                    </div>
                </div>
            </div>

            {/* Financial Records List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Financial Records</h3>
                        <p className="text-sm text-gray-500">Manage and monitor your financial transactions</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Total Transactions</p>
                        <p className="text-xl font-bold text-orange-600">0</p>
                    </div>
                </div>

                <div className="bg-yellow-100/30 p-2">
                    <div className="grid grid-cols-7 gap-4 px-6 py-2 text-xs font-bold text-yellow-800 uppercase tracking-wider">
                        <div>Transaction ID</div>
                        <div className="col-span-2">Description</div>
                        <div>Type</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Actions</div>
                    </div>
                </div>

                <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                        <Banknote className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No Financial Records Found</h3>
                    <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                        Your financial transactions will appear here once you start selling products.
                    </p>
                    <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                        + Add Your First Product
                    </button>
                </div>
            </div>
        </div>
    );
}
