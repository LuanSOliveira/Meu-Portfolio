import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css';
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre/Sobre"
import Conhecimentos from "./pages/Conhecimentos/Conhecimentos"
import Projetos from "./pages/Projetos/Projetos"
import Contatos from "./pages/Contatos/Contatos"
import { useEffect } from "react";

function App() {

  useEffect(() => {Aos.init({duration: 1500})},[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/conhecimentos" element={<Conhecimentos/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
      </Routes>
    </Router>
  )
}

export default App
