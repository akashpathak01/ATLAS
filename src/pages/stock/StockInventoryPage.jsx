
import React from 'react';
import { stockInventoryData } from '../../data/stockDummyData';
import { Home, Package, Search, Plus, FileText, Calendar, Filter, Image as ImageIcon } from 'lucide-react';

export function StockInventoryPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Stock</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Product Acceptance</span>
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Inventory Management</h1>

                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 flex gap-2">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-500">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                            <Plus className="w-4 h-4 mr-2" />
                            + Add Inventory
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Stock Report
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                            <Calendar className="w-4 h-4 mr-2" />
                            Select Period
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-gray-50">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </th>
                                    <th className="px-6 py-4 font-bold text-gray-600">IMAGE</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">ID</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">PRODUCT NAME</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">SKU</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">SELLER</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">CATEGORY</th>
                                    <th className="px-6 py-4 font-bold text-gray-600">QTY</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {stockInventoryData.products.map((product, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <ImageIcon className="w-5 h-5 text-gray-400" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{product.id}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4 text-gray-500 font-mono text-xs">{product.sku}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.seller}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{product.category}</span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-gray-900">{product.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
