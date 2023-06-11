import clasess from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react"

function MealIremForm(props) {
  const [formIsValid, setFormIsVlid] = useState(true)
  const amountRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    const enteredAmaunt = amountRef.current.value
    const enteredAmauntNumber = +enteredAmaunt

    if (
      enteredAmaunt.trim() === 0 &&
      enteredAmauntNumber < 1 &&
      enteredAmauntNumber > 5
    ) {
      setFormIsVlid(false)
      return
    }
    props.onAddToCart(enteredAmauntNumber)
  }
  return (
    <form className={clasess.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        lable="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>inter valid amount(1-5)</p>}
    </form>
  )
}
export default MealIremForm
