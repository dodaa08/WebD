import {  useState, createContext } from "react"

export const Context = createContext();

function ContextApi ({children}){
    const [counter, setCounter] = useState(0);
    
    return(
        <Context.Provider value={{counter, setCounter}}>
                {children}
        </Context.Provider>
    )
}


export default ContextApi;