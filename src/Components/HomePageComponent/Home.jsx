import React from 'react'
import './Home.css';
import logo from '../../img/ssss.png'


function Home() {
  return (
    <div className='container'>
      <div className="homeContent">
        <img src={logo} alt={logo}/>
        <div className='hello'>
          <p>Hello , my name is</p>
          <h1>SERCAN LÜLLECİ</h1>
          <p>I am a FRONT END DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}

export default Home
