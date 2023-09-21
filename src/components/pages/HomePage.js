import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/teddy.jpg'

export default function HomePage() {
    return (
        <div className="text-center" style={Style}>
            <h1 className="main-title home-page-title" style={{color:'white',paddingTop:'8rem'}}>welcome to Toy's Kingdom</h1>
            <br></br>
            <Link to="/sell">
                <button className="primary-button">SELL</button>
            </Link>
            <Link to="/buy">
                <button className="primary-button">BUY</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}

const Style = {
    width: "100vw",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
