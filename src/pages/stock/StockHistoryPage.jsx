
import React from 'react';
import { Home, Search, Download, Filter, Inbox } from 'lucide-react';

export function StockHistoryPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Inventory Log</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">Stock History</h1>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex gap-2">
                    <input
                        type="text"
                        placeholder="Search history..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </button>
                </div>
            </div>

            {/* History Table / Empty State */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[250px]">
                <div className="grid grid-cols-8 bg-yellow-100/50 border-b border-gray-100 p-4 text-xs font-bold text-gray-600 uppercase">
                    <div>Log ID</div>
                    <div>Date & Time</div>
                    <div>Type</div>
                    <div>SKU</div>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Warehouse</div>
                    <div>User</div>
                </div>
                <div className="flex flex-col items-center justify-center p-16 text-gray-400">
                    <Inbox className="w-12 h-12 mb-2 opacity-50" />
                    <p>No records found</p>
                </div>
            </div>
        </div>
    );
}
