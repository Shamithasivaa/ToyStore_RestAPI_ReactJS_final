import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import BackgroundImage from '../../assets/images/snowman.jpg'

const RegisterPage = () => {
    const [register, setRegister] = useState({
    
      username:'',
      password:'',
      email:'',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRegister({ ...register, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/api/reg/register',register,{
            //method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(register),
          });
      
          if (response.status === 201) {
            console.log('Product added successfully.');
            setRegister({
                username:'',
                password:'',
                email:'',
                
              });
            // Reset the form or provide user feedback as needed
          } else {
            console.error('Failed to add product.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <div style={Style}>
            <center><h2 style={{padding:'80px'}}></h2>
            <h5>Join with us</h5><h5>Create your personal account</h5></center>
            <div className="text-center">
            <form action="/home" onSubmit={handleSubmit} >
            <input
            name="username"
            placeholder="User Name"
            value={register.username}
            onChange={handleChange}/>
            <br></br><br></br>
            <input
            name="email"
            placeholder="E-mail"
            value={register.email}
            onChange={handleChange}/>
            <br></br><br></br>
            <span>
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={register.password}
            onChange={handleChange}/></span>
            <br></br><br></br>
                  
        <span>
      <button type="submit">Register</button></span>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
    )

}
export default RegisterPage;
const Style = {
  width: "100vw",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  objectfit: "cover"
}