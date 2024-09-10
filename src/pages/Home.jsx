import React from 'react';
import ProductList from '../components/ProductList';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default Home;
