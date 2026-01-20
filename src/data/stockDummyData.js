
// Stock Keeper Dummy Data - Matches Provided Screenshots

export const stockDashboardData = {
    user: "Stock Keeper",
    stats: {
        totalProducts: 1,
        totalPieces: 54,
        warehouses: 3,
        nearExpiry: 0,
        outOfStock: 0,
        ordersAwaitingPick: 0
    },
    stockStatus: {
        totalItems: 1
    }
};

export const stockInventoryData = {
    products: [
        {
            id: 'P032',
            image: null, // Placeholder if needed
            name: 'sgsdgdsg',
            sku: 'SKU-1768382920-2495F5E7',
            seller: 'Admin User',
            category: 'electronics',
            qty: 54
        }
    ]
};

export const stockReceivingData = {
    recentReceivings: [] // Empty as per screenshot
};

export const stockPickingData = {
    pendingCount: 0,
    readyForPackingCount: 14,
    orders: [] // Empty "No orders ready for preparation"
};

export const stockReturnsData = {
    stats: {
        total: 0,
        awaitingInspection: 0,
        completed: 0
    },
    orders: [] // Empty
};

export const stockWarehousesData = {
    stats: {
        totalWarehouses: 3,
        totalUnits: 54,
        totalProducts: 1
    },
    warehouses: [
        {
            name: "Dubai Main Warehouse - Ajman (Main)",
            location: "Jebel Ali, Dubai",
            products: 1,
            current: 54,
            capacity: 25000,
            utilization: 0.2
        },
        {
            name: "Abu Dhabi Warehouse",
            location: "Mussafah, Abu Dhabi",
            products: 0,
            current: 0,
            capacity: 25000,
            utilization: 0.0
        },
        {
            name: "Sharjah Distribution Center",
            location: "Industrial Area, Sharjah",
            products: 0,
            current: 0,
            capacity: 25000,
            utilization: 0.0
        }
    ]
};

export const stockHistoryData = {
    history: [] // "No records found"
};
