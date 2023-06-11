import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../Store/CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"

function Cart(props) {
  const ctxstate = useContext(CartContext)
  const totalAmount = `$${ctxstate.totalAmount.toFixed(2)}`
  const cartItemRemove = (id) => {
    ctxstate.removeItem(id)
  }
  const cartItemAdd = (item) => {
    ctxstate.addItem({ ...item, amount: 1 })
  }
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {ctxstate.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemove.bind(null, item.id)}
            onAdd={cartItemAdd.bind(null, item)}
          />
        )
      })}
    </ul>
  )
  return (
    <Modal cartState={props.cartState}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amaunt</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.cartState}>
          Close
        </button>
        <button className={classes.button} onClick={props.cartState}>
          Order
        </button>
      </div>
    </Modal>
  )
}
export default Cart
