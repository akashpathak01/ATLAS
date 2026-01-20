
import React, { useState } from 'react';
import { Home, User, Edit, Key, Settings, Download, HelpCircle, CheckCircle, X, ChevronRight, Shield, Bell } from 'lucide-react';
import { packagingProfileData } from '../../data/packagingDummyData';

export function PackagingDashboardPage() {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            {showBanner && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex justify-between items-center text-green-700">
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span className="font-medium">Welcome Packaging Agent! Login successful.</span>
                    </div>
                    <button onClick={() => setShowBanner(false)} className="text-green-500 hover:text-green-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Users</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Profile</span>
            </div>

            {/* Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 bg-orange-100 rounded-full mr-4">
                        <User className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Profile</h1>
                        <p className="text-gray-500 text-sm">Manage your account information and preferences</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Key className="w-4 h-4 mr-2" />
                        Change Password
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Personal & Role Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-orange-100 rounded-lg mr-3">
                                <User className="w-5 h-5 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
                                <p className="text-gray-500 text-xs">Your basic account details</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Full Name</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                                    {packagingProfileData.personalInfo.fullName}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Phone Number</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                                    {packagingProfileData.personalInfo.phone}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Email Address</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                                    {packagingProfileData.personalInfo.email}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Date Joined</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                                    {packagingProfileData.personalInfo.dateJoined}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Role Information */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Role Information</h3>
                                <p className="text-gray-500 text-xs">Your account role and permissions</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Primary Role</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {packagingProfileData.roleInfo.primaryRole}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Account Status</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center text-green-600 font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    {packagingProfileData.roleInfo.accountStatus}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Last Login</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                                    {packagingProfileData.roleInfo.lastLogin}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Account Type</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                        {packagingProfileData.roleInfo.accountType}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Profile Pic & Quick Actions */}
                <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                        <h3 className="text-lg font-bold text-gray-900 text-left mb-1">Profile Picture</h3>
                        <p className="text-gray-500 text-xs text-left mb-6">Your account avatar</p>

                        <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                                <User className="w-12 h-12 text-orange-600" />
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs">Profile picture management disabled</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Actions</h3>
                        <p className="text-gray-500 text-xs mb-6">Common account tasks</p>

                        <div className="space-y-3">
                            <button className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors text-left group">
                                <div className="flex items-center">
                                    <Key className="w-4 h-4 mr-3 text-orange-500" />
                                    <span className="text-gray-700 font-medium text-sm">Change Password</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors text-left group">
                                <div className="flex items-center">
                                    <Settings className="w-4 h-4 mr-3 text-blue-500" />
                                    <span className="text-gray-700 font-medium text-sm">Account Settings</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors text-left group">
                                <div className="flex items-center">
                                    <Download className="w-4 h-4 mr-3 text-green-500" />
                                    <span className="text-gray-700 font-medium text-sm">Export Data</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors text-left group">
                                <div className="flex items-center">
                                    <HelpCircle className="w-4 h-4 mr-3 text-purple-500" />
                                    <span className="text-gray-700 font-medium text-sm">Help & Support</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
