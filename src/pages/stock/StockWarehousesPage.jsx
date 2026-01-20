
import React from 'react';
import { Home, Warehouse, Plus, Layout, BarChart, Package } from 'lucide-react';
import { stockWarehousesData } from '../../data/stockDummyData';

export function StockWarehousesPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Warehouses</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Warehouse Management</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                    <Plus className="w-4 h-4 mr-2" />
                    + Add Warehouse
                </button>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Warehouses</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stockWarehousesData.stats.totalWarehouses}</h3>
                    </div>
                    <div className="p-3 bg-blue-100/50 rounded-xl">
                        <Warehouse className="w-6 h-6 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Units</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stockWarehousesData.stats.totalUnits}</h3>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-xl">
                        <BarChart className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Products</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stockWarehousesData.stats.totalProducts}</h3>
                    </div>
                    <div className="p-3 bg-blue-100/50 rounded-xl">
                        <Package className="w-6 h-6 text-blue-600" />
                    </div>
                </div>
            </div>

            {/* Warehouse Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stockWarehousesData.warehouses.map((warehouse, idx) => (
                    <div key={idx} className={`bg-white rounded-xl border ${idx === 0 ? 'border-blue-500 border-2' : 'border-gray-200'} shadow-sm overflow-hidden p-6`}>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{warehouse.name}</h3>
                        <div className="flex items-center text-gray-500 text-sm mb-6">
                            <span className="mr-2">📍</span> {warehouse.location}
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Products</span>
                                <span className="font-bold text-gray-900">{warehouse.products}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Current</span>
                                <span className="font-bold text-gray-900">{warehouse.current}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Capacity</span>
                                <span className="font-bold text-gray-900">{warehouse.capacity}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Utilization</span>
                                <span className="font-bold text-gray-900">{(warehouse.utilization * 100).toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div
                                    className="bg-gray-300 h-2 rounded-full"
                                    style={{ width: `${warehouse.utilization * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium">
                                View
                            </button>
                            <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium">
                                Report
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
