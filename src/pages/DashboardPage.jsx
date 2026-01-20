import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminDashboard } from '../components/dashboard/AdminDashboard';
import { SuperAdminDashboard } from '../components/dashboard/SuperAdminDashboard';
import { CallCenterDashboard } from '../components/dashboard/CallCenterDashboard';
import { ManagerDashboard } from '../components/dashboard/ManagerDashboard';

export function DashboardPage() {
    const { user } = useAuth();
    const role = user?.role || 'Super Admin'; // Fallback for debugging

    if (role === 'Admin') {
        return <AdminDashboard />;
    }

    if (role === 'Call Center Agent') {
        return <CallCenterDashboard />;
    }

    if (role === 'Call Center Manager') {
        return <ManagerDashboard />;
    }

    // Default to Super Admin view for Super Admin and other roles for now
    // (Other roles can have their own dashboards added later)
    return <SuperAdminDashboard />;
}
