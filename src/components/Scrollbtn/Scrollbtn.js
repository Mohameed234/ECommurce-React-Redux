import React, { useEffect } from 'react'
import style from './Scrollbtn.module.css'


const Scrollbtn = () => {
    
    useEffect(() => {
        const btn = document.getElementById('scroll')
        window.onscroll = () => {
            scrollFunction()
        }
        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
              btn.style.display = "flex";
            } else {
              btn.style.display = "none";
            }
        }
    
        btn.onclick = () => {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }


    }, [])

  return (
    <div>
        <button className={style.scrollbtn} id='scroll'>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    </div>
  )
}

export default Scrollbtn