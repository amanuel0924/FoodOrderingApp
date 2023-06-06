import clasess from "./MealItem.module.css"
import MealIremForm from "./MealItemForm"
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={clasess.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clasess.discription}>{props.description}</div>
        <div className={clasess.price}>{price}</div>
      </div>
      <div>
        <MealIremForm />
      </div>
    </li>
  )
}
export default MealItem
