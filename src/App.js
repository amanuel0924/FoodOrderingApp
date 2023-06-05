import { Fragment } from "react"
import Header from "./Componets/Layout/Header"
import Meals from "./Componets/Meals/Meals"

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
