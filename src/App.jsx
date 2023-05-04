import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react"
import Container from "./components/Container/conteiner"
import Navbar from "./components/Navbar/navbar"
import AppProvider from "./context/context"

function App() {
  const homeSection = useRef()
  const sobreSection = useRef()
  const habilidadesSection = useRef()
  const projetosSection = useRef()

  const referencias = [homeSection, sobreSection, habilidadesSection, projetosSection]

  function IrParaReferencia(referencia){
    referencia.current.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(()=>{Aos.init({duration: 1500})},[])

  return (
    <AppProvider>
      <div className="App">
        <Navbar funcao={IrParaReferencia} referencias={referencias}/>
        <Container referencias={referencias}/>
      </div>
    </AppProvider>
  )
}

export default App
