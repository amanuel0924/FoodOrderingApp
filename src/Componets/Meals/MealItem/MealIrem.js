import { useContext } from "react"
import clasess from "./MealItem.module.css"
import MealIremForm from "./MealItemForm"
import CartContext from "../../../Store/CartContext"
const MealItem = (props) => {
  const ctxState = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`
  const onAddToCartHandler = (amount) => {
    ctxState.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }
  return (
    <li className={clasess.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clasess.discription}>{props.description}</div>
        <div className={clasess.price}>{price}</div>
      </div>
      <div>
        <MealIremForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  )
}
export default MealItem
