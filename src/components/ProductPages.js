import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation';

function ProductPages({ setCarts }) {
    const [products, setProducts] = useState([]);

    const productList = [
        {id: 1, name: "POCO X3 GT", price: 10, description: "Poco X Series"},
        {id: 2, name: "OPPO A12", price: 20, description: "Oppo A Series"},
        {id: 3, name: "OPPO Find X7 Pro", price: 30, description: "Oppo Find Series"},
        {id: 4, name: "Oppo Reno 10 Pro 5G", price: 40, description: "Oppo Reno Series"},
        {id: 5, name: "POCO F5", price: 50, description: "Poco F Series"},
        {id: 6, name: "POCO F3", price: 60, description: "Poco F Series"},
        {id: 7, name: "POCO F3 Pro", price: 70, description: "Poco F Series"},
        {id: 8, name: "Vivo X100 Pro", price: 80, description: "Vivo X Series"},
        {id: 9, name: "Vivo X100", price: 90, description: "Vivo X Series"},
        {id: 10, name: "POCO X3 Pro", price: 100, description: "Poco X Series"}
    ];

    // Empty dependency array means renders it only once
    useEffect(() => setProducts(productList), []);
    
    const handleAddToCart = (id, name, price) => {
        setCarts(c => [...c, { id, name, price }]);
    };

    return (
        <div>
            <h2>Product Pages</h2>
            {products.map(product => (
                <ProductInformation 
                    key={product.id} 
                    id={product.id}
                    name={product.name} 
                    price={product.price} 
                    description={product.description}
                    onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
}

export default ProductPages;