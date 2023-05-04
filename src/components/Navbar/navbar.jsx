import styles from './Navbar.module.scss'
import 'animate.css'
import { useState } from 'react';

const Navbar = ({funcao, referencias}) => {
    const [mouseHome, setMouseHome] = useState(false)
    const [mouseSobre, setMouseSobre] = useState(false)
    const [mouseHabilidades, setMouseHabilidades] = useState(false)
    const [mouseProjetos, setMouseProjetos] = useState(false)

    function EfeitoBotao(get){
        if(get){return 'animate__animated animate__jello'}
        else{return ''}
    }

    function MouseOn(set){
        set(true)
    }

    function MouseOut(set){
        setTimeout(() => set(false), 200)
    }

    return(
        <nav className={styles.Navbar}>
            <div className={styles.BoxNavbar} data-aos="fade-right">
                <div className={styles.BoxImagem}>
                    <img src='https://github.com/LuanSOliveira.png'
                        alt='Imagem do Perfil - Linkedin'
                    />
                    <p>Meu Portfólio</p>
                </div>
                <div className={styles.BoxBotoes}>
                    <button 
                        onClick={() => funcao(referencias[0])} 
                        className={EfeitoBotao(mouseHome)} 
                        onMouseOver={() => MouseOn(setMouseHome)}
                        onMouseOut={() => MouseOut(setMouseHome)}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => funcao(referencias[1])} 
                        className={EfeitoBotao(mouseSobre)}
                        onMouseOver={() => MouseOn(setMouseSobre)}
                        onMouseOut={() => MouseOut(setMouseSobre)}
                    >
                        Sobre
                    </button>
                    <button 
                        onClick={() => funcao(referencias[2])} 
                        className={EfeitoBotao(mouseHabilidades)}
                        onMouseOver={() => MouseOn(setMouseHabilidades)}
                        onMouseOut={() => MouseOut(setMouseHabilidades)}
                    >
                        Habilidades
                    </button>
                    <button 
                        onClick={() => funcao(referencias[3])} 
                        className={EfeitoBotao(mouseProjetos)}
                        onMouseOver={() => MouseOn(setMouseProjetos)}
                        onMouseOut={() => MouseOut(setMouseProjetos)}
                    >
                        Projetos
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar