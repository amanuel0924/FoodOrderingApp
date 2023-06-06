import clasess from "./MealItemForm.module.css"
import Input from "../../UI/Input"

function MealIremForm(props) {
  return (
    <form className={clasess.form}>
      <Input
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
    </form>
  )
}
export default MealIremForm
