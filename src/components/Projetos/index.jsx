import styles from "./Projetos.module.scss"
import { listaProjetos } from "../../listas/listas.js"
import BoxDeProjetos from "./BoxDeProjetos"
import Carousel from "../Carousel"
import { SwiperSlide } from "swiper/react"

const Projetos = (props) => {

    const tamanhoTela = window.innerWidth

    return(
        <section className={styles.projetos}>
            <h2>Meus Projetos</h2>
            {(props.pagina === 'home') 
                ? <Carousel efeito={(tamanhoTela <= 850) ? "cube" : "cards"}>
                    <div className={styles.listaDeProjetos}>
                        {listaProjetos.map((projeto) => 
                            <SwiperSlide key={projeto.id}>
                                <BoxDeProjetos 
                                    key={projeto.id} 
                                    nome={projeto.nome}
                                    tumb={projeto.tumb}
                                    descricao={projeto.descricao}
                                    ide={projeto.ide}
                                    linguagem={projeto.linguagem}
                                    estado={projeto.estado}
                                    projeto={projeto.projeto}
                                />
                            </SwiperSlide>)}
                    </div>
                </Carousel> 
                : <div className={styles.listaDeProjetos}>
                    {listaProjetos.map((projeto) => 
                            <BoxDeProjetos 
                                key={projeto.id} 
                                nome={projeto.nome}
                                tumb={projeto.tumb}
                                descricao={projeto.descricao}
                                ide={projeto.ide}
                                linguagem={projeto.linguagem}
                                estado={projeto.estado}
                                projeto={projeto.projeto}
                            />)}
                </div>
            }
        </section>
    )
}

export default Projetos