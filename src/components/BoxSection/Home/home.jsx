import styles from './Home.module.scss'
import 'animate.css'

import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaRegHandPointDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
    return(
        <div className={styles.Home}>
            <div className={styles.BoxIntroducao}>
                <h1 data-aos="fade-right">Bem Vindo</h1>
                <h2 data-aos="fade-right" data-aos-delay="150">Luan Santos</h2>
                <h3 data-aos="fade-right" data-aos-delay="250">Desenvolvedor Front-End</h3>
                <div className={styles.Contatos} data-aos="fade-down">
                    <div className={styles.BoxParagrafo}>
                        <p>Meus contatos</p>
                        <FaRegHandPointDown className={`${styles.IconeContatos} animate__animated animate__bounce animate__slower animate__infinite`}/>
                    </div>
                    <div className={styles.BoxParagrafo}>
                        <HiOutlineMail className={styles.IconeContato}/>
                        <p>l.u.a.n@hotmail.com</p>
                    </div>
                    <div className={styles.BoxParagrafo}>
                        <AiOutlineWhatsApp className={styles.IconeContato}/>
                        <p>{"(85) 98547-9902"}</p>

                    </div>
                    <div className={styles.BoxParagrafo}>
                        <a href='https://www.linkedin.com/in/luan-santos-oliveira-4b2a011a3/' target='_blank'>
                            <BsLinkedin className={styles.IconeContato}/>
                        </a>
                        <a href='https://github.com/LuanSOliveira' target='_blank'>
                            <BsGithub className={styles.IconeContato}/>
                        </a>
                        <a href='https://www.instagram.com/l.u.a.n_santos/' target='_blank'>
                            <BsInstagram className={styles.IconeContato}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.BoxAvatar} data-aos="fade-left">
                <img src='/Avatar2.png' alt='Meu avatar 3D' className={"animate__animated animate__pulse animate__slower animate__infinite"}/>
            </div>
        </div>
    )
}

export default Home