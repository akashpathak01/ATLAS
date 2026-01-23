
import React, { useState } from 'react';
import { Home, Truck, Layout, BarChart, Settings, ShoppingCart, Search, Filter, Scan, Box, X, Check, AlertCircle, Eye, MapPin, Phone, Package, Calendar } from 'lucide-react';
import { deliveryOrdersData } from '../../data/deliveryDummyData';
import { useNavigate } from 'react-router-dom';

export function DeliveryOrdersPage() {
    const navigate = useNavigate();

    // Modal States
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null); // For View Modal
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // For Update Modal

    // Filter State
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Statuses');
    const [dateFilter, setDateFilter] = useState('All Dates');

    // Handlers
    const handleOpenScanner = () => setIsScannerOpen(true);

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
    };

    const handleUpdateOrder = (order, e) => {
        e.stopPropagation(); // Prevent row click or overlapping events
        setSelectedOrder(order);
        setIsUpdateModalOpen(true);
    };

    const confirmUpdate = (status) => {
        alert(`Order #${selectedOrder.code} updated to '${status}'! (Simulation)`);
        setIsUpdateModalOpen(false);
        setSelectedOrder(null);
    };

    const handleApplyFilters = () => {
        // In a real app, this would filter the data list.
        // For now, we just close the panel to simulate "Applying" and clearing the view.
        setIsFilterOpen(false);
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setStatusFilter('All Statuses');
        setDateFilter('All Dates');
    };

    return (
        <div className="space-y-6 relative">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <Truck className="w-4 h-4 mr-2" />
                <span className="mr-2">Delivery</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Orders</span>
            </div>

            {/* Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center w-full md:w-auto">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                        <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Delivery Orders</h1>
                        <p className="text-gray-500 text-sm">Manage orders ready for delivery or in transit.</p>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95 border ${isFilterOpen ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                    >
                        <Filter className="w-4 h-4 mr-2" />
                        {isFilterOpen ? 'Close Filters' : 'Filter List'}
                    </button>
                    <button onClick={() => navigate('/delivery/dashboard')} className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95">
                        Back to Dashboard
                    </button>
                    <button onClick={() => navigate('/delivery/settings')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95">
                        <Settings className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-100/50 rounded-xl mr-4">
                        <Box className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Ready for Delivery</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.ready}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-yellow-100/50 rounded-xl mr-4">
                        <Truck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">In Delivery</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.inDelivery}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-green-100/50 rounded-xl mr-4">
                        <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Delivered</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.delivered}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
                    <div className="p-3 bg-red-100/50 rounded-xl mr-4">
                        <X className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Failed Deliveries</p>
                        <h3 className="text-3xl font-bold text-gray-900">{deliveryOrdersData.stats.failed}</h3>
                    </div>
                </div>
            </div>

            {/* Scan Barcode */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4">
                        <Scan className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-blue-900">Scan Order Barcode</h3>
                        <p className="text-blue-600 text-sm">Use barcode scanner to quickly find orders</p>
                    </div>
                </div>
                <button
                    onClick={handleOpenScanner}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center font-bold shadow-sm transition-colors active:scale-95"
                >
                    <Scan className="w-4 h-4 mr-2" />
                    Open Scanner
                </button>
            </div>

            {/* Filters - Collapsible */}
            {isFilterOpen && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-in slide-in-from-top-2 duration-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-gray-900 flex items-center"><Filter className="w-5 h-5 mr-2 text-blue-600" /> Filter Orders</h3>
                        <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold mb-2 text-gray-500">Search</label>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Order Code, Customer, Phone..."
                                className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-2 text-gray-500">Status</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                            >
                                <option>All Statuses</option>
                                <option>Ready</option>
                                <option>In Delivery</option>
                                <option>Delivered</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-2 text-gray-500">Date Filter</label>
                            <select
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className="w-full bg-white border border-gray-200 text-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                            >
                                <option>All Dates</option>
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                        <button onClick={handleApplyFilters} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95 flex items-center">
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                        <button onClick={handleClearFilters} className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95 flex items-center">
                            <X className="w-4 h-4 mr-2" />
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}

            {/* Orders List Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
                <div className="p-6 border-b border-gray-100 flex items-center">
                    <Layout className="w-5 h-5 text-blue-600 mr-2" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Orders List</h3>
                        <p className="text-gray-500 text-sm">Showing 1-20 of 50 orders</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-yellow-100/50 text-xs font-bold text-gray-500 uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left">Order Code</th>
                                <th className="px-6 py-4 text-left">Customer</th>
                                <th className="px-6 py-4 text-left">Address</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-left">Amount</th>
                                <th className="px-6 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {deliveryOrdersData.orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800 text-sm">{order.code}</div>
                                        <div className="text-xs text-gray-500">{idx === 0 ? "Jan 17, 2026" : idx === 1 ? "Jan 03, 2026" : "Jan 20, 2026"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800 text-sm">{order.customer}</div>
                                        <div className="text-xs text-gray-500">{order.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">{order.address}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-3 py-1 rounded-full font-medium border ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.amount}</td>
                                    <td className="px-6 py-4 text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleViewOrder(order)}
                                                className="flex items-center text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-100 transition-all active:scale-95"
                                            >
                                                <Eye className="w-3 h-3 mr-1" /> View
                                            </button>
                                            <button
                                                onClick={(e) => handleUpdateOrder(order, e)}
                                                className="flex items-center text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-100 transition-all active:scale-95"
                                            >
                                                <Check className="w-3 h-3 mr-1" /> Update
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- MODALS --- */}

            {/* Scanner Modal */}
            {isScannerOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Scan className="w-5 h-5 mr-2 text-blue-600" /> Barcode Scanner</h3>
                            <button onClick={() => setIsScannerOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6 text-center">
                            <div className="bg-black rounded-lg h-48 w-full mb-4 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 border-2 border-green-500 opacity-50 animate-pulse"></div>
                                <span className="text-white text-xs">Camera View (Simulated)</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Point your camera at a shipping label barcode.</p>
                            <button onClick={() => setIsScannerOpen(false)} className="w-full px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md">Close Scanner</button>
                        </div>
                    </div>
                </div>
            )}

            {/* View Order Modal */}
            {selectedOrder && !isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Package className="w-5 h-5 mr-2 text-blue-600" /> Order: {selectedOrder.code}</h3>
                            <button onClick={() => setSelectedOrder(null)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Customer</p>
                                    <h4 className="text-xl font-bold text-gray-900">{selectedOrder.customer}</h4>
                                    <p className="text-sm text-gray-500 flex items-center mt-1"><Phone className="w-3 h-3 mr-1" /> {selectedOrder.phone}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Amount</p>
                                    <h4 className="text-xl font-bold text-green-600">{selectedOrder.amount}</h4>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Delivery Address</p>
                                        <p className="text-gray-800 font-medium text-sm leading-relaxed">{selectedOrder.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-gray-100 rounded-lg p-3">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Order Date</p>
                                    <p className="text-sm font-bold text-gray-700 flex items-center"><Calendar className="w-4 h-4 mr-2" /> Jan 17, 2026</p>
                                </div>
                                <div className="border border-gray-100 rounded-lg p-3">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Current Status</p>
                                    <span className={`inline-block text-xs px-2 py-1 rounded-md font-medium border ${selectedOrder.status === 'Processing' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                                        {selectedOrder.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button onClick={() => setSelectedOrder(null)} className="w-full px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Close Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Order Status Modal */}
            {isUpdateModalOpen && selectedOrder && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Check className="w-5 h-5 mr-2 text-green-600" /> Update Status</h3>
                            <button onClick={() => setIsUpdateModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 text-sm mb-4">
                                Change delivery status for <strong>{selectedOrder.code}</strong>:
                            </p>

                            <div className="space-y-3">
                                <button onClick={() => confirmUpdate('Shipped')} className="w-full p-3 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 flex items-center transition-all group">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Mark as Shipped</span>
                                </button>
                                <button onClick={() => confirmUpdate('Delivered')} className="w-full p-3 border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 flex items-center transition-all group">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                                    <span className="font-medium text-gray-700 group-hover:text-green-700">Mark as Delivered</span>
                                </button>
                                <button onClick={() => confirmUpdate('Failed')} className="w-full p-3 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-300 flex items-center transition-all group">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                                    <span className="font-medium text-gray-700 group-hover:text-red-700">Mark as Failed</span>
                                </button>
                            </div>

                            <button onClick={() => setIsUpdateModalOpen(false)} className="w-full mt-4 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
