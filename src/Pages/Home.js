import { Menu } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import './home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="header-container">
            <h1>Jaro Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Home
