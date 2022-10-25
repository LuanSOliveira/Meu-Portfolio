import styles from "./Rodape.module.scss"
import {BsWhatsapp, BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <div>
                <h3>Contatos:</h3>
                <p><BsWhatsapp/> (85) 98547-9902</p>
                <div className={styles.linksRedes}>
                    <a href="https://www.linkedin.com/in/luan-santos-oliveira-4b2a011a3/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                    <a href="https://github.com/LuanSOliveira" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
                    <a href="https://www.instagram.com/l.u.a.n_santos/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                </div>
            </div>
            <div className={styles.modulos}>
                <h3>Módulos npm utilizados:</h3>
                <ul>
                    <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
                    <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a></li>
                    <li><a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">React Icons</a></li>
                    <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">React Router Dom</a></li>
                    <li><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a></li>
                    <li><a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">SwiperJS</a></li>
                    <li><a href="https://www.npmjs.com/package/uuid" target="_blank" rel="noopener noreferrer">UUID</a></li>
                </ul>
            </div>
            <div className={styles.observacoes}>
                <p>*Este portfólio foi criado em React</p>
                <p>Avatar 3D gerado em: <a href="https://readyplayer.me/pt-BR" target="_blank" rel="noopener noreferrer">Ready Player Me</a></p>
            </div>
        </footer>
    )
}

export default Rodape;