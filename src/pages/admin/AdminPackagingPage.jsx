
import React from 'react';
import { adminPackagingData } from '../../data/adminDummyData';
import { Package, Truck, Box, CheckCircle, Clock, Save, FileBarChart } from 'lucide-react';

export function AdminPackagingPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Packaging (Pick & Pack)</h1>

            {/* Packaging Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Ready to Pack</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminPackagingData.stats.readyToPack}</h3>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded-lg">
                        <Box className="w-5 h-5 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">In Progress</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminPackagingData.stats.inProgress}</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Packed Today</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminPackagingData.stats.packed}</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <Package className="w-5 h-5 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Shipped Today</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminPackagingData.stats.shipped}</h3>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <Truck className="w-5 h-5 text-purple-600" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Orders to Pack */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900">Packaging Orders</h2>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                    </div>
                    <div className="p-4 space-y-3">
                        {adminPackagingData.orders.map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900">{order.id}</span>
                                        {order.priority === 'High' && (
                                            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full font-medium">High</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{order.items} Items • Assigned to: {order.assignedTo}</p>
                                </div>
                                <button className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium rounded-lg hover:bg-gray-50 shadow-sm">
                                    Start Packing
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Materials & Resources */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Packaging Materials</h2>
                        <div className="space-y-4">
                            {adminPackagingData.materials.map((material, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className={`w-2 h-2 rounded-full mr-3 ${material.status === 'Critical' ? 'bg-red-500' :
                                                material.status === 'Low' ? 'bg-yellow-500' : 'bg-green-500'
                                            }`} />
                                        <span className="text-sm font-medium text-gray-700">{material.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-600">{material.quantity} {material.unit}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 w-full py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100">
                            Order More Supplies
                        </button>
                    </div>

                    <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                        <div className="flex items-start">
                            <FileBarChart className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-blue-900">Daily Report Pending</h3>
                                <p className="text-sm text-blue-700 mt-1">End of day packaging report has not been generated.</p>
                                <div className="mt-3 flex gap-3">
                                    <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700">
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
