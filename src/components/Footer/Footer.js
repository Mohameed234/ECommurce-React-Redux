import React from 'react'
import style from './footer.module.css'

const Footer = () => {
    return (
    <footer>
        <div className={style.top}>
            <div className={style.box}>
                <h2>Contact Info</h2>
                <div className={style.address}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p> 123 Street, Old Trafford, NewYork, USA</p>
                </div>
                <div className={style.email}>
                    <i className="fa-regular fa-envelope"></i>
                    <p> info@sitename.com </p>
                </div>
                <div className={style.phone}>
                    <i className="fa-solid fa-mobile-screen"></i>
                    <p> + 457 789 789 65 </p>
                </div>
                <div className={style.social}>
                    <a  href='#d' className={style.facebook}>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href='#d' className={style.twitter}>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    
                    <a href='#d' className={style.youtube}>
                        <i className="fa-brands fa-youtube"></i>        
                    </a>
                    <a href='#d' className={style.instagram}>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    
                    
                </div>
            </div>
            <div className={style.box}>
                <h2>Useful Links</h2>
                <a  href='#d'>
                    About Use
                </a>
                <a  href='#d' >
                    FAQ
                </a>
                <a  href='#d' >
                    Location
                </a>
                <a  href='#d' >
                    Affiliates
                </a>
                <a  href='#d' >
                    Contact
                </a>
                

            </div>
            <div className={style.box}>
                <h2>My Account</h2>
                <a  href='#d'>
                My Account
                </a>
                <a  href='#d' >
                Discount
                </a>
                <a  href='#d' >
                Returns
                </a>
                <a  href='#d' >
                Orders History
                </a>
                <a  href='#d' >
                Order Tracking
                </a>
                

            </div>
            <div className={style.box}>
                <h2>Subscribe Our Newsletter</h2>
                <p>
                    If you want to get an email from us every time we have a new special offer, then sign up here!
                </p>
                <div className={style.subscribe}>
                    <input type='email' placeholder='Enter Your Email Address'/>
                    <div className={style.boxEmail}>
                        <i className="fa-solid fa-envelope-open-text"></i>
                    </div>
                </div>
                

            </div>
            
            
         
       
        </div>

        <div className={style.bottom}>
            <div className={style.right}>
                <a href='#d' className={style.visa}>

                    <i className="fa-brands fa-cc-visa"></i>
                </a>
                <a href='#d' className={style.discover}>

                <i className="fa-brands fa-cc-discover"></i>

                </a>
                <a href='#d' className={style.mastercard}>

                <i className="fa-brands fa-cc-mastercard"></i>
                </a>
                <a href='#d' className={style.paypal}>

                <i className="fa-brands fa-cc-paypal"></i>
                </a>
                
                

            </div>
            <div className={style.left}>
                 © 2020 All Rights Reserved by Bestwebcreator
            </div>
        </div>
    </footer>
  )
}

export default Footer