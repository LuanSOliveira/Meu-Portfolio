import styles from "./Apresentacao.module.scss"

const Apresentacao = () => {
    return (
        <section className={styles.apresentacao}>
            <img src="https://raw.githubusercontent.com/LuanSOliveira/Meu-Portfolio/main/src/assets/img/perfil.png" alt="imagem de perfil"/>
            <div className={styles.textoApresentacao}>
                <h2>BEM VINDO!</h2>
                <p>Olá, me chamo Luan.</p>
                <p>
                    Criei este portfólio para apresentar boa parte do conhecimento que adquiri em alguns anos de estudos
                    em desenvolvimento.
                </p>
            </div>
        </section>
    )
}

export default Apresentacao;