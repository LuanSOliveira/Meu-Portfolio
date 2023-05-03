import NavBtn from "../NavBtn/NavBtn"
import { BoxNavegacao, Container } from "./HomeContainerStyles"

const HomeContainer = () => {
    return(
        <Container>
            <img src="../../../public/Avatar2.png" alt="Avatar" data-aos="fade-left"/>
            <div data-aos="fade-left">
                <h2>Luan Santos</h2>
                <p>Desenvolvedor Web</p>
                <BoxNavegacao>
                    <h3>Qual informação você procura?</h3>
                    <div>
                        <NavBtn descricao="Sobre mim" rota="/sobre" margem="10"/>
                        <NavBtn descricao="Conhecimentos" rota="/conhecimentos" margem="10"/>
                        <NavBtn descricao="Projetos" rota="/projetos" margem="10"/>
                        <NavBtn descricao="Contatos" rota="/contatos" margem="10"/>
                    </div>
                </BoxNavegacao>
            </div>
        </Container>
    )
}

export default HomeContainer