import React from 'react'
import './AboutMe.css';
import foto from '../../img/img.jpg'



function Eğitim() {
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
        <div className="resim">
        <img src={foto} alt={foto}/>
        </div>
         <div className="aboutMe">
            <h1>ABOUT ME</h1>
            <h2>Mathematician & FrontEnd Developer</h2>
            <p>I am a mathematician. And I am developing myself to be a front-end web developer. I can write HTML-CSS-JavaScript and React. I can design responsive for mobile devices.
                I want to start my career as a front-end developer and continue as a full-stack developer.
            </p>
            <div className="button">
                <button onClick={indirözgecmis}>Resume</button>
                <button onClick={indirtranskript}>Transkrip</button>
                <button onClick={indirjs}>JavaScript Document</button>
            </div>
        </div>
    </div>
  )
}

export default Eğitim