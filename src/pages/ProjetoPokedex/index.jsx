import Dex from "./components/Dex"
import ListaPoke from "./components/ListaPoke"
import Titulo from "./components/Titulo"
import styles from "./App.module.css"

import { Provider } from "react-redux"
import store from "./store"
import Navbar from "../../components/Navbar"

function ProjectPokedex() {
  
  return (
    <div className={styles.index}>
      <Provider store={store}>
        <Navbar pagina='projeto-pokedex'/>
        <Titulo/>
        <ListaPoke/>
        <div className={styles.dex}>
          <Dex/>
        </div>
      </Provider>
    </div>
  )
}

export default ProjectPokedex
