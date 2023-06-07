import classes from "./Cart.module.css"
import Modal from "../UI/Modal"

function Cart(props) {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
  return (
    <Modal cartState={props.cartState}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amaunt</span>
        <span> 35.5</span>
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
