import styles from './BoxSection.module.scss'
import Habilidades from './Habilidades/habilidades'
import Home from './Home/home'
import Projetos from './Projetos/projetos'
import Sobre from './Sobre/sobre'

const BoxSection = ({section, referencia}) => {
    function DefineBoxSection(){
        if(section === 'sobre' || section === 'projetos'){
            return styles.SectionAlternativo
        }
    }

    return(
        <section className={`${styles.BoxSection} ${DefineBoxSection()}`} ref={referencia}>
            {(section === 'home') && <Home/>}
            {(section === 'sobre') && <Sobre/>}
            {(section === 'habilidades') && <Habilidades/>}
            {(section === 'projetos') && <Projetos/>}
        </section>
    )
}

export default BoxSection