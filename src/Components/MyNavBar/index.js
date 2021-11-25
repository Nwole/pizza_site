import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'
import './MyNavBar.css'
const MyNavBar = () => {
    const  [openLinks, setOpenLinks] = useState(false)

    const handleButtonClick = () => {
        if(openLinks){
            setOpenLinks(false);
        }else{
            setOpenLinks(true);
        }
    }
    return (
        <div className="navbar-container">
        <div className="navbar">
            <h2>PIZZA</h2>
            <div className="hiddenLinks" id={openLinks ? "open" : "close"}> 
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="menu">Menu</Link>
            <Link className="link" to="about">About</Link>
            <Link className="link" to="contact">Contact</Link>
            </div>
            <button onClick={handleButtonClick}>
            <ReorderIcon />
            </button>
        </div>
        </div>
    )
}

export default MyNavBar
