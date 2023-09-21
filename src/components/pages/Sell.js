import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../App.css';
import BackgroundImage from '../../assets/images/seller.jpg';

const Sell = () => {
  const [product, setProduct] = useState({
    id: null,
    toyName: '',
    price: '',
    description: '',
    category: '',
    availableQty: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const [updateProductId, setUpdateProductId] = useState('');
  const [deleteProductId, setDeleteProductId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your Spring Boot API to add/update the product
    try {
      let response;
      if (updateProductId) {
        response = await axios.put(`http://localhost:8080/api/products/update/${updateProductId}`, product, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        response = await axios.post('http://localhost:8080/api/products/add', product, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      if (response.status === 201 || response.status === 200) {
        console.log('Product added/updated successfully.');
        setProduct({
          id: '',
          toyName: '',
          price: '',
          description: '',
          category: '',
          availableQty: '',
        });
        setIsFormVisible(false);
        setIsUpdateFormVisible(false);
        setUpdateProductId('');

        // Reset the form or provide user feedback as needed
      } else {
        console.error('Failed to add/update product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/products/deletebyid/${productId}`);
      if (response.status === 200) {
        console.log('Product deleted successfully.');
        // Remove the deleted product from the products state
        setProducts(products.filter((product) => product.id !== productId));
      } else {
        console.error('Failed to delete product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsUpdateFormVisible(false);
    setUpdateProductId('');
    setDeleteProductId('');
  };

  const toggleUpdateFormVisibility = (productId) => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
    setIsFormVisible(false);
    setUpdateProductId(productId);
    setDeleteProductId('');
    // Fetch the product details by productId and set them in the product state for update
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      setProduct({
        id: selectedProduct.id,
        toyName: selectedProduct.toyName,
        price: selectedProduct.price,
        description: selectedProduct.description,
        category: selectedProduct.category,
        availableQty: selectedProduct.availableQty,
      });
    }
  };

  const toggleDeleteConfirm = (product) => {
    setDeleteProductId(product);
    setIsFormVisible(false);
    setIsUpdateFormVisible(false);
  };

  return (
    <div style={HeaderStyle} className='content1'>
      <div className='sell'>
        <div className="text-center">
          {isFormVisible || isUpdateFormVisible ? (
            <form action="/home" onSubmit={handleSubmit}>
              <p>ENTER TOY DETAILS</p>
              <input
                name="id"
                placeholder="Id"
                value={product.id || ''}
                onChange={handleChange}
              />
              <br></br><br></br>
              <span>
                <input
                  type="text"
                  name="toyName"
                  placeholder="Toy Name"
                  value={product.toyName || ''}
                  onChange={handleChange}
                />
              </span>
              <br></br><br></br>
              <span>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={product.price || ''}
                  onChange={handleChange}
                />
              </span>
              <br></br><br></br>
              <span>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={product.description || ''}
                  onChange={handleChange}
                />
              </span>
              <br></br><br></br>
              <span>
                <textarea
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={product.category || ''}
                  onChange={handleChange}
                />
              </span>
              <br></br><br></br>
              <span>
                <textarea
                  type="number"
                  name="availableQty"
                  placeholder="Available Quantity"
                  value={product.availableQty || ''}
                  onChange={handleChange}
                />
              </span>
              <br></br><br></br>
              <span>
                <button type="submit">{updateProductId ? 'Update Product' : 'Add Product'}</button>
              </span>
            </form>
          ) : (
            <div className='header' style={{ height: '50px' }}>
              <h4 style={{ color: 'black', fontWeight: 'bold' }}>Added Toys' List</h4>
              <button onClick={toggleFormVisibility} style={{ float: 'right', marginRight: '50px', marginTop: '-35px' }} >Add Toys here</button>
              <Link to="/customerDetails">
        <button style={{ float: 'left', marginLeft: '30px', marginTop: '-35px' }}>Show Customer Details</button>
      </Link>
            </div>
          )}
          <div className='selltext'>
            {products.map(product => (
              <div key={product.id}>
                <span>
                  <h5>{product.id}.
                  Toy Name: {product.toyName} <br></br> Price - Rs:{product.price}</h5>
                  <p><b>Category: </b>{product.category}</p>
                  <p><b>Available Quantity:</b> {product.availableQty}</p>
                  <p><b>Product Description: </b>{product.description}</p>
                  <button onClick={() => toggleUpdateFormVisibility(product.id)}>Update</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </span>
                <br></br>
              </div>
            ))}
            <footer className='footer' style={{ height: '50px' }}>
              <p ><Link to="/home" style={{ color: 'black' }}>Back to Homepage</Link>.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;

const HeaderStyle = {
  width: "100vw",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  position: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: "-1",
};
