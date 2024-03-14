import React, { useEffect } from 'react'
import style from './Trend.module.css'
const Trend = () => {
   




    useEffect(() => {
        const trendCards = document.getElementById('trendCards')
        const left = document.getElementById('left')
        const right = document.getElementById('right')
       
        
        function leftclick(){

            trendCards.style.transform = 'translateX(270px)'
            trendCards.style.transition = '0.3s'

            
        }
        function rightclick(){
             

            trendCards.style.transform = `translateX(-270px)`
            trendCards.style.transition = '0.3s'
            
            
            
        }
        
                left.onclick = () => {
                    leftclick()
                }
                right.onclick = () => {
                    rightclick()
                }

    }, [])


















  
  return (
    <div className={style.trend}>
        <div className={style.slide}>
            <i className="fa-solid fa-arrow-left" id='left' ></i>
            <h1>Trending Items</h1>
            <i className="fa-solid fa-arrow-right" id='right' ></i>
        </div>
        <div className={style.trendCards} id='trendCards'>
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
            <div className={style.card} >
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
</div>
  )
}

export default Trend