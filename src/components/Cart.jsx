import React, { useContext } from 'react';

import { Link, useLoaderData } from "react-router-dom";
import { allDataRemove, removeItemDB } from '../utilis/fakeDB';
import CartItem from './Cards/CartItem';
import { CartArryContext } from '../App';
import { toast } from 'react-hot-toast';



const cart = () => {
   const [cart,setCart] = useContext(CartArryContext)
    let total = 0;
    if(cart.length > 0){
        for(const product of cart){
            total = total + product.price * product.quantity;
        }
    }

    // remove item
    const removeItem = id =>{
        const remaing = cart.filter(pd => pd.id !== id)
        setCart(remaing)
        removeItemDB(id)
    }

   

    // order side btn
    const allClearData=()=>{
        if(cart.length>0){
            setCart([])
            // deleteShopingCart()
            return toast.success('done')
        }
        return toast.error('Empty ')
    }


    // all items remove
    const clearData=()=>{
        if(cart.length>0){
            setCart([])
            // deleteShopingCart()
            return toast.success('All Items Remove')
        }
        return toast.error('Empty ')
    }
    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
            <div className="flex flex-col space-x-2 sm:p-10">
                <h2 className="text-3xl font-semibold">
                   {cart.length ? 'Review Items': 'cart is EMPTY'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                   {cart.map(product =>(
                    <CartItem key={product.id} product={product} removeItem={removeItem}></CartItem>
                   ))}
                </ul>
                <div className='space-y-2 text-right'>
                    <p>Total Amount :<span className='font-semibold'>{total}</span></p>
                </div>
                <div className='flex space-x-4 justify-end'>
                    {cart.length > 0 ? 
                    (
                    <button onClick={clearData} className='btn-outlined'>clear cart</button>
                    )
                    :
                    (<Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link>)
                    }
                    <button onClick={allClearData} className='btn-primary'>pls order</button>
                </div>
            </div>
        </div>
    );
};

export default cart;