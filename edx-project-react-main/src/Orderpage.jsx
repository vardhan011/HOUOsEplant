import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Orderpage() {
    const location = useLocation();
    const { products } = location.state || { products: [] };

    const selectedProducts = products.filter(product => product.cart);
    const [cartProducts, setCartProducts] = useState(selectedProducts);

    const handleRemoveFromCart = (productName) => {
        const updatedProducts = cartProducts.map(product =>
            product.name === productName ? { ...product, cart: false } : product
        );
        setCartProducts(updatedProducts.filter(product => product.cart));
    };

    const totalPrice = cartProducts.reduce((total, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return total + price;
    }, 0);

    return (
        <div className='text-xl flex flex-col justify-center items-center bg-gray-200 min-h-screen'>
            <h1 className='mb-4'>Order Summary</h1>
            <ul className='w-full max-w-2xl'>
                {cartProducts.map(product => (
                    <li key={product.name} className='flex justify-between items-center border-b py-4'>
                        <div className='flex items-center'>
                            <img src={product.image} alt={product.name} className='w-16 h-16 object-cover rounded mr-4' />
                            <div>
                                <h2 className='font-bold'>{product.name}</h2>
                                <p>{product.price}</p>
                            </div>
                        </div>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={() => handleRemoveFromCart(product.name)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className='mt-4'>
                <h2 className='font-bold'>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">Checkout</button>
            <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Continue Shopping</Link>
        </div>
    );
}
