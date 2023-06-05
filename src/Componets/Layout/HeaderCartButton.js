import React from "react"
import clasess from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

const HeaderCartButton = () => {
  return (
    <button className={clasess.button}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={clasess.badge}>2</span>
    </button>
  )
}
export default HeaderCartButton
