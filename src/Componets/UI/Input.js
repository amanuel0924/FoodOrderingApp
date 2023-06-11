import { forwardRef } from "react"
import clasess from "./Input.module.css"
const Input = forwardRef((props, ref) => {
  return (
    <div className={clasess.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})
export default Input
