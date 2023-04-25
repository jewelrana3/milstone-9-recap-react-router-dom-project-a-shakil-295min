import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDB } from '../utilis/fakeDB';
import { ProductContext } from '../App';

const Shop = () => {
    const products = useContext(ProductContext)

    const handleAddToCart = (id)=>{
       
        addToDB(id)
    }
    return (
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
           {
            products.map(product=>(
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