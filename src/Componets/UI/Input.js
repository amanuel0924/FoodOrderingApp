import clasess from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={clasess.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input} />
    </div>
  )
}
export default Input
