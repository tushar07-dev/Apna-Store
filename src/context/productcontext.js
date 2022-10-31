import { createContext, useContext, useEffect , useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

// Step1: create Context
const AppContext = createContext();

const API = `https://api.pujakaitem.com/api/products`;

const initialState = {
    isLoading: false,         //load for all product
    isError: false,           //load for Error page
    products : [],            //display all Products on Product page.
    featureProducts : [],     //display specific Features on Home page
    isSingleLoading : false,  //Sinlge page is Loading
    singleProduct : {},       //Single product data in Object dataStructure
}

//* step 2: create Provider & inclose inside ( <AppProvider> <App/> </AppProvider> )
const AppProvider = ({ children }) => {

//! "productReducer" is called with as name "reducer".
    const [state, dispatch] = useReducer(reducer , initialState);

    const getProduct = async (url) =>{
    // * LOADING :
        dispatch({ type:"SET_LOADING" });
        try{
    // * SET-API : 
            const res = await axios.get(url);
            // console.log(res);
            const products = await res.data;
            console.log( "AllProducts" ,products);
            dispatch({ type:"SET_API_DATA" , payload: products });
        }
        catch(error){
    // * ERROR : 
            dispatch({ type:"API_ERROR" })
        }
    }

// ! 2nd api call for Single-Product.

    const getSingleProduct = async (url) =>{
      dispatch({ type:"SET_SINGLE_LOADING" });
      try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({ type:"SET_SINGLE_PRODUCT" , payload: singleProduct });
      }
      catch(error){
        dispatch({ type:"SET_SINGLE_ERROR" });
      }
    };

useEffect(() => {
  getProduct(API);

}, [])

    
  return (
    <AppContext.Provider value={{...state , getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

// Global Custome Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
