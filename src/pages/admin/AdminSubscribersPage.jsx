
import React from 'react';
import { adminSubscribersData, adminSubscribersStats } from '../../data/adminDummyData';
import { Search, Filter, MoreVertical, Users, UserCheck, UserX } from 'lucide-react';

export function AdminSubscribersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Subscribers</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Subscribers</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminSubscribersStats.total}</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Active</p>
                        <h3 className="text-xl font-bold text-green-600 mt-1">{adminSubscribersStats.active}</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <UserCheck className="w-5 h-5 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Inactive/Churned</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{adminSubscribersStats.inactive}</h3>
                    </div>
                    <div className="p-2 bg-gray-100 rounded-lg">
                        <UserX className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search subscribers..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                    />
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Plan</th>
                                <th className="px-6 py-3">Subscribed On</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminSubscribersData.map((sub) => (
                                <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{sub.name}</td>
                                    <td className="px-6 py-4">{sub.email}</td>
                                    <td className="px-6 py-4 text-blue-600 font-medium">{sub.plan}</td>
                                    <td className="px-6 py-4 text-gray-500">{sub.subscribed}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${sub.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
