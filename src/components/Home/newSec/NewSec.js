import React from 'react'
import style from './newSec.module.css'
import { Link } from 'react-router-dom'
const NewSec = () => {
  return (
    <div className={style.newSesone}>
        <div className={style.left}>
            <div className={style.leftText}>
                <p>Super Sale</p>
                <h2>New Collection</h2>
                <Link to='/products'>Shop Now </Link>
            </div>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='bage'/>
        </div>

        <div className={style.right}>
            <div className={style.rightText}>
                <h2>New Season</h2>
                <p>Sale 40% Off  </p>
                <Link to='/products'>Shop Now </Link>
            </div>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='bage'/>
        </div>
    </div>
  )
}

export default NewSec