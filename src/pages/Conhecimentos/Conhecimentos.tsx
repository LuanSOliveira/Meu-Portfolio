import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ConhecimentosContainer from "../../components/ConhecimentosContainer/ConhecimentosContainer"
import { ContainerPage } from "../PagesStyles"

const Conhecimentos = () => {
    return(
        <ContainerPage>
            <Cabecalho titulo="CONHECIMENTOS" botao={true}/>
            <ConhecimentosContainer/>
        </ContainerPage>
    )
}

export default Conhecimentos