import styles from './Sobre.module.scss'

const Sobre = () => {
    return(
        <div className={styles.Sobre}>
            <div className={styles.BoxAvatar} data-aos="zoom-in-down">
                <img src='/Avatar1.png' alt='Meu avatar 3D'/>
            </div>
            <div className={styles.Descricao} data-aos="zoom-in-up">
                <h1>Sobre mim</h1>
                <p>
                    Olá! Me chamo Luan e sou desenvolvedor. Atualmente tenho como foco principal atuar na área de desenvolvimento
                    Front-end, mas sempre buscando me inteirar no lado Back-end para ter o conhecimento das melhores soluções de
                    problemas e expandir minha área de atuação.
                </p>
            </div>
        </div>
    )
}

export default Sobre