import styles from './Projeto.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y, EffectCube } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

const Projeto = ({objeto}) => {
    return(
        <div className={styles.Projeto}>
            <img src={objeto.print} alt='Print do Projeto'/>
            <Swiper
                modules={[Navigation, A11y, EffectCube]}
                spaceBetween={700}
                slidesPerView={1}
                navigation = {true}
                effect='cube'
            >
                <SwiperSlide>
                    <div className={styles.Informacoes}>
                        <div className={styles.Titulo}>
                            <div className={styles.LinhaTitulo}>
                                <h2>{objeto.nome}</h2>
                                <a href={objeto.link} target='_blank'><button>Testar</button></a>
                            </div>
                            <p>Status: {objeto.status}</p>
                        </div>
                        <p className={styles.Descricao}>{objeto.descricao}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.Informacoes}>
                        <h2>Tecnologias Utilizadas</h2>
                        <div className={styles.BoxTecnologias}>
                            {
                                objeto.tecnologias.map(
                                    (tecnologia) => 
                                        <div key={tecnologia.nome} className={styles.Tecnologia}>
                                            <p>{tecnologia.nome}</p>
                                            <img src={tecnologia.imagem} alt={`ícone ${tecnologia.nome}`}/>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projeto