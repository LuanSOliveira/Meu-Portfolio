import styles from './Tecnologias.module.scss'

const Tecnologias = ({nome, imagem, delay}) => {
    let larguraTela = window.innerWidth
    return (
        <div className={styles.Tecnologias} data-aos={(larguraTela >= 1280) ? "flip-left" : ""} data-aos-delay={delay}>
            <p>{nome}</p>
            <div className={styles.BoxImagem}>
                <img src={imagem} alt={`ícone ${nome}`}/>
            </div>
        </div>
    )
}

export default Tecnologias