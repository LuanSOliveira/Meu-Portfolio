import NavBtn from "../NavBtn/NavBtn";
import { Header } from "./CabecalhoStyles"

interface PropsCabecalho {
    titulo: string;
    botao: boolean;
}

const Cabecalho = ({titulo, botao}:PropsCabecalho) => {
    return(
        <Header data-aos="fade-down">
            <h1>{titulo}</h1>
            {
                (botao) && <NavBtn descricao="Voltar" rota="/" margem="0"/>
            }
        </Header>
    )
}

export default Cabecalho