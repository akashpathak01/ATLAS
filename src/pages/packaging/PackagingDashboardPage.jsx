
import React, { useState } from 'react';
import { Home, User, Edit, Key, Settings, Download, HelpCircle, CheckCircle, X, ChevronRight, Shield, Bell, Save, AlertTriangle, CloudUpload, Camera } from 'lucide-react';
import { packagingProfileData } from '../../data/packagingDummyData';

export function PackagingDashboardPage() {
    const [showBanner, setShowBanner] = useState(true);

    // Modal States
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isProfilePicModalOpen, setIsProfilePicModalOpen] = useState(false);

    // Form States (Simulated)
    const [profileForm, setProfileForm] = useState({ ...packagingProfileData.personalInfo });
    const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

    // Handlers
    const handleSaveProfile = (e) => {
        e.preventDefault();
        alert("Profile Updated Successfully! (Simulation)");
        setIsEditProfileOpen(false);
    };

    const handleSavePassword = (e) => {
        e.preventDefault();
        if (passwordForm.new !== passwordForm.confirm) {
            alert("New passwords do not match!");
            return;
        }
        alert("Password Changed Successfully! (Simulation)");
        setIsChangePasswordOpen(false);
        setPasswordForm({ current: '', new: '', confirm: '' });
    };

    const handleExport = () => {
        alert("Exporting Data... (Simulation)");
        setIsExportModalOpen(false);
    };

    const handleSaveProfilePic = (e) => {
        e.preventDefault();
        alert("Profile Picture Updated! (Simulation)");
        setIsProfilePicModalOpen(false);
    };

    return (
        <div className="space-y-6 relative">
            {/* Welcome Banner */}
            {showBanner && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex justify-between items-center text-green-700 animate-in fade-in slide-in-from-top-2">
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
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center w-full md:w-auto">
                    <div className="p-3 bg-orange-100 rounded-full mr-4">
                        <User className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Profile</h1>
                        <p className="text-gray-500 text-sm">Manage your account information and preferences</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <button
                        onClick={() => setIsChangePasswordOpen(true)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95 flex-1 md:flex-none justify-center"
                    >
                        <Key className="w-4 h-4 mr-2" />
                        Change Password
                    </button>
                    <button
                        onClick={() => setIsEditProfileOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95 flex-1 md:flex-none justify-center"
                    >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-sm transition-all active:scale-95 flex-1 md:flex-none justify-center">
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
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium">
                                    {packagingProfileData.personalInfo.fullName}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Phone Number</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium">
                                    {packagingProfileData.personalInfo.phone}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Email Address</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium">
                                    {packagingProfileData.personalInfo.email}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 mb-1 block">Date Joined</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium">
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
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium">
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
                            <div
                                onClick={() => setIsProfilePicModalOpen(true)}
                                className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm relative group cursor-pointer hover:shadow-md transition-all ring-2 ring-transparent hover:ring-orange-200"
                            >
                                <User className="w-12 h-12 text-orange-600" />
                                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                                    <Camera className="w-8 h-8 mb-1" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Change</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-green-600 text-xs font-bold cursor-pointer hover:underline" onClick={() => setIsProfilePicModalOpen(true)}>
                            Tap to update profile photo
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Actions</h3>
                        <p className="text-gray-500 text-xs mb-6">Common account tasks</p>

                        <div className="space-y-3">
                            <button
                                onClick={() => setIsChangePasswordOpen(true)}
                                className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-all text-left group active:scale-95"
                            >
                                <div className="flex items-center">
                                    <Key className="w-4 h-4 mr-3 text-orange-500" />
                                    <span className="text-gray-700 font-medium text-sm">Change Password</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button
                                onClick={() => setIsSettingsModalOpen(true)}
                                className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-all text-left group active:scale-95"
                            >
                                <div className="flex items-center">
                                    <Settings className="w-4 h-4 mr-3 text-blue-500" />
                                    <span className="text-gray-700 font-medium text-sm">Account Settings</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button
                                onClick={() => setIsExportModalOpen(true)}
                                className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-all text-left group active:scale-95"
                            >
                                <div className="flex items-center">
                                    <Download className="w-4 h-4 mr-3 text-green-500" />
                                    <span className="text-gray-700 font-medium text-sm">Export Data</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                            </button>
                            <button
                                onClick={() => setIsHelpModalOpen(true)}
                                className="w-full flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-all text-left group active:scale-95"
                            >
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

            {/* --- MODALS --- */}

            {/* Edit Profile Modal */}
            {isEditProfileOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Edit className="w-5 h-5 mr-2 text-blue-600" /> Edit Profile</h3>
                            <button onClick={() => setIsEditProfileOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleSaveProfile} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Full Name</label>
                                <input
                                    type="text"
                                    value={profileForm.fullName}
                                    onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Phone Number</label>
                                <input
                                    type="text"
                                    value={profileForm.phone}
                                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Email</label>
                                <input
                                    type="email"
                                    value={profileForm.email}
                                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="pt-2 flex gap-3">
                                <button type="button" onClick={() => setIsEditProfileOpen(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Change Password Modal */}
            {isChangePasswordOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Key className="w-5 h-5 mr-2 text-orange-600" /> Change Password</h3>
                            <button onClick={() => setIsChangePasswordOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleSavePassword} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Current Password</label>
                                <input type="password" value={passwordForm.current} onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">New Password</label>
                                <input type="password" value={passwordForm.new} onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Confirm New Password</label>
                                <input type="password" value={passwordForm.confirm} onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-orange-500" />
                            </div>
                            <div className="pt-2 flex gap-3">
                                <button type="button" onClick={() => setIsChangePasswordOpen(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 shadow-md">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Change Profile Picture Modal (NEW) */}
            {isProfilePicModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Camera className="w-5 h-5 mr-2 text-orange-600" /> profile Photo</h3>
                            <button onClick={() => setIsProfilePicModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleSaveProfilePic} className="p-6 space-y-6">
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-colors cursor-pointer group">
                                <div className="bg-orange-100 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                    <CloudUpload className="w-8 h-8 text-orange-600" />
                                </div>
                                <p className="text-sm font-bold text-gray-700">Click to upload image</p>
                                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setIsProfilePicModalOpen(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 shadow-md">Update Photo</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {isExportModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Download className="w-5 h-5 mr-2 text-green-600" /> Export Personal Data</h3>
                            <button onClick={() => setIsExportModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-600 mb-6">Your personal data including profile information and activity logs will be downloaded as a PDF.</p>
                            <div className="flex gap-3">
                                <button onClick={() => setIsExportModalOpen(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
                                <button onClick={handleExport} className="flex-1 px-4 py-3 text-sm font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 shadow-md">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal (Placeholder) */}
            {isSettingsModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><Settings className="w-5 h-5 mr-2 text-blue-600" /> Account Settings</h3>
                            <button onClick={() => setIsSettingsModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-6">Settings features would go here (Notifications, Theme, etc.).</p>
                            <button onClick={() => setIsSettingsModalOpen(false)} className="w-full px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Help Modal (Placeholder) */}
            {isHelpModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-purple-600" /> Help & Support</h3>
                            <button onClick={() => setIsHelpModalOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-all"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-6">Contact support at support@atlas.com for assistance.</p>
                            <button onClick={() => setIsHelpModalOpen(false)} className="w-full px-4 py-3 text-sm font-bold text-white bg-purple-600 rounded-xl hover:bg-purple-700 shadow-md">Got it</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
