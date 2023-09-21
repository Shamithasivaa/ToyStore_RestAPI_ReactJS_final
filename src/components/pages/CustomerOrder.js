import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../App.css'
const CustomerOrder = () => {
  const initialOrder = {
    customerName: '',
    phoneNumber: '',
    address: '',
    orderToy: '',
    orderDate: '',
    lendingStartDate: '',
    lendingEndDate: '',
  };
    const [orders, setOrders] = useState(initialOrder);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setOrders({ ...orders, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send a POST request to your Spring Boot API to add the product
        try {
          const response = await axios.post('http://localhost:8080/api/orders/add1',orders,{
            //method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
           // body: JSON.stringify(orders),
          });
      
          if (response.status === 201) {
            console.log('Order added successfully.');
            setOrders(initialOrder);
            // Reset the form or provide user feedback as needed
          } else {
            console.error('Failed to add product.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <h2>Fill the below to complete ur order</h2>
            <h5>Enter your details</h5>
            <form action="/home" onSubmit={handleSubmit}>
            <span>
            <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={orders.customerName}
            onChange={handleChange}/></span>
            <br></br><br></br>
            <span>
        <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={orders.phoneNumber}
            onChange={handleChange}/></span>
            <br></br><br></br>
            <span>
        <textarea
        type="text"
            name="address"
            placeholder="Address"
            value={orders.address}
            onChange={handleChange}/></span>
            <br></br><br></br>
        <span>
        <textarea
        type="text"
            name="orderToy"
            placeholder="Order Toy Name"
            value={orders.orderToy}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
        <textarea
        type="text"
            name="orderDate"
            placeholder="Order Date"
            value={orders.orderDate}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
        <textarea
        type="date"
            name="lendingStartDate"
            placeholder="Lending Start Date"
            value={orders.lendingStartDate}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
        <textarea
        type="date"
            name="lendingEndDate"
            placeholder="Lending End Date"
            value={orders.lendingEndDate}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
      <button type="submit">Confirm Order</button></span>
            </form>
            <footer>
                <p><Link to="/buy">Back to Products</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    );
};
export default CustomerOrder;
const HeaderStyle = {
   // width: "100%",
    //height: "100vh",
    backgroundColor: "#E1D9D1",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
}
