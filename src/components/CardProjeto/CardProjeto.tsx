import { useContext } from "react"
import { BoxProjeto } from "./CardProjetoStyles"
import { AppContext } from "../../context/context"
import { listaProjetos } from "../../listas/ProjetosList"

interface PropsCardProjeto {
    id: number,
    nome: string,
    imagem: string
}

const CardProjeto = ({nome, id, imagem}:PropsCardProjeto) => {

    const {setProjetoSelecionado} = useContext(AppContext)

    function SelecionaProjeto():void{
        setProjetoSelecionado(listaProjetos[id])

    }

    return(
        <BoxProjeto>
            <img src={imagem} alt="Imagem do Projeto" onClick={SelecionaProjeto}/>
            <h3>{nome}</h3>
        </BoxProjeto>
    )
}

export default CardProjeto