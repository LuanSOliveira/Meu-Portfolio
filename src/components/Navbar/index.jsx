import { Link } from "react-router-dom";
import Botao from "../Botao";
import styles from "./Navbar.module.scss"
import stylesBotao from "../Botao/Botao.module.scss"

const Navbar = (props) => {
    return(
        <header className={styles.navbar}>
            <div className={styles.home}>
                <img src="https://raw.githubusercontent.com/LuanSOliveira/Meu-Portfolio/main/src/assets/img/home-icon.png" alt="icone home"/>
                <h1>Meu Portfólio</h1>
            </div>
            <nav>
                {(props.pagina === 'home') 
                    ? <Link to="/"><Botao nomeClasse={stylesBotao.botaoInativo} nome="Home" ativacao={true}/></Link>
                    : <Link to="/"><Botao nomeClasse={stylesBotao.botao} nome="Home"/></Link>
                }
                {(props.pagina === 'projetos') 
                    ? <Link to="/meus-projetos"><Botao nomeClasse={stylesBotao.botaoInativo} nome="Projetos" ativacao={true}/></Link>
                    : <Link to="/meus-projetos"><Botao nomeClasse={stylesBotao.botao} nome="Projetos"/></Link>
                }
                <a href="https://cursos.alura.com.br/user/l-u-a-n/fullCertificate/7137370004d265550d5845d055c28494" target="_blank" rel="noopener noreferrer">
                    <Botao nomeClasse={stylesBotao.botao} nome="Certificados"/>
                </a>
            </nav>
        </header>
    )
}

export default Navbar;