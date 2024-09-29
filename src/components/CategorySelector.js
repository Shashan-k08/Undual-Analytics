import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.productState.categories);
  const selectedCategory = useSelector(state => state.productState.selectedCategory);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    dispatch({ type: 'SET_CATEGORY', payload: category });
    dispatch({ type: 'FETCH_PRODUCTS', payload: [] }); // Clear products on category change
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
