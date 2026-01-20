
// Manager Dummy Data - Matches Provided Screenshots

export const managerDashboardData = {
    user: "Manager User",
    liveOperations: "05:18:48 PM",
    stats: {
        totalOrders: 67,
        pendingApproval: 1,
        activeAgents: 1,
        approvedToday: 0
    },
    ordersAwaitingApproval: [
        {
            id: '##260117001',
            customer: 'dummy',
            created: 'Jan 17, 2026 00:46',
            status: 'Callcenter_Review'
        }
    ],
    recentlyApprovedOrders: [], // Empty as per screenshot
    assignedOrders: [
        {
            id: '##260117007',
            customer: 'dummy',
            agent: 'Call Center Agent',
            status: 'Seller_Submitted'
        },
        {
            id: '##260117001',
            customer: 'dummy',
            agent: 'Call Center Agent',
            status: 'Callcenter_Review'
        }
    ],
    unassignedOrders: [
        {
            id: '##305537',
            customer: 'Mohammed Al Ahmed',
            created: 'Nov 11, 2025 04:24'
        },
        {
            id: '##313273',
            customer: 'Mohammed Al Ahmed',
            created: 'Nov 11, 2025 04:24' // Assuming same date for simplicity or placeholder
        }
    ]
};

export const managerOrdersData = {
    stats: {
        totalOrders: 67,
        pending: 6,
        processing: 13,
        completed: 0,
        activeAgents: 1,
        todaysRevenue: 0
    },
    orders: [
        {
            id: '##260117007',
            amount: '654.00 AED',
            customer: 'dummy',
            customerPhone: '123456785',
            status: 'Pending',
            agent: 'Call Center Agent',
            created: 'Jan 17, 2026 01:33'
        },
        {
            id: '##260117006',
            amount: '100.00 AED',
            customer: 'عميل تجريبي 5',
            customerPhone: '0501234564',
            status: 'Pending',
            agent: 'Unassigned',
            created: 'Jan 17, 2026 01:30'
        }
    ]
};

export const managerAgentsData = [
    {
        name: 'Call Center Agent',
        email: 'callcenter@atlas.com',
        phone: 'N/A',
        status: 'Active'
    }
];

export const managerPerformanceData = {
    stats: {
        totalAgents: 1,
        activeAgents: 'Active',
        avgPerformance: '87%',
        performanceChange: '↑ This Month',
        topPerformer: 'Call Center Agent',
        topPerformerPeriod: 'This Week',
        totalOrders: 2,
        ordersPeriod: '↑ All Time'
    },
    agentDetails: [
        {
            agent: 'Call Center Agent',
            email: 'callcenter@atlas.com',
            ordersHandled: 2,
            successRate: '0.0%',
            avgResponseTime: '2.5 min',
            rating: 4.2,
            performanceScore: '10.0%'
        }
    ]
};

export const managerStatisticsData = {
    stats: {
        totalOrders: 7,
        totalOrdersChange: '↑ All Time',
        thisMonth: 67,
        thisMonthChange: '↑ vs Last Month',
        completionRate: '0.0%',
        completionRateChange: '↑ This Month',
        avgOrderValue: '172 AED',
        avgOrderValueChange: '↑ This Month'
    },
    ordersByStatus: {
        pending: { count: 6, percentage: '25%', revenue: '1154 AED', avgTime: '2.5 hours' },
        processing: { count: 1, percentage: '30%', revenue: '50 AED', avgTime: '4.2 hours' },
        completed: { count: 0, percentage: '40%', revenue: '0 AED', avgTime: '6.8 hours' },
        cancelled: { count: 0, percentage: '5%', revenue: '0 AED', avgTime: '1.2 hours' }
    }
};
