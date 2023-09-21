import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Sell from './components/pages/Sell'
import Buy from './components/pages/Buy'
import './App.css'
import CustomerOrders from './components/pages/CustomerOrder'
import CustomerDetails from './components/pages/CustomerDetails'
export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/sell" component={Sell} />
                    <Route path="/buy" component={Buy} />
                    <Route path="/customerOrders" component={CustomerOrders} />
                    <Route path="/customerDetails" component={CustomerDetails} />
                </Switch>
                
            </div>
        </Router>
    )
}