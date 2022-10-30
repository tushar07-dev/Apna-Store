import { createContext, useContext, useEffect } from "react";
import axios from "axios";

// Step1: create Context
const AppContext = createContext();

//* step 2: create Provider & inclose inside ( <AppProvider> <App/> </AppProvider> )
const API = `https://api.pujakaitem.com/api/products`;

const AppProvider = ({ children }) => {

    const getProduct = async (url) =>{
        const res = await axios.get(url);
        // console.log(res);
        const product = await res.data;
        console.log(product);

        }

useEffect(() => {
  getProduct(API);

}, [])

    
  return (
    <AppContext.Provider value={{ myName: "Tushar   dcD" }}>
      {children}
    </AppContext.Provider>
  );
};

// Global Custome Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
