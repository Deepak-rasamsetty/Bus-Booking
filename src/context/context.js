import { createContext, useContext } from "react";


export const customContext = createContext();
export const CustomContextProvider = ({value, children}) => {
    return (<customContext.Provider value={value}>
        {children}
    </customContext.Provider>)
};


export const useContextValue = (key) =>{
 
    var ctx = useContext(customContext);
    return ctx[key];
}