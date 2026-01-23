
import React from 'react';
import { NewProductForm } from '../../components/products/NewProductForm';
import { useNavigate } from 'react-router-dom';

export function AdminAddProductPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/admin/products');
    };

    const handleSubmit = () => {
        // Logic to submit product would go here
        console.log("Product submitted");
        navigate('/admin/products');
    };

    return (
        <div className="p-6">
            <NewProductForm onBack={handleBack} onSubmit={handleSubmit} />
        </div>
    );
}
