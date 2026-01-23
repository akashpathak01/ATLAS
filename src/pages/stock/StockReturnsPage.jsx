
import React, { useState } from 'react';
import { Home, RefreshCw, AlertTriangle, CheckCircle, Search, Calendar, RefreshCcw, ClipboardCheck, Inbox, X } from 'lucide-react';
import { stockReturnsData } from '../../data/stockDummyData';

export function StockReturnsPage() {
    const [activeTab, setActiveTab] = useState('awaiting'); // 'awaiting' or 'completed'
    const [isPeriodModalOpen, setIsPeriodModalOpen] = useState(false);
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [barcodeQuery, setBarcodeQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleApplyPeriod = (e) => {
        e.preventDefault();
        if (dateRange.start && dateRange.end) {
            setSelectedPeriod(`${dateRange.start} - ${dateRange.end}`);
            setIsPeriodModalOpen(false);
        }
    };

    const handleClearPeriod = (e) => {
        e.stopPropagation();
        setSelectedPeriod(null);
        setDateRange({ start: '', end: '' });
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1000); // Simulate refresh
    };

    const handleManualInspection = () => {
        alert("Starting Manual Inspection... (Simulation)");
    };

    return (
        <div className="space-y-6 relative">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Return Orders</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">Return Orders</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">{stockReturnsData.stats.total}</p>
                    <div className="flex items-center justify-center text-gray-500 font-medium">
                        <RefreshCw className="w-4 h-4 mr-2" /> Total
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-4xl font-bold text-orange-500 mb-2">{stockReturnsData.stats.awaitingInspection}</p>
                    <div className="flex items-center justify-center text-gray-500 font-medium">
                        <AlertTriangle className="w-4 h-4 mr-2" /> Awaiting Inspection
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">{stockReturnsData.stats.completed}</p>
                    <div className="flex items-center justify-center text-gray-500 font-medium">
                        <CheckCircle className="w-4 h-4 mr-2" /> Completed
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by order, seller, or reason..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button className="bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsPeriodModalOpen(true)}
                        className={`border px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 ${selectedPeriod ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                    >
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedPeriod ? selectedPeriod : 'Select Period'}
                        {selectedPeriod && <X className="w-3 h-3 ml-2 hover:bg-blue-200 rounded-full p-0.5" onClick={handleClearPeriod} />}
                    </button>
                    <button
                        onClick={handleRefresh}
                        className={`bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500 transition-all active:scale-95 ${isRefreshing ? 'animate-spin' : ''}`}
                    >
                        <RefreshCcw className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4">
                <button
                    onClick={() => setActiveTab('awaiting')}
                    className={`px-5 py-2 rounded-lg flex items-center font-bold shadow-sm transition-all active:scale-95 text-sm ${activeTab === 'awaiting' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Awaiting Inspection
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === 'awaiting' ? 'bg-white/20' : 'bg-gray-100'}`}>0</span>
                </button>
                <button
                    onClick={() => setActiveTab('completed')}
                    className={`px-5 py-2 rounded-lg flex items-center font-bold shadow-sm transition-all active:scale-95 text-sm ${activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === 'completed' ? 'bg-white/20' : 'bg-gray-100'}`}>0</span>
                </button>
            </div>

            {/* Scan Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scan Barcode to Inspect Return</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={barcodeQuery}
                        onChange={(e) => setBarcodeQuery(e.target.value)}
                        placeholder="Scan product barcode..."
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleManualInspection}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center font-bold shadow-md transition-all active:scale-95"
                    >
                        <ClipboardCheck className="w-5 h-5 mr-2" />
                        Manual Inspection
                    </button>
                </div>
                <p className="text-gray-400 text-sm mt-2">Scan barcode to inspect returned product</p>
            </div>

            {/* Returns Table / Empty */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[150px]">
                <div className="grid grid-cols-7 bg-yellow-100/50 border-b border-gray-100 p-4 text-xs font-bold text-gray-600 uppercase text-center">
                    <div>Order Number</div>
                    <div>Seller</div>
                    <div>Return Reason</div>
                    <div>Arrival Date</div>
                    <div>Items Count</div>
                    <div>Inspection Status</div>
                    <div>Actions</div>
                </div>
                <div className="flex flex-col items-center justify-center p-12 text-gray-300">
                    <Inbox className="w-12 h-12 mb-2" />
                    <p className="text-sm font-medium text-gray-400">No Orders Found</p>
                </div>
            </div>

            {/* Select Period Modal */}
            {isPeriodModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Calendar className="w-5 h-5 mr-2 text-blue-600" /> Select Period</h3>
                            <button onClick={() => setIsPeriodModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleApplyPeriod} className="p-6 space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Start Date</label>
                                    <input type="date" required value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">End Date</label>
                                    <input type="date" required value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="pt-2 flex gap-3">
                                <button type="button" onClick={() => setIsPeriodModalOpen(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md">Apply Period</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
