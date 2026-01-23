import React, { useState } from 'react';
import { Home, ChevronRight, Plus, Search, X, Globe, Filter } from 'lucide-react';

export function SellerSourcingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6 font-sans">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4" />
                <span className="mx-2 hover:text-gray-900 cursor-pointer">Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="mx-2 hover:text-gray-900 cursor-pointer">Sellers</span>
                <ChevronRight className="w-4 h-4" />
                <span className="mx-2 font-medium text-gray-900">Sourcing Requests</span>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sourcing Requests</h1>
                    <p className="text-gray-500 mt-1">Manage your product sourcing and supplier requests</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm"
                >
                    <Plus className="w-5 h-5" />
                    Create Sourcing Request
                </button>
            </div>

            {/* Filter Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Filter Requests</h3>
                    <p className="text-sm text-gray-500">Filter and search sourcing requests</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-3 space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 block">Status</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500">
                                <option>All Status</option>
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 block">Priority</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500">
                                <option>All Priorities</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 block">Search</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Product name or ID..."
                                className="w-full border border-gray-200 text-gray-700 py-2.5 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                            />
                            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Sourcing Requests List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Sourcing Requests</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage and monitor your sourcing requests</p>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-yellow-50/80 border-b border-yellow-100">
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Request ID</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Product</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Quantity</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Date</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Priority</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-xs font-bold text-yellow-800 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty State */}
                            <tr>
                                <td colSpan="7" className="py-16 text-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="bg-yellow-50 p-4 rounded-full mb-4">
                                            <Search className="w-8 h-8 text-yellow-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">No sourcing requests found</h3>
                                        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                                            Start by creating your first sourcing request to find new products and suppliers.
                                        </p>
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-md shadow-yellow-200"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Create Your First Request
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <CreateSourcingRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

function CreateSourcingRequestModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-bold text-gray-900">Create Sourcing Request</h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Product Name</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all" placeholder="e.g. Wireless Charger" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all bg-white">
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Home & Garden</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Target Price (AED)</label>
                            <input type="number" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all" placeholder="0.00" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Quantity Needed</label>
                            <input type="number" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all" placeholder="100" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Priority</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all bg-white">
                                <option>Medium</option>
                                <option>High</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Additional Details</label>
                        <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all resize-none h-24" placeholder="Describe specifications, colors, materials, etc."></textarea>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-sm font-bold text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors shadow-sm shadow-yellow-200">
                        Submit Request
                    </button>
                </div>
            </div>
        </div>
    );
}
