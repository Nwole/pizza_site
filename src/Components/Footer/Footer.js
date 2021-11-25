import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import './footer.css'







const Footer = () => {
    return (
        <div className="footer">
            <div className="social-media">
            <InstagramIcon className="material-icons"/>
            <FacebookIcon className="material-icons"/>
            <TwitterIcon className="material-icons"/>
            <LinkedInIcon className="material-icons"/>
            </div>
            <p>&copy; 2021 jarotechpizza.com </p>
        </div>
    )
}

export default Footer
