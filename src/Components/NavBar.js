import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import './navbar.css'


const NavBar = () => {

    const  [openLinks, setOpenLinks] = useState(false)
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
            <h2>PIZZA</h2>
            
           
            <div className="hiddenLinks">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="menu">Menu</Link>
            <Link className="links" to="about">About</Link>
            <Link className="links" to="contact">Contact</Link>
            </div>
            </div>
            <div className="rightSide">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="menu">Menu</Link>
            <Link className="links" to="about">About</Link>
            <Link className="links" to="contact">Contact</Link>
            <button>
            <ReorderIcon />
            </button>
            </div>
        </div>
    )
}

export default NavBar
