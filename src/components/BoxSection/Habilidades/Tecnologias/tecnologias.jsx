import styles from './Tecnologias.module.scss'

const Tecnologias = ({nome, imagem, delay}) => {
    let larguraTela = window.innerWidth
    let alturaTela = window.innerHeight
    return (
        <div 
            className={styles.Tecnologias} 
            data-aos={(larguraTela >= 1280 && alturaTela >= 650) ? "flip-left" : ""} 
            data-aos-delay={(alturaTela < 650) ? 0 : delay}
        >
            <p>{nome}</p>
            <div className={styles.BoxImagem}>
                <img src={imagem} alt={`ícone ${nome}`}/>
            </div>
        </div>
    )
}

export default Tecnologias