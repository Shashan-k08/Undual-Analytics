import axios from "axios";

// Fetch categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products/categories");
    dispatch({ type: "FETCH_CATEGORIES", payload: data });
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};

// Fetch products
export const fetchProducts = (category, skip = 0, search = "") => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    //console.log("fetchproducts")
    const query = search ? `&search=${search}` : "";
    const apiUrl = `https://dummyjson.com/products?limit=10&skip=${skip}${category ? `&category=${category}` : ""}${query}`;
    //console.log("Fetching Products from URL:", apiUrl);
    const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
    console.log(data)
    dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
  } catch (error) {
    console.error("Error fetching products", error);
  }
  dispatch({ type: "LOADING", payload: false });
};

// Set category
export const setCategory = (category) => (dispatch) => {
  console.log("set category")
  dispatch({ type: "SET_CATEGORY", payload: category });
};

// Set search query
export const setSearchQuery = (query) => (dispatch) => {
  console.log("search")
  dispatch({ type: "SET_SEARCH", payload: query });
};
