import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSide">
                
            </div>

            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" placeholder="Enter full name.." />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter email.." />

                <label htmlFor="mesage">Message</label>
                <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>

                <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
