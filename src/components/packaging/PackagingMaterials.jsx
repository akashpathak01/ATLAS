import React, { useState } from 'react';
import { Search, Filter, Plus, Download, AlertTriangle, Package, Trash2, Edit } from 'lucide-react';
import { AddMaterialModal } from './AddMaterialModal';

export function PackagingMaterials({ onNavigate }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [materials, setMaterials] = useState([
        { id: 1, name: 'Cardboard Box (Small)', type: 'Box', stock: 150, minLevel: 50, cost: 'AED 1.5', status: 'In Stock' },
        { id: 2, name: 'Bubble Wrap Request', type: 'Wrap', stock: 12, minLevel: 20, cost: 'AED 15.0', status: 'Low Stock' },
    ]);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                        <Package className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Materials Inventory</h1>
                        <p className="text-sm text-gray-500">Manage packaging materials and supplies</p>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 flex items-center gap-2"
                >
                    Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main List Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900">Materials Inventory</h2>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                            >
                                Add New Material
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="p-4 flex flex-col md:flex-row gap-4 border-b border-gray-100 bg-gray-50">
                            <div className="flex-1">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Type</label>
                                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none">
                                    <option>Other</option>
                                    <option>Boxes</option>
                                    <option>Wraps</option>
                                    <option>Labels</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Stock Level</label>
                                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none">
                                    <option>All Stock Levels</option>
                                    <option>Low Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">&nbsp;</label>
                                <button className="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                                    Filter
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto min-h-[300px]">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-yellow-100 text-gray-700 font-semibold uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3">Material</th>
                                        <th className="px-4 py-3">Type</th>
                                        <th className="px-4 py-3">Stock</th>
                                        <th className="px-4 py-3">Min Level</th>
                                        <th className="px-4 py-3">Cost/Unit</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {materials.length > 0 ? (
                                        materials.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                                                <td className="px-4 py-3 text-gray-500">{item.type}</td>
                                                <td className="px-4 py-3 font-medium">{item.stock}</td>
                                                <td className="px-4 py-3 text-gray-500">{item.minLevel}</td>
                                                <td className="px-4 py-3 text-gray-500">{item.cost}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                                ${item.status === 'Low Stock' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 flex gap-2">
                                                    <button className="text-blue-600 hover:text-blue-800"><Edit className="w-4 h-4" /></button>
                                                    <button className="text-red-600 hover:text-red-800"><Trash2 className="w-4 h-4" /></button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="p-4 bg-gray-50 rounded-full mb-3">
                                                        <Package className="w-8 h-8 text-gray-300" />
                                                    </div>
                                                    <h3 className="text-gray-900 font-medium mb-1">No materials found</h3>
                                                    <p className="text-gray-500 text-sm mb-4">Get started by adding your first material.</p>
                                                    <button
                                                        onClick={() => setShowAddModal(true)}
                                                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                                                    >
                                                        Add Material
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Inventory Overview */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-4">Inventory Overview</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Total Materials</span>
                                <span className="font-medium text-gray-900">{materials.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Low Stock</span>
                                <span className="font-medium text-red-600">1</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Out of Stock</span>
                                <span className="font-medium text-gray-900">0</span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 flex justify-between text-sm">
                                <span className="text-gray-500">Total Value</span>
                                <span className="font-bold text-green-600">$ 450</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 text-sm"
                            >
                                Add New Material
                            </button>
                            <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm">
                                Export Inventory
                            </button>
                            <button className="w-full py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 flex items-center justify-center gap-2 text-sm">
                                Low Stock Alert
                            </button>
                        </div>
                    </div>

                    {/* Material Types Help */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-900">Material Types</h3>
                            <button className="p-1 bg-indigo-100 rounded-full text-indigo-600">
                                <AlertTriangle className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showAddModal && <AddMaterialModal onClose={() => setShowAddModal(false)} />}
        </div>
    );
}
