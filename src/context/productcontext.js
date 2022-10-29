import { createContext, useContext } from "react";

// Step1: create Context
const AppContext = createContext();

//* step 2: create Provider & inclose inside ( <AppProvider> <App/> </AppProvider> )

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{ myName : "Tushar   dcD"}}>{children}</AppContext.Provider>;
};

// Global Custome Hooks
const useProductContext = () => {
    return useContext(AppContext)
}

export {AppProvider , AppContext , useProductContext };