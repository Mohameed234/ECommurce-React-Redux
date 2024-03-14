import React from 'react'
import style from './Main.module.css'
import { Link } from 'react-router-dom'
import Products from '../../Products/Products'

const Main = () => {



return (
  <div className={style.main}>

        <div className={style.mainImg}>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='bage'/>
        </div>

        <div className={style.mainText}>
            <h3>New Trending</h3>
            <h1>Bage Collection</h1>
            <p>  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <Link to='/products'>Shop Now</Link>
        </div>

     
    </div>
  )
}

export default Main