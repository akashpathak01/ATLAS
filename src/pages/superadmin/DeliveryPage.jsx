import React from 'react';
import { Truck, Package, CheckCircle, XCircle, Clock } from 'lucide-react';
import { deliveryData } from '../../data/superAdminDummyData';

export function DeliveryPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Delivery Management</h1>
                <p className="text-sm text-gray-600 mt-1">Monitor deliveries and shipping operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Total Deliveries</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">{deliveryData.stats.totalDeliveries}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">In Transit</div>
                    <div className="text-2xl font-bold text-blue-600 mt-1">{deliveryData.stats.inTransit}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Delivered</div>
                    <div className="text-2xl font-bold text-green-600 mt-1">{deliveryData.stats.delivered}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Failed</div>
                    <div className="text-2xl font-bold text-red-600 mt-1">{deliveryData.stats.failed}</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="text-sm text-gray-600">Pending</div>
                    <div className="text-2xl font-bold text-yellow-600 mt-1">{deliveryData.stats.pending}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Active Shipments</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipment ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {deliveryData.shipments.map((shipment) => (
                                    <tr key={shipment.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.driver}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                                shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {shipment.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Shipping Companies</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {deliveryData.companies.map((company, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="font-semibold text-gray-900">{company.name}</div>
                                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                        {company.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="text-gray-500">Active Shipments</div>
                                        <div className="font-semibold text-gray-900">{company.activeShipments}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">On-Time Rate</div>
                                        <div className="font-semibold text-green-600">{company.onTimeRate}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
