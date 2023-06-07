import { Fragment, useState } from "react"
import Header from "./Componets/Layout/Header"
import Meals from "./Componets/Meals/Meals"
import Cart from "./Componets/Cart/Cart"

function App() {
  const [cartState, setCartState] = useState(false)

  const handelCart = () => {
    setCartState(!cartState)
  }
  return (
    <Fragment>
      {cartState && <Cart cartState={handelCart} />}

      <Header cartState={handelCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
