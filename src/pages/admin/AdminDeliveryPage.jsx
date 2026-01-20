
import React from 'react';
import { adminDeliveryData } from '../../data/adminDummyData';
import { Truck, AlertCircle, CheckCircle, Package, ArrowRight } from 'lucide-react';

export function AdminDeliveryPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Delivery Manager</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">Total Deliveries</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{adminDeliveryData.stats.totalDeliveries}</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">In Transit</p>
                    <h3 className="text-xl font-bold text-blue-600 mt-1">{adminDeliveryData.stats.inTransit}</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">Delivered</p>
                    <h3 className="text-xl font-bold text-green-600 mt-1">{adminDeliveryData.stats.delivered}</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">Failed</p>
                    <h3 className="text-xl font-bold text-red-600 mt-1">{adminDeliveryData.stats.failed}</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">Pending</p>
                    <h3 className="text-xl font-bold text-yellow-600 mt-1">{adminDeliveryData.stats.pending}</h3>
                </div>
            </div>

            {/* Shipping Companies Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Partner Performance</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Partner</th>
                                <th className="px-6 py-3">Active Orders</th>
                                <th className="px-6 py-3">On-Time Rate</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminDeliveryData.shippingCompanies.map((company) => (
                                <tr key={company.name} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{company.name}</td>
                                    <td className="px-6 py-4">{company.orders}</td>
                                    <td className="px-6 py-4 text-green-600 font-medium">{company.onTimeRate}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                            {company.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">View Reports</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Returned Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Returned Orders</h2>
                        <AlertCircle className="w-5 h-5 text-gray-400" />
                    </div>
                    {adminDeliveryData.returned.length > 0 ? (
                        <div>Display returns...</div>
                    ) : (
                        <div className="p-6 bg-gray-50 rounded-lg text-center text-sm text-gray-500">
                            No returned orders pending processing.
                        </div>
                    )}
                </div>

                {/* Pending Confirmation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Pending Confirmation</h2>
                        <Truck className="w-5 h-5 text-gray-400" />
                    </div>
                    {adminDeliveryData.pendingConfirmation.length > 0 ? (
                        <div>Display pending...</div>
                    ) : (
                        <div className="p-6 bg-gray-50 rounded-lg text-center text-sm text-gray-500">
                            All deliveries confirmed.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
