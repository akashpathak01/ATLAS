import React, { useState } from 'react';
import { ProductsList } from './ProductsList';
import { NewProductForm } from './NewProductForm';

export function ProductManager({ initialProducts = [] }) {
    const [view, setView] = useState('list'); // 'list' or 'form'
    const [products, setProducts] = useState(initialProducts);

    const handleAddProduct = (newProduct) => {
        // In a real app, this would be an API call
        // For now, we just add it to local state and switch back to list
        if (newProduct) {
            setProducts([newProduct, ...products]);
        }
        setView('list');
    };

    return (
        <div className="animate-in fade-in duration-300">
            {view === 'list' ? (
                <ProductsList
                    products={products}
                    onAddProduct={() => setView('form')}
                />
            ) : (
                <NewProductForm
                    onBack={() => setView('list')}
                    onSubmit={() => handleAddProduct(null)} // Placeholder submit
                />
            )}
        </div>
    );
}
