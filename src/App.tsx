import React from "react"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
