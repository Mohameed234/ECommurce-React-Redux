import React from 'react'
import './Home.module.css'
import Main from './mainSec/Main'
import Services from './servicesSec/Services'
import ExProducts from './exclusiveProductsSec/ExProducts'
import NewSec from './newSec/NewSec'
import Trend from './trendItems/Trend'
import style from './Home.module.css'


const Home = () => {
  
  return (
    <div className={style.home}>
        <Main/>
        <Services/>
        <ExProducts/>
        <NewSec/>
        <Trend/>
    </div>
  )
}

export default Home