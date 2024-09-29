import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.productState.categories);
  const selectedCategory = useSelector(state => state.productState.selectedCategory);

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    // Dispatch category change and reset products
    dispatch({ type: 'SET_CATEGORY', payload: category });
    
    // Reset skip to 0 to refetch products with the new category
    dispatch({ type: 'SET_SKIP', payload: 0 });

    // Optionally clear products when switching categories
    dispatch({ type: 'CLEAR_PRODUCTS' });
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
