import { createContext, ReactNode, useState } from "react";
import { IProjetos } from "../interfaces/Interfaces";

interface IContext{
    projetoSelecionado: IProjetos;
    setProjetoSelecionado: (projetoSelecionado: IProjetos) => void
}

interface AppProviderProps{
    children: ReactNode
}

const initialState: IContext = {
    projetoSelecionado: {id: 0, nome: '', descricao: '', imagem: '', url: '', git: '', tecnologias: [],},
    setProjetoSelecionado: () => {}
}

export const AppContext = createContext<IContext>(initialState)

const AppProvider = ({children}: AppProviderProps) => {
    const [projetoSelecionado, setProjetoSelecionado] = useState<IProjetos>({id: 0, nome: '', descricao: '', imagem: '', url: '', git: '', tecnologias: [],})

    return(
        <AppContext.Provider
            value={
                {projetoSelecionado, setProjetoSelecionado}
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider