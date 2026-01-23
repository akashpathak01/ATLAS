import React from 'react';
import { ProductManager } from '../../components/products/ProductManager';

export function AdminProductsPage() {
    return <ProductManager initialProducts={[]} />; // Start empty
}
