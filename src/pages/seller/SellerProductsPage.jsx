import React, { useState } from 'react';
import { sellerProductsData } from '../../data/sellerDummyData';
import { Package, Plus, Upload, Home, Search, Eye, Edit, Trash2, X, Save, Download, LayoutDashboard, DollarSign, BarChart3, TrendingUp, Image as ImageIcon, Box } from 'lucide-react';

export function SellerProductsPage() {
    const [products, setProducts] = useState(sellerProductsData);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [showDashboardModal, setShowDashboardModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleView = (product) => {
        setSelectedProduct(product);
        setShowViewModal(true);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowEditModal(true);
    };

    const handleDelete = (product) => {
        setSelectedProduct(product);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setProducts(products.filter(p => p.code !== selectedProduct.code));
        setShowDeleteModal(false);
        alert('Product removed from catalog!');
    };

    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Products</span>
            </div>

            {/* Header & Actions */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Package className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Product Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage your product inventory and stock levels</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                    </button>
                    <button
                        onClick={() => setShowExportModal(true)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button
                        onClick={() => setShowDashboardModal(true)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Search & Filters</h3>
                <p className="text-sm text-gray-500 mb-6">Find and filter products quickly</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, code, etc"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-orange-500">
                            <option>All Status</option>
                        </select>
                    </div>
                    <div>
                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <Search className="w-4 h-4 mr-2" />
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Products List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Products List</h3>
                        <p className="text-sm text-gray-500">Manage and monitor your products</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Total Products</p>
                        <p className="text-xl font-bold text-orange-600">31</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-yellow-100/50">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Code</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Stock Level</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 font-semibold text-gray-700">Approval</th>
                                <th className="px-6 py-3 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.length > 0 ? (
                                products.map((product, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3 text-orange-500 flex-shrink-0">
                                                    <Package className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{product.name}</p>
                                                    <p className="text-xs text-gray-500">{product.model}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-gray-700 text-xs">
                                            {product.code}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.stock}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium border border-green-100">
                                                {product.approval}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleView(product)}
                                                    className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 rounded text-white shadow-sm transition-all active:scale-90"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(product)}
                                                    className="w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded text-white shadow-sm transition-all active:scale-90"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product)}
                                                    className="w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded text-white shadow-sm transition-all active:scale-90"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 bg-gray-50/50">
                                        <div className="flex flex-col items-center">
                                            <Box className="w-12 h-12 text-gray-300 mb-2 opacity-50" />
                                            <p className="font-medium text-lg">No products cataloged</p>
                                            <p className="text-sm mt-1">Start adding products to your seller profile.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Add Product Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-orange-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                                    <Plus className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">New Product Form</h2>
                                    <p className="text-xs text-gray-500 mt-0.5">Define your product specifications and pricing</p>
                                </div>
                            </div>
                            <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"><X className="w-5 h-5" /></button>
                        </div>
                        <form className="p-8 overflow-y-auto max-h-[70vh]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-5">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center py-10 group cursor-pointer hover:bg-gray-100 transition-colors">
                                        <ImageIcon className="w-8 h-8 text-gray-400 mb-2 group-hover:scale-110 transition-transform" />
                                        <p className="text-xs font-bold text-gray-500 uppercase">Upload Main Image</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Product Title</label>
                                        <input type="text" placeholder="e.g. Ultra Slim Laptop" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Model Name</label>
                                        <input type="text" placeholder="Model Reference" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Base Price</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs uppercase">AED</span>
                                                <input type="number" placeholder="0.00" className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Discounted Price</label>
                                            <input type="number" placeholder="Optional" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Product Category</label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all">
                                            <option>Electronics & Gadgets</option>
                                            <option>Home Appliance</option>
                                            <option>Fashion & Apparel</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Stock Availability</label>
                                        <input type="number" placeholder="Quantity" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-black text-orange-600" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Description</label>
                                        <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all resize-none"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button onClick={() => setShowAddModal(false)} className="px-6 py-2 border border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:bg-white transition-all active:scale-95 shadow-sm">Discard</button>
                            <button onClick={() => { alert('Product added to catalog!'); setShowAddModal(false); }} className="px-10 py-2 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 active:scale-95 transition-all shadow-lg flex items-center border-b-2 border-orange-800"><Save className="w-4 h-4 mr-2" /> Publish Product</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {showExportModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-indigo-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                                    <Download className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Export Product Catalog</h2>
                            </div>
                            <button onClick={() => setShowExportModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8 space-y-6">
                            <p className="text-sm text-gray-500">Select how you want to download your product list and technical specifications.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-2xl text-left transition-all">
                                    <div className="p-2 bg-indigo-100 w-fit rounded-lg mb-2"><Package className="w-4 h-4 text-indigo-600" /></div>
                                    <p className="font-black text-indigo-900 uppercase text-xs">Full CSV Catalog</p>
                                    <p className="text-[10px] text-indigo-600 mt-1">Best for bulk updates</p>
                                </button>
                                <button className="p-4 border-2 border-gray-200 hover:border-indigo-300 rounded-2xl text-left transition-all group">
                                    <div className="p-2 bg-gray-100 w-fit rounded-lg mb-2 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"><Download className="w-4 h-4" /></div>
                                    <p className="font-black text-gray-700 uppercase text-xs group-hover:text-indigo-900 transition-colors">PDF Lookbook</p>
                                    <p className="text-[10px] text-gray-500 mt-1 group-hover:text-indigo-600 transition-colors">Visual catalog for clients</p>
                                </button>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <p className="text-xs font-black text-gray-400 uppercase mb-3 tracking-widest">Included Data</p>
                                <div className="space-y-2">
                                    {['Product Specifications', 'Current Inventory Status', 'Pricing Schedules', 'Approval History'].map(txt => (
                                        <label key={txt} className="flex items-center text-xs font-bold text-gray-600 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 border-gray-300 rounded mr-2" />
                                            {txt}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button onClick={() => setShowExportModal(false)} className="px-6 py-2 border border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:bg-white transition-all active:scale-95 shadow-sm">Cancel</button>
                            <button onClick={() => { alert('Product list exported!'); setShowExportModal(false); }} className="px-8 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 active:scale-95 shadow-lg border-b-2 border-indigo-900">Start Download</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Dashboard Modal */}
            {showDashboardModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-yellow-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                                    <BarChart3 className="w-5 h-5 text-yellow-700" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Catalog Performance</h2>
                            </div>
                            <button onClick={() => setShowDashboardModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-6 bg-orange-50 rounded-2xl border-b-4 border-orange-200 text-center">
                                    <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Approved</p>
                                    <h3 className="text-4xl font-black text-orange-600 tracking-tighter">28</h3>
                                    <p className="text-[10px] text-orange-500 mt-2 font-bold">90% Catalog rate</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-2xl border-b-4 border-blue-200 text-center">
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Pending Review</p>
                                    <h3 className="text-4xl font-black text-blue-600 tracking-tighter">3</h3>
                                    <p className="text-[10px] text-blue-500 mt-2 font-bold">In queue</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border-b-4 border-green-200 text-center">
                                    <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Live Products</p>
                                    <h3 className="text-4xl font-black text-green-600 tracking-tighter">24</h3>
                                    <p className="text-[10px] text-green-500 mt-2 font-bold">Active globally</p>
                                </div>
                            </div>
                            <div className="space-y-5">
                                <div className="flex justify-between items-end mb-1">
                                    <h4 className="text-sm font-black text-gray-700 uppercase tracking-widest">Quality Score</h4>
                                    <p className="text-xs font-bold text-green-600">+12% vs last month</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: 'SEO Optimization', val: '88', color: 'bg-orange-500' },
                                        { label: 'Image Quality', val: '72', color: 'bg-blue-500' },
                                        { label: 'Price Competitiveness', val: '95', color: 'bg-green-500' }
                                    ].map(metric => (
                                        <div key={metric.label}>
                                            <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase mb-1.5">
                                                <span>{metric.label}</span>
                                                <span>{metric.val}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div className={`${metric.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${metric.val}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                            <button onClick={() => setShowDashboardModal(false)} className="px-10 py-2.5 bg-yellow-600 text-white rounded-xl text-sm font-black hover:bg-yellow-700 active:scale-95 transition-all shadow-lg border-b-2 border-yellow-800">Close Analytics View</button>
                        </div>
                    </div>
                </div>
            )}

            {/* View Modal */}
            {showViewModal && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-200 border border-white/20">
                        <div className="relative h-48 bg-gray-900 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white leading-tight">{selectedProduct.name}</h3>
                                <p className="text-orange-400 font-black tracking-widest text-xs uppercase mt-1">{selectedProduct.code}</p>
                            </div>
                            <button onClick={() => setShowViewModal(false)} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Core Specs</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center font-bold">
                                            <DollarSign className="w-4 h-4 text-orange-500 mr-2" />
                                            <span className="text-lg text-gray-900">{selectedProduct.price}</span>
                                        </div>
                                        <div className="flex items-center font-bold">
                                            <Box className="w-4 h-4 text-blue-500 mr-2" />
                                            <span className="text-gray-700">{selectedProduct.stock} in Stock</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Status Matrix</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                                            <span className="text-[10px] font-black text-green-700 uppercase">Live Status</span>
                                            <span className="text-xs font-bold text-green-700">{selectedProduct.status}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                                            <span className="text-[10px] font-black text-blue-700 uppercase">Approval</span>
                                            <span className="text-xs font-bold text-blue-700">{selectedProduct.approval}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 border-t pt-6">
                                <div className="flex justify-between text-sm py-1">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Model Series</span>
                                    <span className="font-bold text-gray-800">{selectedProduct.model}</span>
                                </div>
                                <div className="flex justify-between text-sm py-1">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Commission Type</span>
                                    <span className="font-bold text-gray-800">Standard 8.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex justify-end">
                            <button onClick={() => setShowViewModal(false)} className="px-12 py-3 bg-gray-900 text-white rounded-2xl text-xs font-black hover:bg-black transition-all active:scale-95 shadow-lg">Close Catalog View</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3"><Edit className="w-5 h-5 text-blue-600" /></div>
                                <h2 className="text-xl font-bold text-gray-800">Edit Catalog Entry</h2>
                            </div>
                            <button onClick={() => setShowEditModal(false)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"><X className="w-5 h-5" /></button>
                        </div>
                        <form className="p-8 space-y-5 max-h-[70vh] overflow-y-auto">
                            <div>
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">Full Product Name</label>
                                <input type="text" defaultValue={selectedProduct.name} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-bold" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">Unit Price</label>
                                    <input type="text" defaultValue={selectedProduct.price} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-black text-orange-600" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">Total Quantity</label>
                                    <input type="number" defaultValue={selectedProduct.stock} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-bold text-blue-600" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">Visibility Status</label>
                                    <select defaultValue={selectedProduct.status} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold">
                                        <option>Active</option>
                                        <option>Inactive (Draft)</option>
                                        <option>Out of Stock</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">Catalog Model Ref</label>
                                    <input type="text" defaultValue={selectedProduct.model} className="w-full px-4 py-2 border border-blue-100 bg-blue-50/20 rounded-xl focus:border-blue-400 outline-none transition-all font-medium" />
                                </div>
                            </div>
                        </form>
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button onClick={() => setShowEditModal(false)} className="px-6 py-2  text-sm font-bold text-gray-400 hover:text-gray-600 transition-all">Discard Changes</button>
                            <button onClick={() => { alert('Product updated successfully!'); setShowEditModal(false); }} className="px-10 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-black hover:bg-blue-700 active:scale-95 transition-all shadow-lg border-b-2 border-blue-800 flex items-center"><Save className="w-4 h-4 mr-2" /> Commit Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-10 text-center">
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Trash2 className="w-10 h-10 text-red-600 animate-bounce" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-800 mb-3">Remove from Catalog?</h2>
                            <p className="text-gray-500 text-sm mb-10 font-medium">
                                This will permanently delete <span className="font-black text-gray-900 tracking-tight">{selectedProduct.name}</span>. You'll need to re-upload if needed.
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                <button onClick={confirmDelete} className="py-4 bg-red-600 text-white rounded-2xl text-sm font-black hover:bg-red-700 shadow-xl shadow-red-100 transition-all active:scale-95">Yes, Delete Forever</button>
                                <button onClick={() => setShowDeleteModal(false)} className="py-2.5 text-xs font-bold text-gray-400 hover:text-gray-600 transition-all">No, Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
