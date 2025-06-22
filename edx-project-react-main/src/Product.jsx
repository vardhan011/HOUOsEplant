import React from 'react';

const Product = ({ product, addToCart, removeFromCart }) => {
    return (
        <div className="flex m-4 p-4 border rounded-xl bg-white flex-col">
            <div className='ml-4 mr-2'>
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-[10%]" />
                <h2 className="text-xl font-medium ml-2">{product.name}</h2>
                <p className="text-lg ml-2">{product.price}</p>
                <div className='flex flex-row'>
                    {!product.cart ? (
                        <button 
                            className="bg-blue-600 px-4 py-2 rounded-md text-white border-blue-700 border-2 font-medium" 
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                    ) : (
                        <button 
                            className="ml-2 bg-red-600 px-4 py-2 rounded-md text-white border-red-700 border-2 font-medium" 
                            onClick={removeFromCart}
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>
            <div className="ml-4">
                <p className="text-lg font-bold mt-2">Description</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
};

export default Product;