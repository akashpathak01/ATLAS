import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminDashboard } from '../components/dashboard/AdminDashboard';
import { SuperAdminDashboard } from '../components/dashboard/SuperAdminDashboard';

export function DashboardPage() {
    const { user } = useAuth();
    const role = user?.role || 'Super Admin'; // Fallback for debugging

    if (role === 'Admin') {
        return <AdminDashboard />;
    }

    // Default to Super Admin view for Super Admin and other roles for now
    // (Other roles can have their own dashboards added later)
    return <SuperAdminDashboard />;
}
