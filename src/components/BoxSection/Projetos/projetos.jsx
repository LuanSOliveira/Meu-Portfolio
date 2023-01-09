import Projeto from './Projeto/projeto'
import styles from './Projetos.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y, EffectFlip } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

import { useContext } from 'react';
import { AppContext } from '../../../context/context';

const Projetos = () => {
    const alturaTela = window.innerHeight
    const larguraTela = window.innerWidth
    const {listaDeProjetos} = useContext(AppContext)
    return(
        <div className={styles.Projetos}>
            <div className={styles.BoxProjetos} data-aos="zoom-in">
                <h1>Meus Projetos</h1>
                <div className={styles.ListaProjetos}>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, EffectFlip]}
                        spaceBetween={40} 
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        pagination={{clickable: true}}
                        effect='flip'
                    >
                        {listaDeProjetos.map((projeto) => <SwiperSlide key={projeto.id}><Projeto objeto={projeto}/></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
            {
                (larguraTela >= 800 && alturaTela < 667) &&
                <div className={styles.ImagemAvatar} data-aos="zoom-in">
                    <img src='/Avatar4.png' alt='Meu Avatar 3D' className={"animate__animated animate__pulse animate__slower animate__infinite"}/>
                </div>
            }
            {
                (alturaTela > 667) &&
                <div className={styles.ImagemAvatar} data-aos="zoom-in">
                    <img src='/Avatar4.png' alt='Meu Avatar 3D' className={"animate__animated animate__pulse animate__slower animate__infinite"}/>
                </div>
            }
        </div>
    )
}

export default Projetos