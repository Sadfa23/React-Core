import React, { useState } from "react"
import Header from "./components/Header"
import Cauresel from "./components/Cauresel"
import Counter from "./components/counter"
import SampleForm from "./components/Form"
import Auth from "./components/auth"
import TodoApp from "./components/TodoApp"
import DataFetchComponent from "./components/DataFetchComponent"

function App() {
  const name = "Brian"
  const [totalCount, setTotalCount] = useState(0)

  return (
    <>
      <Header/>
      <p>Your name is {name.toUpperCase()}</p>
      <button
      className="bg-red-600 rounded-2xl p-1.5 mt-2"
      type="button"
      >
        Click Here
      </button>
      <Counter/>
      <Counter/>
      <SampleForm/>
      <h3>The totalCount is {totalCount}</h3>
      <Auth/>
      <TodoApp/>
      <DataFetchComponent/>
    </>
  )
}

export default App
