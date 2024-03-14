import React, { useEffect, useState } from 'react'
import style from './login.module.css'
import axios from 'axios'


const Login = () => {
    const [users , setUsers] = useState([])
  
    
    
    
    
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const submit = document.getElementById('submit')
    
    const container = document.getElementById('container')
    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then(resp => resp)
            .then(data => setUsers(data.data))
            

    
            
        }, [])


        
        function hundleUsers(){
            users.map((user) => {
                if(email.value === user.email && password.value === user.password){
                    console.log(user.username);
                    container.innerHTML = ` <h1>Hello ${user.username}</h>`
                }
                
            })
        }
        
        
    return (
    <div className={style.login}>
            <div className={style.container} id='container'>
                <h1>login</h1>
                
                <form>
                    <input type='email' placeholder='Your Email' id='email'/>
                    <input type='password' placeholder='Your Password' id='password'/>
                    <div className={style.remember}>
                        <div className={style.checkBox}>
                            <input type="checkbox" id="remember"  value="remember"/>
                            <label for="remember"> Remember me</label>
                        </div>
                        
                            <a href='#d'>Forget Password?</a>
                    </div>
                    <input type='button' value='Login' id='submit' onClick={hundleUsers}/>
                    
                    <div className={style.social}>
                        <a href='#e' className={style.facebook}> 
                            <i className="fa-brands fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>
                        <a href='#e' className={style.google}> 
                            <i className="fa-brands fa-google-plus-g"></i>
                            <span>Google</span>
                        </a>

                    </div>
                    <p>
                        Don't have an account?
                        <a href='#e'> Sign up now</a>
                    </p>
                </form>
                
                
            </div>  
    </div>
  )
}

export default Login