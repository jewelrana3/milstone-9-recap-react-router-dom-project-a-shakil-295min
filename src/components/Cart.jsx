import React from 'react';
import { getCart } from '../utilis/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const productCart = useLoaderData();
    console.log(productCart)
    const cart = getCart();
    console.log(cart)
    return (
        <div>
            
        </div>
    );
};

export default Cart;