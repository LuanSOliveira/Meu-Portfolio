import BoxDeConhecimentos from "./BoxDeConhecimentos";
import { listaConhecimentos } from "../../listas/listas.js";
import styles from "./Conhecimentos.module.scss"

const Conhecimentos = () => {
    return (
        <section className={styles.conhecimentos}>
            <h2>Meus Conhecimentos</h2>
            <div className={styles.listasDeConhecimentos}>
                <BoxDeConhecimentos titulo="Mais Utilizados" lista={listaConhecimentos.filter((item) => item.nivel === "principal")}/>
                <BoxDeConhecimentos titulo="Outros" lista={listaConhecimentos.filter((item) => item.nivel === "outros")}/>
            </div>
        </section>
    )
}

export default Conhecimentos;