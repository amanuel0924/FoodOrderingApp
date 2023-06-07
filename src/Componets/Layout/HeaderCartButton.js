import React from "react"
import clasess from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

const HeaderCartButton = (props) => {
  return (
    <button className={clasess.button} onClick={props.cartState}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={clasess.badge}>2</span>
    </button>
  )
}
export default HeaderCartButton
