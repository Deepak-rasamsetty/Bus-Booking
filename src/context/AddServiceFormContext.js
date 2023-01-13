import { createContext, useContext } from "react";


export const AddServiceContext = createContext();
export const AddServiceContextProvider = ({value, children}) => {
    return (<AddServiceContext.Provider value={value}>
        {children}
    </AddServiceContext.Provider>)
};


export const useAddServiceContextValue = (key) =>{
 
    var ctx = useContext(AddServiceContext);
    return ctx[key];
}