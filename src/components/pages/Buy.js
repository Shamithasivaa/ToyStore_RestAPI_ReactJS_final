import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Buy = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/show') // Replace with your backend URL
      .then(response => {
        const filteredProducts = response.data.filter(product => product.id !== 0);
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div style={Style}>
        <div className='header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1 className='toylist'>Available Toys</h1>
        <Link to="/home" style={{color:'black'}}>Back to Homepage</Link>
        <Link to="/customerOrders">
                <button className="primary-button">
                    <center>Place Order</center>
                </button>
            </Link>
            </div>
      <br></br><br></br>
      <ul className='content'>
      {products.length > 0 ? (
        products.map(product => (
          <li key={product.id}>
            <span>
            <h5>{product.id}.
            Toy Name: {product.toyName} <br></br> Price - Rs:{product.price}</h5>
            <p><b>Category: </b>{product.category}</p>
            <p><b>Available Quantity:</b> {product.availableQty}</p>
            <p><b>Product Description: </b>{product.description}</p>
            </span>
            <br></br>
          </li>
))
) : (
  <li>No products available at the moment.</li>
)}
        
      </ul>
      <footer className='footer' style={{color: '#3a1d1d'}}>
      <p>For any queries about delivery date and order<br></br>
      <b>Contact:</b>+91 8610679513</p>
</footer>
      
    </div>
  );
};

export default Buy;
const Style = {
    
    backgroundColor: "#F2D4D7",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    //display: 'flex',
    flexDirection: 'row',
}