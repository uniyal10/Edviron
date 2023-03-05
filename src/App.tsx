import React from "react"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import RightSection from "./components/RightSection"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Main />
        <RightSection />
      </div>
    </div>
  )
}

export default App
