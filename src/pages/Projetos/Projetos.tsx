import { useContext } from "react"
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ProjetosContainer from "../../components/ProjetosContainer/ProjetosContainer"
import { ContainerPage } from "../PagesStyles"
import { AppContext } from "../../context/context"

const Projetos = () => {
    const {projetoSelecionado} = useContext(AppContext)

    function ApresentaBotao():boolean{
        if(projetoSelecionado.nome !== ''){
            return false
        }
        else{return true}
    }

    return(
        <ContainerPage>
            <Cabecalho titulo="PROJETOS" botao={ApresentaBotao()}/>
            <ProjetosContainer/>
        </ContainerPage>
    )
}

export default Projetos