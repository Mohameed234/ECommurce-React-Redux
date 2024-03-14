import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../rtk/slices/cart-slice'









const Products = () => {
    const [products , setProducts] = useState()
  
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(resp => resp)
            .then(data => setProducts(data.data))
            
            


           
        }, [])


        function colcard() {
            
            return(  products?.map((item) => {
                        function rate(){
                                if(parseInt(item.rating.rate) > 3){
                                    return(
                                        <>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star-half-stroke"></i>
                                        </>
                                    )
                                }
                                    else{
                                      return(
                                        <>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </>
                                    
                                      )
                                }
                        }
                       
                        

                    return( 
                    <div className={style.colCard} key={item.id}>
                        <div className={style.image}>

                            <img src={item.image} alt=''/>
                        </div>
    
                        <div className={style.details}>
                            <h1>{item.title}</h1>
                            <div className={style.price}>
                                <span>{item.price} $</span>
                                <div className={style.rate}>
                                    <div className={style.stars}>
                                     {rate()}
                                    </div>
                                    <p className={style.count}> ({item.rating.count}) </p>
    
                                </div>
                            </div>
                            <p>{item.description}</p>
    
                           
                            <div className={style.buttons}>
                                <button className={style.addToCart} onClick={() => {dispatch(addToCart(item))}}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <h5>Add To Cart</h5>
                                </button>

                                <div className={style.shuffle}>
                                    <i className="fa-solid fa-shuffle"></i>
                                </div>
                                <div className={style.zoom} id='zoom'>
                                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                                </div>
                                <div className={style.heart}>
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                            </div>
                                
                           
                        </div>
                    </div>)
            }))
        }
    
       
   
        
        
      
        
        
      
       


  
  

   
  return (
    <div className={style.products}>
            <div className={style.productsNav}>
                <select>
                    <option>
                        default sorting
                    </option>
                    <option>
                        sort by popularity
                    </option>
                    <option>
                        sort by news 
                    </option>
                    <option>
                        sort by price: low to high
                    </option>
                    <option>
                        sort by price: high to low
                    </option>
                </select>

                <div className={style.veiw}>
                    <button className={style.grid} id='grid'>
                        <i className="fa-solid fa-border-all"></i>
                    </button>
                    <button className={style.block} id='block'>
                        <i className="fa-solid fa-align-left"></i>
                    </button>   
                    <select>
                        <option>
                            showing
                        </option>
                        <option>
                            9
                        </option>
                        <option>
                            12
                        </option>
                        <option>
                            18
                        </option>
                
                    </select>
                </div>
            </div>

            <div className={style.cards} >
                <div className={style.card}>
                    <div className={style.img}>
                        <div className={style.layer}></div>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bage"/>
                    </div>
                    <h3>Enim Expedita Sed</h3>
                    <p>$45 <span>$55.25</span></p>
                    <div className={style.rate}>
                        <div className={style.stars}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className={style.count}> (25) </p>

                    </div>
                    <button>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h5>Add To Cart</h5>
                    </button>
                    
                    <div className={style.btns}>
                            <div className={style.btn}>
                                <i className="fa-solid fa-shuffle"></i>
                            </div>
                            <div className={style.btn}>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                    </div>

                </div>
            </div>

            <div className={style.colCards} id='colcards'>
                
                {colcard()}
        
            </div>
    </div>
  )
}

export default Products