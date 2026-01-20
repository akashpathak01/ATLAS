
import React from 'react';
import { Home, Package, User, Building, Calendar, Plus, Search } from 'lucide-react';

export function StockReceivingPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Receive Stock</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">Receiving Shipments</h1>

            {/* Toggle Tabs */}
            <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center font-bold shadow-md hover:bg-blue-700 transition-colors">
                    <User className="w-5 h-5 mr-2" />
                    Client Stock-In
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center font-medium hover:bg-gray-50 transition-colors">
                    <Building className="w-5 h-5 mr-2" />
                    Sourcing Purchase
                </button>
            </div>

            <div className="flex justify-end">
                <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select Period
                </button>
            </div>

            {/* Scan Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scan Barcode</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Scan or enter barcode..."
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center font-bold">
                        <Plus className="w-5 h-5 mr-2" />
                        Manual Entry
                    </button>
                </div>
                <p className="text-gray-400 text-sm mt-2">Scan product barcode to receive stock</p>
            </div>

            {/* Order Search */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Enter Receiving Order Number (SIR-...)"
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center font-bold">
                        <Search className="w-5 h-5 mr-2" />
                        Search
                    </button>
                </div>
                <p className="text-gray-400 text-sm mt-2">Example: SIR-2025-046</p>
            </div>

            {/* Recent Receivings Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Recent Receivings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-600">GRN NUMBER</th>
                                <th className="px-6 py-4 font-bold text-gray-600">DATE</th>
                                <th className="px-6 py-4 font-bold text-gray-600">SUPPLIER</th>
                                <th className="px-6 py-4 font-bold text-gray-600">STATUS</th>
                                <th className="px-6 py-4 font-bold text-gray-600">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty Body as in screenshot */}
                            <tr>
                                <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                                    No recent receivings found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
