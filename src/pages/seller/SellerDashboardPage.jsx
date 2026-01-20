
import React from 'react';
import { sellerDashboardData } from '../../data/sellerDummyData';
import { ShoppingBag, ShoppingCart, Package, Clock, Settings, X } from 'lucide-react';

export function SellerDashboardPage() {
    return (
        <div className="space-y-6">
            {/* Success Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center text-green-700">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="text-sm font-medium">Welcome Demo Seller! Login successful.</span>
                </div>
                <button className="text-green-400 hover:text-green-600">
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Dashboard</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-start">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <ShoppingBag className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Seller Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening with your business today.</p>
                    </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-orange-50 rounded-lg mr-4">
                        <ShoppingBag className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerDashboardData.stats.totalSales}</h3>
                        <p className="text-xs text-green-600 font-medium mt-1">{sellerDashboardData.stats.salesGrowth} from last month</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        <ShoppingCart className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerDashboardData.stats.totalOrders}</h3>
                        <p className="text-xs text-green-600 font-medium mt-1">{sellerDashboardData.stats.ordersGrowth} from last month</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                        <Package className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Products</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerDashboardData.stats.products}</h3>
                        <p className="text-xs text-green-600 font-medium mt-1">{sellerDashboardData.stats.productsGrowth} from last week</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center">
                    <div className="p-3 bg-yellow-50 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pending Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900">{sellerDashboardData.stats.pendingOrders}</h3>
                        <p className="text-xs text-yellow-600 font-medium mt-1">{sellerDashboardData.stats.pendingLabel}</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Performance */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Sales Performance</h3>
                    <p className="text-sm text-gray-500 mb-6">Monthly sales trend</p>

                    <div className="h-64 relative flex items-end justify-between px-4">
                        {/* Placeholder for Graph - purely visual based on screenshot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full relative">
                                {/* Just drawing the axes and labels roughly */}
                                <div className="absolute left-0 bottom-0 top-0 w-12 flex flex-col justify-between text-xs text-gray-400">
                                    <span>AED 18,000</span>
                                    <span>AED 12,000</span>
                                    <span>AED 6,000</span>
                                    <span>AED 0</span>
                                </div>
                                <div className="absolute left-12 bottom-0 right-0 h-[1px] bg-gray-100"></div>
                                <div className="absolute left-12 bottom-0 right-0 top-10 border-l border-b border-gray-100">
                                    {/* Mock Bezier Curve */}
                                    <svg className="w-full h-full" overflow="visible">
                                        <path d="M0,200 C50,200 100,200 150,190 C200,180 250,50 300,10 S350,150 400,180" fill="none" stroke="#F97316" strokeWidth="3" />
                                        <circle cx="150" cy="190" r="4" fill="#F97316" />
                                        <circle cx="300" cy="10" r="4" fill="#F97316" />
                                        <circle cx="400" cy="180" r="4" fill="#F97316" />
                                    </svg>
                                </div>
                                <div className="absolute left-12 bottom-[-20px] right-0 flex justify-between text-xs text-gray-500">
                                    <span>Aug</span>
                                    <span>Sep</span>
                                    <span>Oct</span>
                                    <span>Nov</span>
                                    <span>Dec</span>
                                    <span>Jan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Top Products</h3>
                    <p className="text-sm text-gray-500 mb-6">Most ordered products</p>

                    <div className="space-y-4">
                        {sellerDashboardData.topProducts.map((product, index) => (
                            <div key={index} className="relative">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600 font-medium">{product.name}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                    <div
                                        className={`h-full rounded-r-full flex items-center justify-end pr-3 text-white text-xs font-bold transition-all duration-500 ${index === 0 ? 'bg-orange-400 w-[95%]' :
                                                index === 1 ? 'bg-blue-400 w-[85%]' :
                                                    index === 2 ? 'bg-green-400 w-[75%]' :
                                                        index === 3 ? 'bg-purple-400 w-[65%]' :
                                                            'bg-pink-400 w-[55%]'
                                            }`}
                                    >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 text-xs text-gray-500 items-center">
                        <div className="w-3 h-3 bg-orange-500 mr-2 rounded-sm"></div>
                        Number of Orders
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Placeholder for quick actions if needed later */}
                    <p className="text-gray-400 text-sm">Common tasks and shortcuts...</p>
                </div>
            </div>
        </div>
    );
}
