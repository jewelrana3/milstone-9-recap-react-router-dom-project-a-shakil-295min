import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { createContext, useState } from "react"
import MyModal from "./components/Modal"
import Modal from "./components/Modal"


export const ProductContext = createContext([])
export const CartArryContext = createContext([])
const App = () => {
  let [isOpen, setIsOpen] = useState(false)

  const {cartArry,products} = useLoaderData()
  const [cart,setCart] = useState(cartArry)

  const cartAlert = sessionStorage.getItem('alert')
  if(cart.length > 0 && cartAlert !== 'true'){

   setIsOpen(true)
    sessionStorage.setItem('alert',true)
  }

  return (
    <ProductContext.Provider value={products }>
      <CartArryContext.Provider value={[cart,setCart]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
      </CartArryContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
