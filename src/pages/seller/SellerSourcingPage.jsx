
import React from 'react';
import { Home, Globe } from 'lucide-react';

export function SellerSourcingPage() {
    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <span className="mr-2">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="mr-2">Sellers</span>
                <span className="mx-2">&gt;</span>
                <span className="font-medium text-gray-900">Sourcing</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                        <Globe className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500">Sourcing</h1>
                        <p className="text-gray-500 text-sm mt-1">Global sourcing and supplier management</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-12 rounded-xl border border-gray-100 shadow-sm text-center">
                <p className="text-gray-500">Sourcing module is currently empty or under construction.</p>
            </div>
        </div>
    );
}
