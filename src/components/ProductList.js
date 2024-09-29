import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState.products);
  const selectedCategory = useSelector(state => state.productState.selectedCategory);
  const searchQuery = useSelector(state => state.productState.searchQuery);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'LOADING', payload: true });
      const query = selectedCategory ? `?category=${selectedCategory}` : '';
      const response = await fetch(`https://dummyjson.com/products${query}&limit=${limit}&skip=${skip}`);
      const data = await response.json();
      dispatch({ type: 'FETCH_PRODUCTS', payload: data.products });
      dispatch({ type: 'LOADING', payload: false });
    };

    fetchProducts();
  }, [dispatch, selectedCategory, skip]);

  const handleLoadMore = () => {
    setSkip(skip + limit);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <button onClick={handleLoadMore} disabled={filteredProducts.length < limit}>
        Load More
      </button>
      <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default ProductList;
