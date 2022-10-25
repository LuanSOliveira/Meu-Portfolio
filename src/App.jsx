import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ProjectPokedex from "./pages/ProjetoPokedex"
import MeusProjetos from "./pages/Projetos"
import ProjectToDoList from "./pages/ProjetoToDoList"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/meus-projetos" element={<MeusProjetos/>}/>
        <Route path="/projeto-to-do-list" element={<ProjectToDoList/>}/>
        <Route path="/projeto-pokedex" element={<ProjectPokedex/>}/>
      </Routes>
    </Router>

  )
}

export default App
