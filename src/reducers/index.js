import { combineReducers } from "redux";

const initialState = {
  categories: [],
  products: [],
  selectedCategory: "",
  searchQuery: "",
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "FETCH_PRODUCTS":
      return { ...state, products: [...state.products, ...action.payload] };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload, products: [] }; // Clear products when category changes
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload, products: [] };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  productState: productReducer,
});
