import classes from "./Cart.module.css"

function Cart() {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
  return (
    <div>
      <div className={classes.total}>
        <span>Total Amaunt</span>
        <span> 35.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}
export default Cart
