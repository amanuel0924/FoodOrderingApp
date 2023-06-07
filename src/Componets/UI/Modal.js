import React from "react"
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.cartState} />
)

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop cartState={props.cartState} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  )
}

export default Modal
