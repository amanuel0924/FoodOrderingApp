import { useState } from "react"
import Header from "./Componets/Layout/Header"
import Meals from "./Componets/Meals/Meals"
import Cart from "./Componets/Cart/Cart"
import CartProvider from "./Store/CartProvider"

function App() {
  const [cartState, setCartState] = useState(false)

  const handelCart = () => {
    setCartState(!cartState)
  }
  return (
    <CartProvider>
      {cartState && <Cart cartState={handelCart} />}

      <Header cartState={handelCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
