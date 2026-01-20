
import React from 'react';
import { Home, Calendar, Clock, Package, Inbox } from 'lucide-react';
import { stockPickingData } from '../../data/stockDummyData';

export function StockPickingPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Ship Orders</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Order Preparation</h1>
                <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select Period
                </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center font-bold shadow-md hover:bg-blue-700 transition-colors">
                    <Clock className="w-5 h-5 mr-2" />
                    Pending
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">{stockPickingData.pendingCount}</span>
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center font-medium hover:bg-gray-50 transition-colors">
                    <Package className="w-5 h-5 mr-2" />
                    Ready for Packing
                    <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-bold">{stockPickingData.readyForPackingCount}</span>
                </button>
            </div>

            {/* Scan Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scan Barcode While Picking</h3>
                <input
                    type="text"
                    placeholder="Scan product barcode..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-gray-400 text-sm mt-2">Scan barcode to verify product during picking</p>
            </div>

            {/* Orders List / Empty State */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[200px]">
                <div className="grid grid-cols-5 bg-yellow-100/50 border-b border-gray-100 p-4 text-xs font-bold text-gray-600 uppercase">
                    <div>Order Number</div>
                    <div>Customer Name</div>
                    <div>Seller</div>
                    <div>Items Count</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>
                <div className="flex flex-col items-center justify-center p-12 text-gray-400">
                    <Inbox className="w-12 h-12 mb-2 opacity-50" />
                    <p>No orders ready for preparation</p>
                </div>
            </div>
        </div>
    );
}
