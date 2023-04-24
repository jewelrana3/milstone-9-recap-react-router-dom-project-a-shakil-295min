import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDB } from '../utilis/fakeDB';

const Shop = () => {
    const productData = useLoaderData();

    const handleAddToCart = (id)=>{
       
        addToDB(id)
    }
    return (
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
           {
            productData.map(product=>(
            <ProductCard 
            key={product.id}  
            product={product}
            handleAddToCart={handleAddToCart}
            />
          ) )}
        </div>
    );
};

export default Shop;