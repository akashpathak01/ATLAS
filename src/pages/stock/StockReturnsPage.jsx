
import React from 'react';
import { Home, RefreshCw, AlertTriangle, CheckCircle, Search, Calendar, RefreshCcw, ClipboardCheck, Inbox } from 'lucide-react';
import { stockReturnsData } from '../../data/stockDummyData';

export function StockReturnsPage() {
    return (
        <div className="space-y-6">
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
                        placeholder="Search by order, seller, or reason..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                        <Calendar className="w-4 h-4 mr-2" />
                        Select Period
                    </button>
                    <button className="bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500">
                        <RefreshCcw className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center font-bold shadow-sm hover:bg-blue-700 transition-colors text-sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Awaiting Inspection
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">0</span>
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg flex items-center font-medium hover:bg-gray-50 transition-colors text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">0</span>
                </button>
            </div>

            {/* Scan Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scan Barcode to Inspect Return</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Scan product barcode..."
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center font-bold shadow-md">
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
                </div>
            </div>
        </div>
    );
}
