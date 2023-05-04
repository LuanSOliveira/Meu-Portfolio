import BoxSection from '../BoxSection/boxSection'
import styles from './Container.module.scss'

const Container = ({referencias}) => {
    return(
        <div className={styles.Container}>
            <BoxSection section='home' referencia={referencias[0]}/>
            <BoxSection section='sobre' referencia={referencias[1]}/>
            <BoxSection section='habilidades' referencia={referencias[2]}/>
            <BoxSection section='projetos' referencia={referencias[3]}/>
        </div>
    )
}

export default Container