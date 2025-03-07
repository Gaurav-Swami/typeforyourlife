
import {Routes,Route} from "react-router-dom"
import './App.css'
//import Tests2 from "./pages/Tests2"
import Test from "./pages/Test"


function App() {

  return (
    <div className="mx-32">
      <Routes>
        <Route path="/" element = {<Test/>}/>
      </Routes>
      
    </div>
  )
}

export default App
