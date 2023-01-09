import styles from './Habilidades.module.scss'
import Tecnologias from './Tecnologias/tecnologias'

const Habilidades = () => {
    return(
        <div className={styles.Habilidades}>
            <div className={styles.BoxAvatar} data-aos="zoom-in-right">
                <img src='/Avatar3.png' alt='Meu Avatar 3D' className={"animate__animated animate__pulse animate__slower animate__infinite"}/>
            </div>
            <div className={styles.BoxDeHabilidades} data-aos="zoom-out-rigth">
                <h1>Minhas Habilidades</h1>
                <div className={styles.ListaHabilidades}>
                    <Tecnologias nome='HTML 5' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' delay="100"/>
                    <Tecnologias nome='CSS 3' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' delay="300"/>
                    <Tecnologias nome='Javascript' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay="500"/>
                    <Tecnologias nome='ReactJS' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay="700"/>
                    <Tecnologias nome='Redux' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' delay="900"/>
                    <Tecnologias nome='SASS' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' delay="1100"/>
                    <Tecnologias nome='Typescript' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' delay="1300"/>
                    <Tecnologias nome='Firebase' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' delay="1500"/>
                    <Tecnologias nome='NodeJS' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay="1700"/>
                    <Tecnologias nome='Python' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' delay="1900"/>
                    <Tecnologias nome='VSCode' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay="2100"/>
                    <Tecnologias nome='PyCharm' imagem='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' delay="2300"/>
                </div>
            </div>
        </div>
    )
}

export default Habilidades