import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState.products);
  const selectedCategory = useSelector(state => state.productState.selectedCategory);
  const searchQuery = useSelector(state => state.productState.searchQuery);
  const loading = useSelector(state => state.productState.loading);
  
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: 'LOADING', payload: true });

        let query = `?limit=${limit}&skip=${skip}`;
        if (selectedCategory) {
          query += `&category=${selectedCategory}`;
        }

        const response = await fetch(`https://dummyjson.com/products${query}`);
        
        // Check if the response is ok before parsing
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        
        dispatch({ type: 'FETCH_PRODUCTS', payload: data.products });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        dispatch({ type: 'LOADING', payload: false });
      }
    };

    fetchProducts();
  }, [dispatch, selectedCategory, skip]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setSkip((prev) => prev + limit);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, loading]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 style={{marginLeft:"7%"}}>Product List</h2>
      <div className="product-grid">
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="product-card" key={`${product.id}-${index}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className='price-box'>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={loaderRef} style={{ height: '20px', margin: '10px 0' }} />
      
    </div>
  );
};

export default ProductList;
