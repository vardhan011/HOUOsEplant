import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import plant1 from './assets/plant1.png';
import plant2 from './assets/plant2.png';
import plant3 from './assets/plant3.png';
import plant4 from './assets/plant4.png';
import plant5 from './assets/plant5.png';
import plant6 from './assets/plant6.png';
import Product from './Product'; // Ensure Product component is imported

const initialProducts = [
    { name: 'plant1', image: plant1, price: '$5', cart: false },
    { name: 'plant2', image: plant2, price: '$10', cart: false },
    { name: 'plant3', image: plant3, price: '$15', cart: false },
    { name: 'plant4', image: plant4, price: '$10', cart: false },
    { name: 'plant5', image: plant5, price: '$15', cart: false },
    { name: 'plant6', image: plant6, price: '$10', cart: false },
];

export default function Productpage({ countinc, countdec }) {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleAddToCart = (productName) => {
        setProducts(products.map(product => 
            product.name === productName ? { ...product, cart: true } : product
        ));
        countinc();
    };

    const handleRemoveFromCart = (productName) => {
        setProducts(products.map(product => 
            product.name === productName ? { ...product, cart: false } : product
        ));
        countdec();
    };

    return (
        <div>
            <div className='flex justify-center mt-2 mb-2'>
                <Link to="/orders" state={{ products }}>
                    <button className='px-4 py-2 border-yellow-500 border-2 rounded-md bg-yellow-200'>Go to cart</button>
                </Link>
            </div>
            <div className="p-4 w-screen bg-gray-300 min-h-screen flex flex-wrap justify-center">
                {products.map((product, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                        <Product 
                            product={product} 
                            addToCart={() => handleAddToCart(product.name)} 
                            removeFromCart={() => handleRemoveFromCart(product.name)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}