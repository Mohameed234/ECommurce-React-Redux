
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";



const NavPar = () => {

  
     useEffect(() => {

        
        const nav = document.getElementById(' bottom')
        function navFunction() {

            window.onscroll = () => {

                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    nav.style.position = "fixed";
                    nav.style.top = "0";
                    nav.style.zIndex = '1000'
                    
                } else {
                    nav.style.position = "static";
                }
            }
        }


        const menu = document.getElementById('menu')
        const links = document.getElementById('links')
        const home = document.getElementById('home')
        const products = document.getElementById('products')
        const login = document.getElementById('login')
        const cart = document.getElementById('cart')
        const close = document.getElementById('close')
        
        function hundleMenu(){
            if(links.style.left == '0px' ){
                links.style.left = '1500px'
                links.style.zIndex = '1000'
                links.style.transition = '0.7s'
                
                
                
            }else{
                links.style.left = '0px'
                links.style.transition = '0.7s'
                links.style.zIndex = '1000'
   

            }
        }
        menu.onclick = () => {
            hundleMenu()
        }
        home.onclick = () => {
            hundleMenu()
        }
        products.onclick = () => {
            hundleMenu()
        }
        cart.onclick = () => {
            hundleMenu()
        }
        login.onclick = () => {
            hundleMenu()
        }
        close.onclick = () => {
            hundleMenu()
        }
        
    

     } ,[])
    
    

     const cart = useSelector(state => state.cart)
    

  return (
               
    <nav className={style.nav}>
    
        <div className={style.top}>

                <div className={style.topright}>
                <a href="#h" className={style.compare}>
                    <i className="fa-solid fa-shuffle"></i>
                    <p>compare</p>
                </a>
                <a href="#h" className={style.wishList}>
                    <i className="fa-regular fa-heart"></i>
                    <p>wish list</p>
                </a>
                <a href="#h" className={style.login}>
                <i className="fa-solid fa-user"></i>
                    <p>login</p>
                </a>
                </div>



                <div className={style.topleft}>

                    <div className={style.mobile}>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <p>123-456-7890</p>
                    </div>

                    <div className={style.regoin}>
                        <select>
                            <option>usd</option>
                            <option>eur</option>
                            <option>gbr</option>
                        </select>
                    </div>
                    <div className={style.lang}>
                        
                        <select>
                            <option value='English'>
                                
                                English
                            </option>
                            <option value='Arabic'>
                                
                                Arabic
                            </option>
                            
                        </select>
                        
                    </div>

                </div>
        </div>
        


        <div className={style.bottom} id="bottom">
            <a href="#d" className={style.logo}>
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png" alt="logo"/>
            </a>

            <div className={style.links} id="links">
                <i class="fa-solid fa-rectangle-xmark" id="close"></i>
              <NavLink to='/home' id="home">home</NavLink>
              <NavLink to='/products' id="products">products</NavLink>
              <NavLink to='/cart' id="cart">Cart - {cart.length}</NavLink>
              <NavLink to='/login' id="login">login</NavLink>
        
            </div>
          
            <div className={style.navicons}>
                <i className="fa-solid fa-magnifying-glass"></i>
                
                <i className="fa-solid fa-cart-shopping cart"></i>
                <small>{cart.length}</small>
            </div>

            <button className={style.menu} id="menu"  >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
        </div>

        
  

        
    </nav>
    
  )
 
}

export default NavPar;
