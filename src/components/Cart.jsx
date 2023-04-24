import React from 'react';

import { useLoaderData } from "react-router-dom";
import CartItem from './Cards/CartItem';


const Cart = () => {
    const { cartArry } = useLoaderData()
    let total = 0;
    if(cartArry.length > 0){
        for(const product of cartArry){
            total = total + product.price * product.quantity;
        }
    }
    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
            <div className="flex flex-col space-x-2 sm:p-10">
                <h2 className="text-3xl font-semibold">
                   {cartArry.length ? 'Review Items': 'cart is EMPTY'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                   {cartArry.map(product =>(
                    <CartItem key={product.id} product={product}></CartItem>
                   ))}
                </ul>
                <div className='space-y-2 text-right'>
                    <p>Total Amount :<span className='font-semibold'>{total}</span></p>
                </div>
                <div className='flex space-x-4 justify-end'>
                    <button className='btn-outlined'>clear cart</button>
                    <button className='btn-primary'>pls order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;