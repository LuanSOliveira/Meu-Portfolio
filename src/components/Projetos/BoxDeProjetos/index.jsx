import OpcaoConhecimento from "../../Conhecimentos/BoxDeConhecimentos/OpcaoConhecimento";
import Botao from "../../Botao"
import styles from "./BoxDeProjetos.module.scss"
import stylesBotao from "../../Botao/Botao.module.scss"
import { Link } from "react-router-dom";

const BoxDeProjetos = ({nome, tumb, descricao, ide, linguagem, estado, projeto}) => {
    return(
        <div className={styles.boxProjetos}>
            <div className={styles.boxTitulo}>                
                <h3>{nome}</h3>
            </div>
            <div className={styles.boxItensProjeto}>
                <div className={styles.tumbProjeto}>                    
                    <img src={tumb} alt="imagem do projeto"/>
                </div>
                <p className={styles.descricaoProjeto}>{descricao}</p>
                <h3>IDE Utilizada:</h3>
                <div className={styles.ideProjeto}>
                    {ide.map((item) => <OpcaoConhecimento key={item.id} nome={item.nome} imagem={item.img}/>)}
                </div>
                <h3>Tecnologias Utilizadas:</h3>
                <div className={styles.linguagensProjeto}>
                    {linguagem.map((item) => <OpcaoConhecimento key={item.id} nome={item.nome} imagem={item.img}/>)}
                </div>
                <div className={styles.btnTestar}>
                    {(estado !== "producao") 
                        ? <a href={projeto} target="_blank" rel="noopener noreferrer"><Botao nomeClasse={stylesBotao.botao} nome="Testar Projeto"/></a> 
                        : <Botao nomeClasse={stylesBotao.botaoInativo} nome="Testar Projeto" ativacao={true}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default BoxDeProjetos;