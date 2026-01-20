
import React from 'react';
import { managerAgentsData } from '../../data/managerDummyData';
import { Home, Users, User } from 'lucide-react';

export function ManagerAgentsPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Agents Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage call center agents</p>
                    </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                    Back to Dashboard
                </button>
            </div>

            {/* Agents List Card View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {managerAgentsData.map((agent, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                <User className="w-6 h-6 text-gray-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{agent.name}</h3>
                                <p className="text-sm text-gray-500">{agent.email}</p>
                            </div>
                        </div>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Phone:</span>
                                <span className="text-gray-900 font-medium">{agent.phone}</span>
                            </div>
                            <div className="flex justify-between text-sm items-center">
                                <span className="text-gray-500">Status:</span>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">{agent.status}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-bold">
                                View Details
                            </button>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-bold">
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
