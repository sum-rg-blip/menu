import { Routes, Route }  from "react-router-dom"
import Home from "./pages/Home"
import Personal from "./pages/Personal"
function App(){
  return  <Routes>
    <Route path="/Home" element= {<Home/>}/>
    <Route path="/Personal" element= {<Personal/>}/>
  </Routes>
}export default App