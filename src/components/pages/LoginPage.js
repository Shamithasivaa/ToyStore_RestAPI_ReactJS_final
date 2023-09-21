import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/snowman.jpg'
import '../../App.css'

export default function LoginPage() {
    return (
        <div style={Style}>
            <center><h2 style={{padding:'100px'}}></h2>
            <h3>Sign in below!</h3>
            </center>
        <div className="text-center">
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                    <p>Explore a Toy Journey</p>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}

const Style = {
    width: "100vw",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectfit: "cover"
}
