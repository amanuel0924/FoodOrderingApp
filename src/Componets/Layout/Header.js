import React, { Fragment } from "react"
import IMG from "./../../Assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={IMG} alt="mealimg" />
      </div>
    </Fragment>
  )
}
export default Header
