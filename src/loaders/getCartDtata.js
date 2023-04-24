import { getCart } from "../utilis/fakeDB"

    export const addDataCart = async()=>{
        const productData = await fetch('products.json')
        const products = await productData.json()

        const saveCart = getCart()
        let cartArry = []

        for(const id in saveCart){
            const foundProduct = products.find(product => product.id === id)
            if(foundProduct){
                foundProduct.quantity = saveCart[id]
                cartArry.push(foundProduct)
            }
        }
        return {cartArry,products}
    }