import React from "react"
import { useContext, useEffect, useState } from "react"
import clasess from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/CartContext"

const HeaderCartButton = (props) => {
  const [bump, setBump] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx
  const numOfItem = items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)
  const btnclass = `${clasess.button} ${bump ? clasess.bump : ""}`
  useEffect(() => {
    if (items.length === 0) return
    setBump(true)
    const timer = setTimeout(() => {
      setBump(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <button className={btnclass} onClick={props.cartState}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={clasess.badge}>{numOfItem}</span>
    </button>
  )
}
export default HeaderCartButton
