import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ContatosContainer from "../../components/ContatosContainer/ContatosContainer"
import { ContainerPage } from "../PagesStyles"

const Contatos = () => {
    return(
        <ContainerPage>
            <Cabecalho titulo="CONTATOS" botao={true}/>
            <ContatosContainer/>
        </ContainerPage>
    )
}

export default Contatos