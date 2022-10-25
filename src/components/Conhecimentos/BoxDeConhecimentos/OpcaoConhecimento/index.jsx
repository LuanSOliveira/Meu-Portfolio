import styles from "./OpcaoConhecimento.module.scss"

const OpcaoConhecimento = (props) => {
    return(
        <div className={styles.opcaoConhecimento}>
            <img src={props.imagem} alt={`imagem ${props.nome}`}/>
            <p>{props.nome}</p>
        </div>
    )
}

export default OpcaoConhecimento;