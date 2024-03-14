import React from 'react'
import style from './Services.module.css'

const Services = () => {
  return (
    <div className={style.services}>
        <div className={style.box}>
            <i className="fa-solid fa-truck"></i>
            <div className={style.servicesText}>
                <h3>Free Delivery</h3>
                <p>WorldWide</p>
            </div>
        </div>
        <div className={style.box}>
            <i className="fa-solid fa-sack-dollar"></i>

            <div className={style.servicesText}>
                <h3>Money Returns</h3>
                <p>30 Days money return</p>
            </div>
        </div>
        <div className={style.box}>
            <i className="fa-solid fa-headset"></i>

            <div className={style.servicesText}>
                <h3>27/4 Online Support</h3>
                <p>Customer Support</p>
            </div>
        </div>
        <div className={style.box}>
            <i className="fa-solid fa-lock"></i>
            <div className={style.servicesText}>
                <h3>Payment Security</h3>
                <p>Safe Payment</p>
            </div>
        </div>
    </div>
  )
}

export default Services