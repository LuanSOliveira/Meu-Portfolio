import Cabecalho from "../../components/Cabecalho/Cabecalho"
import SobreContainer from "../../components/SobreContainer/SobreContainer"
import { ContainerPage } from "../PagesStyles"

const Sobre = () => {
    return(
        <ContainerPage>
            <Cabecalho titulo="SOBRE MIM" botao={true}/>
            <SobreContainer/>
        </ContainerPage>
    )
}

export default Sobre