import React from "react"
import classes from "./Modal.module.css"

const Backdrop = (props) => <div className={classes.Backdrop} />

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div></div>
    </div>
  )
}
function Modal() {
  return <div>Modal</div>
}

export default Modal
