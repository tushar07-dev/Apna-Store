const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
            // ...action.payload & [...action.payload]
            // It create an dublicate shallow copy of arr data so we dont messUp we original data
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;