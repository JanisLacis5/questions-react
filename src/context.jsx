import {createContext, useContext, useState} from "react"
import questions from "./data"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [data, setData] = useState(questions)
    return (
        <GlobalContext.Provider value={{data, setData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext
