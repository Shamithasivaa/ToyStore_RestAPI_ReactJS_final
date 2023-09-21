import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const CustomerDetails = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an API call to fetch customer details who placed orders
    axios.get('http://localhost:8080/api/orders/show1')
      .then(response => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDeleteCustomer = async (customerId) => {
    try {
      // Send a DELETE request to delete the customer by ID
      await axios.delete(`http://localhost:8080/api/orders/deletebyid1/${customerId}`);
      
      // Update the state to remove the deleted customer
      setCustomers(customers.filter(customer => customer.customerId !== customerId));
      
      console.log('Customer deleted successfully.');
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div style={{backgroundColor:' #dfcbcb'}}>
        <div className='header'>
      <h1 >Customer Details</h1>
      <p style={{float:'right',marginTop:'-50px',paddingRight:'20px'}}><Link to="/sell" style={{color:'black'}}>Back to Toys' List</Link>.</p>
      <p style={{float:'right',marginTop:'-20px',paddingRight:'20px'}}><Link to="/home" style={{color:'black'}}>Back to Homepage</Link>.</p>
      </div>
      <ul>
        {customers.map(customer => (
          <li key={customer.customerId}>
            <h3 style={{ marginTop: '80px' }}>Customer Name: {customer.customerName}</h3>
            <p>Phone Number: {customer.phoneNumber}</p>
            <p>Address: {customer.address}</p>
            <p>Order Toy: {customer.orderToy}</p>
            <p>Ordered Date: {customer.orderDate}</p>
            <p>Lending Start Date: {customer.lendingStartDate}</p>
            <p>Lending End Date: {customer.lendingEndDate}</p>
            <button onClick={() => handleDeleteCustomer(customer.customerId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDetails;
