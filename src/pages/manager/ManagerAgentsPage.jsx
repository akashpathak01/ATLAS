
import React, { useState } from 'react';
import { managerAgentsData } from '../../data/managerDummyData';
import { Home, Phone, UserPlus, Search, Filter, MoreVertical, Mail, Activity, BarChart2, X, User, MapPin, Calendar, Star, Users } from 'lucide-react';

export function ManagerAgentsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Modal states
    const [showAddAgentModal, setShowAddAgentModal] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);

    // Filter agents based on search and status
    const filteredAgents = managerAgentsData.filter(agent => {
        const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || agent.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleAddAgent = (e) => {
        e.preventDefault();
        alert("New Agent Added Successfully! (Simulation)");
        setShowAddAgentModal(false);
    };

    const handleViewDetails = (agent) => {
        setSelectedAgent(agent);
        setShowViewModal(true);
    };

    return (
        <div className="space-y-6 relative">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Call Center</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Agents</span>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm gap-4">
                <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-xl mr-4">
                        <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Agent Management</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage call center agents and view performance</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowAddAgentModal(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all active:scale-95 shadow-sm text-sm font-medium"
                >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add New Agent
                </button>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search agents by name or email..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Filter className="w-4 h-4" />
                        <span>Filter by:</span>
                    </div>
                    <select
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Offline">Offline</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Agents List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.length > 0 ? (
                    filteredAgents.map((agent, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 mr-3">
                                            {agent.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{agent.name}</h3>
                                            <p className="text-sm text-gray-500">{agent.role}</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                        {agent.email}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                        {agent.phone}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Activity className="w-4 h-4 mr-2 text-gray-400" />
                                        Status:
                                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${agent.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {agent.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <BarChart2 className="w-4 h-4 mr-2 text-gray-400" />
                                        Performance:
                                        <span className="ml-2 font-bold text-gray-900">{agent.performance}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center bg-opacity-50 group-hover:bg-opacity-100 transition-colors">
                                <span className="text-xs text-gray-500">Joined: {agent.joined}</span>
                                <button
                                    onClick={() => handleViewDetails(agent)}
                                    className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-12 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No agents found</h3>
                        <p className="text-gray-500 mt-1">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>

            {/* --- MODALS --- */}

            {/* Add New Agent Modal */}
            {showAddAgentModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-blue-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><UserPlus className="w-5 h-5 mr-2 text-blue-600" /> Add New Agent</h3>
                            <button onClick={() => setShowAddAgentModal(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleAddAgent} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Role</label>
                                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500">
                                    <option>Support Agent</option>
                                    <option>Senior Agent</option>
                                    <option>Team Lead</option>
                                </select>
                            </div>
                            <div className="pt-2 flex gap-3">
                                <button type="button" onClick={() => setShowAddAgentModal(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md">Add Agent</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Agent Details Modal */}
            {showViewModal && selectedAgent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-purple-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><User className="w-5 h-5 mr-2 text-purple-600" /> Agent Profile</h3>
                            <button onClick={() => setShowViewModal(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500 mr-4">
                                    {selectedAgent.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{selectedAgent.name}</h2>
                                    <p className="text-sm text-gray-500">{selectedAgent.role}</p>
                                    <div className="flex items-center mt-1">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${selectedAgent.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {selectedAgent.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Mail className="w-3 h-3 mr-1" /> Email</p>
                                    <p className="text-sm font-semibold text-gray-900 truncate">{selectedAgent.email}</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Phone className="w-3 h-3 mr-1" /> Phone</p>
                                    <p className="text-sm font-semibold text-gray-900">{selectedAgent.phone}</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Star className="w-3 h-3 mr-1" /> Performance</p>
                                    <p className="text-sm font-semibold text-green-600">{selectedAgent.performance}</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Calendar className="w-3 h-3 mr-1" /> Joined</p>
                                    <p className="text-sm font-semibold text-gray-900">{selectedAgent.joined}</p>
                                </div>
                            </div>

                            <button onClick={() => setShowViewModal(false)} className="w-full px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Close Profile</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
