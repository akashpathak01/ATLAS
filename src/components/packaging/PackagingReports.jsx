import React from 'react';
import { FileText, Download, TrendingUp, CheckCircle, AlertTriangle, XCircle, Clock, Package } from 'lucide-react';

export function PackagingReports({ onNavigate }) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                        <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Packaging Report</h1>
                        <p className="text-sm text-gray-500">View packaging performance and statistics</p>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 flex items-center gap-2"
                >
                    Dashboard
                </button>
            </div>

            {/* Report Period */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Report Period</h2>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button className="px-4 py-1.5 bg-orange-600 text-white text-sm font-medium rounded-md shadow-sm">Today</button>
                    <button className="px-4 py-1.5 text-gray-600 text-sm font-medium hover:text-gray-900">Last 7 Days</button>
                    <button className="px-4 py-1.5 text-gray-600 text-sm font-medium hover:text-gray-900">Last 30 Days</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-lg"><Package className="w-6 h-6 text-green-600" /></div>
                    <div>
                        <p className="text-sm text-gray-500">Packages Completed</p>
                        <h3 className="text-xl font-bold text-gray-900">0</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg"><Clock className="w-6 h-6 text-blue-600" /></div>
                    <div>
                        <p className="text-sm text-gray-500">Avg Duration</p>
                        <h3 className="text-xl font-bold text-gray-900">0 min</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-yellow-50 rounded-lg"><CheckCircle className="w-6 h-6 text-yellow-600" /></div>
                    <div>
                        <p className="text-sm text-gray-500">Quality Checks</p>
                        <h3 className="text-xl font-bold text-gray-900">0</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-purple-50 rounded-lg"><TrendingUp className="w-6 h-6 text-purple-600" /></div>
                    <div>
                        <p className="text-sm text-gray-500">Pass Rate</p>
                        <h3 className="text-xl font-bold text-gray-900">0%</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quality Check Results */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-6">Quality Check Results</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-gray-700">Passed</span>
                            </div>
                            <span className="font-bold text-green-700">0</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                <span className="text-sm font-medium text-gray-700">Conditional</span>
                            </div>
                            <span className="font-bold text-yellow-700">0</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <div className="flex items-center gap-2">
                                <XCircle className="w-4 h-4 text-red-600" />
                                <span className="text-sm font-medium text-gray-700">Failed</span>
                            </div>
                            <span className="font-bold text-red-700">0</span>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-500">
                        No quality check data available
                    </div>
                </div>

                {/* Daily Activity */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-6">Daily Activity</h3>
                    <table className="w-full text-sm">
                        <thead className="text-gray-500 text-xs uppercase">
                            <tr>
                                <th className="text-left font-normal pb-4">Date</th>
                                <th className="text-center font-normal pb-4">Packages</th>
                                <th className="text-center font-normal pb-4">Checks</th>
                                <th className="text-right font-normal pb-4">Avg Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[17, 18, 19, 20, 21, 22, 23].map((day) => (
                                <tr key={day}>
                                    <td className="py-3 text-gray-600">Jan {day}</td>
                                    <td className="py-3 text-center"><span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">0</span></td>
                                    <td className="py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">0</span></td>
                                    <td className="py-3 text-right"><span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs">0 min</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Weight Statistics */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-6">Package Weight Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <p className="text-sm text-gray-500 mb-1">Average Weight</p>
                        <h4 className="text-xl font-bold text-blue-600">0 kg</h4>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <p className="text-sm text-gray-500 mb-1">Minimum Weight</p>
                        <h4 className="text-xl font-bold text-green-600">0 kg</h4>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                        <p className="text-sm text-gray-500 mb-1">Maximum Weight</p>
                        <h4 className="text-xl font-bold text-purple-600">0 kg</h4>
                    </div>
                </div>
            </div>

            {/* Footer / Export */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-gray-900">Export Report</h3>
                    <p className="text-sm text-gray-500">Export packaging data for the selected period</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 flex items-center gap-2">
                        <Download className="w-4 h-4" /> Export PDF
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                </div>
            </div>

        </div>
    );
}
