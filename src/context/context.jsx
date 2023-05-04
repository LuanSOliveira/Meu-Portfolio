import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { projetosCollectionRef } from "../database/db";

export const AppContext = createContext()

const AppProvider = ({children}) => {
    const [listaDeProjetos, setListaDeProjetos] = useState([])

    useEffect(() => {
        const getFirebase = async () => {
            const data = await getDocs(projetosCollectionRef)
            setListaDeProjetos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getFirebase()
    },[])

    return(
        <AppContext.Provider value={{listaDeProjetos}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppProvider