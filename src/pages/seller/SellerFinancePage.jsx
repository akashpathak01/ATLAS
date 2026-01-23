import React, { useState } from 'react';
import { sellerFinanceData } from '../../data/sellerDummyData';
import { DollarSign, Plus, Upload, Home, Search, Banknote, Percent, Clock, TrendingUp, X, Save, Download, LayoutDashboard, Calendar, Eye, FileText, Wallet, ArrowUpRight, ArrowDownLeft, BarChart2 } from 'lucide-react';

export function SellerFinancePage() {
    const [transactions, setTransactions] = useState(sellerFinanceData.transactions);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('All Types');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [showPayoutModal, setShowPayoutModal] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [showDashboardModal, setShowDashboardModal] = useState(false);
    const [selectedTxn, setSelectedTxn] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);

    const handleFilter = () => {
        let filtered = [...sellerFinanceData.transactions];

        // Search Filter
        if (searchTerm.trim()) {
            const query = searchTerm.toLowerCase().trim();
            filtered = filtered.filter(t =>
                t.id.toLowerCase().includes(query) ||
                t.desc.toLowerCase().includes(query)
            );
        }

        // Type Filter
        if (typeFilter !== 'All Types') {
            filtered = filtered.filter(t => t.type === typeFilter);
        }

        // Status Filter
        if (statusFilter !== 'All Status') {
            filtered = filtered.filter(t => t.status === statusFilter);
        }

        setTransactions(filtered);
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setTypeFilter('All Types');
        setStatusFilter('All Status');
        setTransactions(sellerFinanceData.transactions);
    };

    const handleViewTxn = (txn) => {
        setSelectedTxn(txn);
        setShowViewModal(true);
    };

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
                    <button
                        onClick={() => setShowPayoutModal(true)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Request Payout
                    </button>
                    <button
                        onClick={() => setShowExportModal(true)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Export Data
                    </button>
                    <button
                        onClick={() => setShowDashboardModal(true)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Analytics
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500 outline-none"
                        >
                            <option>All Types</option>
                            <option>Incoming</option>
                            <option>Payout</option>
                            <option>Expense</option>
                            <option>Service</option>
                            <option>Bonus</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500 outline-none"
                        >
                            <option>All Status</option>
                            <option>Completed</option>
                            <option>Pending</option>
                            <option>Failed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="All Time"
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleFilter}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all active:scale-95 shadow-sm hover:shadow-md"
                        >
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                        <button
                            onClick={handleClearFilters}
                            className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium transition-all active:scale-95"
                            title="Clear All Filters"
                        >
                            <X className="w-4 h-4" />
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
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-center">Transaction ID</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Description</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Type</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-center">Status</th>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactions.length > 0 ? (
                                transactions.map((txn, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-xs font-bold text-gray-600 text-center">{txn.id}</td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">{txn.desc}</p>
                                                <p className="text-[10px] text-gray-500">{txn.date}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase w-fit ${txn.type === 'Incoming' ? 'bg-green-100 text-green-700' :
                                                txn.type === 'Payout' ? 'bg-orange-100 text-orange-700' :
                                                    txn.type === 'Expense' ? 'bg-red-100 text-red-700' :
                                                        'bg-blue-100 text-blue-700'
                                                }`}>
                                                {txn.type === 'Incoming' ? <ArrowDownLeft className="w-3 h-3" /> :
                                                    txn.type === 'Payout' ? <ArrowUpRight className="w-3 h-3" /> :
                                                        <Wallet className="w-3 h-3" />}
                                                {txn.type}
                                            </span>
                                        </td>
                                        <td className={`px-6 py-4 font-black ${txn.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                                            {txn.amount}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${txn.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {txn.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleViewTxn(txn)}
                                                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center text-gray-500 bg-gray-50/50">
                                        <div className="flex flex-col items-center">
                                            <div className="p-4 bg-gray-100 rounded-full mb-4">
                                                <Banknote className="w-8 h-8 text-gray-300" />
                                            </div>
                                            <p className="text-lg font-bold">No transactions found</p>
                                            <p className="text-sm mt-1">Try adjusting your filters to find what you're looking for.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payout Modal */}
            {showPayoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-orange-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                                    <Wallet className="w-5 h-5 text-orange-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Request Payout</h2>
                            </div>
                            <button onClick={() => setShowPayoutModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
                                <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Available Balance</p>
                                <p className="text-3xl font-black text-orange-700 tracking-tighter">AED 5,200.00</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Amount to Withdraw</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">AED</span>
                                        <input type="number" placeholder="Enter amount" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Select Bank Account</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-medium">
                                        <option>Emirates NBD - **** 4829</option>
                                        <option>ADCB - **** 9102</option>
                                    </select>
                                </div>
                                <p className="text-[10px] text-gray-400 leading-relaxed italic">
                                    * Payout requests are processed within 24-48 hours. Minimum withdrawal is AED 100.00.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button onClick={() => setShowPayoutModal(false)} className="px-8 py-2.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:bg-white transition-all active:scale-95">Cancel</button>
                            <button onClick={() => { alert('Payout request submitted successfully!'); setShowPayoutModal(false); }} className="px-10 py-2.5 bg-orange-600 text-white rounded-xl text-sm font-black hover:bg-orange-700 active:scale-95 transition-all shadow-lg border-b-2 border-orange-800 flex items-center"><DollarSign className="w-4 h-4 mr-2" /> Confirm Payout</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {showExportModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-indigo-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                                    <FileText className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Financial Reports</h2>
                            </div>
                            <button onClick={() => setShowExportModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Report Format</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-xl text-center transition-all">
                                        <p className="font-black text-indigo-700 text-xs">EXCEL (.XLSX)</p>
                                    </button>
                                    <button className="p-4 border-2 border-gray-100 hover:border-indigo-200 rounded-xl text-center transition-all group">
                                        <p className="font-black text-gray-500 group-hover:text-indigo-600 text-xs">PDF DOCUMENT</p>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Select Range</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all">
                                    <option>Current Month (Jan)</option>
                                    <option>Last Month (Dec)</option>
                                    <option>Last 3 Months</option>
                                    <option>Annual Statement 2025</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button onClick={() => setShowExportModal(false)} className="px-8 py-2.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:bg-white transition-all">Cancel</button>
                            <button onClick={() => { alert('Preparing your statement...'); setShowExportModal(false); }} className="px-10 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-black hover:bg-indigo-700 active:scale-95 transition-all shadow-lg border-b-2 border-indigo-900 flex items-center"><Download className="w-4 h-4 mr-2" /> Download Report</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Dashboard Modal */}
            {showDashboardModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-yellow-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                                    <BarChart2 className="w-5 h-5 text-yellow-700" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Financial Insights</h2>
                            </div>
                            <button onClick={() => setShowDashboardModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-400">
                                    <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Profitability</p>
                                    <h3 className="text-3xl font-black text-green-700 tracking-tighter">+12.4%</h3>
                                    <p className="text-[10px] text-green-500 mt-2 font-bold flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> Over last month</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Avg Transaction</p>
                                    <h3 className="text-3xl font-black text-blue-700 tracking-tighter">AED 340</h3>
                                    <p className="text-[10px] text-blue-500 mt-2 font-bold italic">Stable trend</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-700 uppercase tracking-widest">Revenue Streams</h4>
                                {[
                                    { label: 'Direct Sales', val: '80', color: 'bg-orange-500' },
                                    { label: 'Affiliate Commissions', val: '15', color: 'bg-blue-500' },
                                    { label: 'Returns/Credits', val: '5', color: 'bg-red-500' }
                                ].map(stream => (
                                    <div key={stream.label}>
                                        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase mb-1.5">
                                            <span>{stream.label}</span>
                                            <span>{stream.val}%</span>
                                        </div>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div className={`${stream.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${stream.val}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                            <button onClick={() => setShowDashboardModal(false)} className="px-10 py-2.5 bg-yellow-600 text-white rounded-xl text-sm font-black hover:bg-yellow-700 active:scale-95 transition-all shadow-lg border-b-2 border-yellow-800">Close Analytics</button>
                        </div>
                    </div>
                </div>
            )}

            {/* View Transaction Modal */}
            {showViewModal && selectedTxn && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                    <Eye className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Transaction Info</h2>
                            </div>
                            <button onClick={() => setShowViewModal(false)} className="p-2 hover:bg-white rounded-full transition-colors"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col items-center mb-6">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${selectedTxn.type === 'Incoming' ? 'bg-green-100 text-green-600' :
                                    selectedTxn.type === 'Payout' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    {selectedTxn.type === 'Incoming' ? <ArrowDownLeft className="w-8 h-8" /> : <ArrowUpRight className="w-8 h-8" />}
                                </div>
                                <p className="text-3xl font-black text-gray-900 tracking-tighter">{selectedTxn.amount}</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{selectedTxn.id}</p>
                            </div>
                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Status</span>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-black uppercase">{selectedTxn.status}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Description</span>
                                    <span className="text-xs font-bold text-gray-800">{selectedTxn.desc}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Date</span>
                                    <span className="text-xs font-bold text-gray-800">{selectedTxn.date}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Method</span>
                                    <span className="text-xs font-bold text-gray-800">Bank Transfer</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex justify-center">
                            <button onClick={() => setShowViewModal(false)} className="px-16 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-black shadow-lg">Close Details</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
