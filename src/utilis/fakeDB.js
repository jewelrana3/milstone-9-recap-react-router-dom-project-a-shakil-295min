// add data from local storage
const addToDB = id => {
    let shopingCart = {}

    // get shoping cart from local storage
    const storedCart = localStorage.getItem('shoping-cart')
    if (storedCart) {
        shopingCart = JSON.parse(storedCart)
    }
    // quantity add
    const quantity = shopingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
    } else {
        shopingCart[id] = 1;
    }

    // set local storage
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
}


const getCart = id => {
    // get data from cart component
    let cartData = {}

    // get data from local storage
    const storedCart = localStorage.getItem('shoping-cart')
    if (storedCart) {
        cartData = JSON.parse(storedCart)
    }
    return cartData;
}

// remove item specific from local storage
const removeItemDB = id =>{
    // get shping cart
    const storedCart = localStorage.getItem('shoping-cart')
   if(storedCart){
    const shopingCart  = JSON.parse(storedCart)
    if(id in shopingCart){
        delete shopingCart[id]
        localStorage.setItem('shoping-cart',JSON.stringify(shopingCart))
    }
   }
}

// all data clear local storage
const allDataRemove = ()=>{
     localStorage.removeItem('shoping-cart')
}
export { addToDB, getCart,removeItemDB,allDataRemove}