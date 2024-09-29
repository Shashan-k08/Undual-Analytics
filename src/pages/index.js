import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../store/store';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      dispatch({ type: 'FETCH_CATEGORIES', payload: data });
    };

    fetchCategories();
  }, [dispatch]);

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    dispatch({ type: 'SET_SEARCH', payload: searchQuery });
  };

  return (
    <div className='main-box'>
      <p className='page-heading'>Undual Analytics</p>
      <div className='category-box'>
      <CategorySelector />
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
      </div>
      <div className='list-box'>
      <ProductList />
      </div>
    </div>
  );
};

// Wrap MainPage in Provider
const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
