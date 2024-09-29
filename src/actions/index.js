import axios from "axios";

// Fetch categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    dispatch({ type: "FETCH_CATEGORIES", payload: data });
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};

// Fetch products
export const fetchProducts =
  (category = "", skip = 0, search = "") =>
  async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const query = search ? `&search=${search}` : "";
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skip}${
          category ? `&category=${category}` : ""
        }${query}`
      );
      dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
    } catch (error) {
      console.error("Error fetching products", error);
    }
    dispatch({ type: "LOADING", payload: false });
  };

// Set category
export const setCategory = (category) => (dispatch) => {
  dispatch({ type: "SET_CATEGORY", payload: category });
};

// Set search query
export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: "SET_SEARCH", payload: query });
};
