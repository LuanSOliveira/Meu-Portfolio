import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import MeusProjetos from "./pages/Projetos"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/meus-projetos" element={<MeusProjetos/>}/>
      </Routes>
    </Router>

  )
}

export default App
