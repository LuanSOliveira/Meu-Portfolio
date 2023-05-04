import Cabecalho from "../../components/Cabecalho/Cabecalho"
import HomeContainer from "../../components/HomeContainer/HomeContainer"
import { ContainerPage } from "../PagesStyles"

const Home = () => {
    return(
        <ContainerPage>
            <Cabecalho titulo="MEU PORTFÓLIO" botao={false}/>
            <HomeContainer/>
        </ContainerPage>
    )
}

export default Home