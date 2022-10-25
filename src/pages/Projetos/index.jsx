import Projetos from "../../components/Projetos"
import Navbar from "../../components/Navbar"
import Rodape from "../../components/Rodape"

function MeusProjetos() {
    return(
        <div>
            <Navbar pagina='projetos'/>
            <Projetos pagina="projetos"/>
            <Rodape/>
        </div>
    )
}

export default MeusProjetos