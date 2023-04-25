import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { createContext, useState } from "react"


export const ProductContext = createContext([])
export const CartArryContext = createContext([])
const App = () => {

  const {cartArry,products} = useLoaderData()
  const [cart,setCart] = useState(cartArry)

  return (
    <ProductContext.Provider value={products }>
      <CartArryContext.Provider value={[cart,setCart]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </CartArryContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
