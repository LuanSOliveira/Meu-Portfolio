import { Botao } from "./NavBtnStyles"
import {Link} from 'react-router-dom'

interface PropsNavBtn {
    descricao: string;
    rota: string;
    margem: string;
}

const NavBtn = ({descricao, rota, margem}:PropsNavBtn) => {
    return(
        <Link to={rota}>
            <Botao margem={margem}>{descricao}</Botao>
        </Link>
    )
}

export default NavBtn