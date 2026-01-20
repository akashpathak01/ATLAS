
import React from 'react';
import { Home, Truck, Layout, BarChart, Settings, ShoppingCart, CheckCircle, Zap, Shield, FileText, Box } from 'lucide-react';
import { deliveryPerformanceData } from '../../data/deliveryDummyData';
import { useNavigate } from 'react-router-dom';

export function DeliveryPerformancePage() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <Truck className="w-4 h-4 mr-2" />
                <span className="mr-2">Delivery</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Performance</span>
            </div>

            {/* Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold text-gray-900">My Performance Dashboard</h1>
                    <p className="text-gray-500 text-sm">Track your delivery performance and achievements</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Current Time</p>
                    <p className="text-xl font-bold text-gray-900 font-mono">{deliveryPerformanceData.currentTime}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 p-1 flex space-x-1 w-max">
                <button onClick={() => navigate('/delivery/dashboard')} className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                    Dashboard
                </button>
                <button className="px-6 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-lg">
                    Performance
                </button>
                <button onClick={() => navigate('/delivery/settings')} className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                    Settings
                </button>
            </div>

            <div className="flex justify-end">
                <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Today's Date</p>
                    <p className="text-lg font-bold text-gray-900">{deliveryPerformanceData.currentDate}</p>
                </div>
            </div>

            {/* Order Statistics */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Order Statistics for Delivery</h3>
                    <p className="text-gray-500 text-sm">Current order status in delivery workflow</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-gray-100 rounded-lg mr-3">
                            <FileText className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">Total Orders</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-green-100 rounded-lg mr-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">Ready for Delivery</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">In Delivery</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                            <CheckCircle className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">Delivered</span>
                    </div>
                </div>
            </div>

            {/* This Week Overview */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900">This Week Overview</h3>
                    <p className="text-gray-500 text-sm">Your performance metrics for the current week</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-green-100 rounded-lg mr-3">
                            <Box className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">Packages Completed</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <span className="block font-bold text-gray-900 text-lg">min</span>
                            <span className="text-gray-500 text-xs">Avg Duration</span>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                            <Shield className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="font-medium text-gray-600 text-sm">Quality Checks</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center shadow-sm">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                            <span className="font-bold text-purple-600">%</span>
                        </div>
                        <div>
                            <span className="block font-bold text-gray-900 text-lg">%</span>
                            <span className="text-gray-500 text-xs">Pass Rate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quality Check Results */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[100px]">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quality Check Results</h3>
                <div className="border-t border-gray-100"></div>
            </div>
        </div>
    );
}

// Helper Clock Icon component as it was used in map but missed in import or similar
function Clock({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    )
}
