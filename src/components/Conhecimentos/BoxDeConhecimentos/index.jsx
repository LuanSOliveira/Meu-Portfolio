import styles from "./BoxDeConhecimentos.module.scss"
import OpcaoConhecimento from "./OpcaoConhecimento";

const BoxDeConhecimentos = (props) => {
    return(
        <div className={styles.boxConhecimentos}>
            <div className={styles.boxTitulo}>
                <h3>{props.titulo}</h3>
            </div>
            <div className={styles.boxItens}>
                {props.lista.map((item) => <OpcaoConhecimento key={item.id} nome={item.nome} imagem={item.img}/>)}
            </div>
        </div>
    )
}

export default BoxDeConhecimentos;