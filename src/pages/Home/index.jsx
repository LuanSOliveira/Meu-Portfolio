import Apresentacao from "../../components/Apresentacao"
import Conhecimentos from "../../components/Conhecimentos"
import Projetos from "../../components/Projetos"
import Navbar from "../../components/Navbar"
import Rodape from "../../components/Rodape"

function Home() {
    return(
        <div>
            <Navbar pagina='home'/>
            <Apresentacao/>
            <Conhecimentos/>
            <Projetos pagina="home"/>
            <Rodape/>
        </div>
    )
}

export default Home