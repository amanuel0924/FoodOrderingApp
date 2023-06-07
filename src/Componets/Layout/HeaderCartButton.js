import React from "react"
import { useContext } from "react"
import clasess from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/CartContext"

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numOfItem = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)
  return (
    <button className={clasess.button} onClick={props.cartState}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={clasess.badge}>{numOfItem}</span>
    </button>
  )
}
export default HeaderCartButton
