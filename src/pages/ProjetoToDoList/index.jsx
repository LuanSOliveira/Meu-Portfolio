import { Provider } from "react-redux"
import Dashboard from "./components/Dashboard"
import Formulario from "./components/Formulario"
import store from "./store"

import Navbar from "../../components/Navbar"


function ProjectToDoList() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar pagina='projeto-to-do-list'/>
        <Formulario/>
        <Dashboard/>
      </Provider>
    </div>
  )
}

export default ProjectToDoList
