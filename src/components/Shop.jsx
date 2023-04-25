import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDB } from '../utilis/fakeDB';
import { CartArryContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(ProductContext)
    const [cart,setCart] = useContext(CartArryContext)

    const handleAddToCart = (product)=>{
        let newCart = []
        const exits = cart.find(pd=> pd.id === product.id)
        if(!exits){
            product.quantity = 1;
            newCart = [...cart,product]
        }else{
            const rest = cart.filter(pd=> pd.id !== product.id)
            exits.quantity = exits.quantity = 1;
            newCart=[...rest,exits]
        }
        toast.success('product added')
       setCart(newCart)
        addToDB(product.id)
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