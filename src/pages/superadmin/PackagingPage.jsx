import React from 'react';
import { Box, Package, CheckCircle, Truck } from 'lucide-react';
import { packagingData } from '../../data/superAdminDummyData';

export function PackagingPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Packaging & Pick-Pack</h1>
                <p className="text-sm text-gray-600 mt-1">Manage packaging operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Ready to Pack</div>
                            <div className="text-2xl font-bold text-yellow-600 mt-1">{packagingData.stats.readyToPack}</div>
                        </div>
                        <Package className="w-10 h-10 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">In Progress</div>
                            <div className="text-2xl font-bold text-blue-600 mt-1">{packagingData.stats.inProgress}</div>
                        </div>
                        <Box className="w-10 h-10 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Packed</div>
                            <div className="text-2xl font-bold text-green-600 mt-1">{packagingData.stats.packed}</div>
                        </div>
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600">Shipped</div>
                            <div className="text-2xl font-bold text-indigo-600 mt-1">{packagingData.stats.shipped}</div>
                        </div>
                        <Truck className="w-10 h-10 text-indigo-600" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Orders to Pack</h2>
                    </div>
                    <div className="p-6 space-y-3">
                        {packagingData.orders.map((order) => (
                            <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-yellow-300 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900">{order.id}</div>
                                        <div className="text-sm text-gray-500">{order.items} items • {order.assignedTo}</div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === 'Ready' ? 'bg-yellow-100 text-yellow-800' :
                                            order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                'bg-green-100 text-green-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {order.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Packaging Materials</h2>
                    </div>
                    <div className="p-6 space-y-3">
                        {packagingData.materials.map((material, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900">{material.name}</div>
                                        <div className="text-sm text-gray-500">{material.quantity} {material.unit}</div>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${material.status === 'Sufficient' ? 'bg-green-100 text-green-800' :
                                        material.status === 'Low' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {material.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
