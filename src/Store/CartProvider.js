import CartContext from "./CartContext"
import { useReducer } from "react"

import React from "react"
const defoultCartState = {
  items: [],
  totalAmount: 0,
}
function reduce(state, action) {
  if (action.type === "ADD") {
    const total = state.totalAmount + action.item.price * action.item.amount

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingItem = state.items[existingItemIndex]

    let updatedItems
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return { items: updatedItems, totalAmount: total }
  }
  if (action.type === "Remove") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    const existingItem = state.items[existingItemIndex]
    const total = state.totalAmount - existingItem.price
    let updatedItems
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    }

    return { items: updatedItems, totalAmount: total }
  }
  return defoultCartState
}

const CartProvider = (props) => {
  const [cartReducerState, dispachCartReducer] = useReducer(
    reduce,
    defoultCartState
  )
  const addItemHandler = (item) => {
    dispachCartReducer({ type: "ADD", item: item })
  }
  const removeItemHandler = (id) => {
    dispachCartReducer({ type: "Remove", id: id })
  }
  const cartContext = {
    items: cartReducerState.items,
    totalAmount: cartReducerState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
