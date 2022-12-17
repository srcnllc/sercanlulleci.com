import React,{ useEffect } from 'react'
import './AboutMe.css';
import foto from '../../img/img.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Eğitim() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  const indirözgecmis=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://drive.google.com/file/d/1IgWB0BOSYACmgJmdgJS-hCC14UMctxhq/view?usp=sharing";
  }
const indirtranskript=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://drive.google.com/file/d/14zwhnSUTRuGH8T2GXa5vWLTHjnhX3JcW/view?usp=sharing";

}
const indirjs=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://drive.google.com/file/d/1RLgPP0Wst9h4e3d5aQSCeDcLK8kZSmSG/view?usp=sharing";

}
  return (
    <div className='center'>
        <div className="resim" data-aos='fade-right'>
        <img src={foto} alt={foto}/>
        </div>
         <div className="aboutMe" data-aos='fade-left'>
            <h1 data-aos="fade-down" >ABOUT ME</h1>
            <h2 data-aos="fade-right">Mathematician & FrontEnd Developer</h2>
            <p data-aos="fade-up">I am a mathematician. And I am developing myself to be a front-end web developer. I can write HTML-CSS-JavaScript and React. I can design responsive for mobile devices.
                I want to start my career as a front-end developer and continue as a full-stack developer.
            </p>
            <div className="button">
                <button onClick={indirözgecmis} data-aos='flip-right'>Resume</button>
                <button onClick={indirtranskript} data-aos="zoom-out">Transkrip</button>
                <button onClick={indirjs} data-aos='flip-left'>JavaScript Document</button>
            </div>
        </div>
    </div>
  )
}

export default Eğitim