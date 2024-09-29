import { combineReducers } from "redux";

const initialState = {
  categories: [],
  products: [],
  selectedCategory: "",
  searchQuery: "",
  loading: false,
};

const productReducer = (state = initialState, action) => {
 // console.log("hii")
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "FETCH_PRODUCTS":
      return { ...state, products: [...state.products, ...action.payload] }; // Append fetched products
    case "SET_CATEGORY":
      console.log(action.payload)
      return { ...state, selectedCategory: action.payload, products: [] }; // Clear products when category changes
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productState: productReducer,
});

export default rootReducer;
