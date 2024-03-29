import React, { useEffect } from 'react'
import './Skills.css';
import html from '../../logo/html.png'
import css from '../../logo/css.png'
import js from '../../logo/js.png'
import bootstrap from '../../logo/bootstrap.png'
import react from '../../logo/react.png'
import next from '../../logo/next.png'
import ps from '../../logo/Photoshop.png'
import pr from '../../logo/Premiere.png'
import AOS from 'aos'
import 'aos/dist/aos.css'




function Skills() {
    useEffect(()=>{
        AOS.init({duration:2000})
      },[])
  return (
    <div className="container-skills">
        <h1 data-aos="fade-down">MY SKILLS</h1>
       <div className="yetenek_card">
        <div className="skillCard" data-aos="fade-right" data-aos-easing="linear">
            <img src={html} alt="html" />
            <h4>HTML</h4>
        </div>
        <div className="skillCard" data-aos="fade-right" data-aos-easing="linear" >
            <img src={css} alt="css" />
            <h4>CSS</h4>
        </div>
        <div className="skillCard"data-aos="fade-right" data-aos-easing="linear">
            <img src={js} alt="js" />
            <h4>JAVASCRIPT</h4>
        </div>
        <div className="skillCard" data-aos="fade-right" data-aos-easing="linear">
        <img src={react} alt="react" />
            <h4>REACT.JS</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={next} alt="next" />
            <h4>NEXT.JS</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={bootstrap} alt="bootstrap" />
            <h4>BOOTSTRAP</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={ps} alt="photoshop" />
            <h4>A. PHOTOSHOP</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={pr} alt="premiere" />
            <h4>A. PREMIERE</h4>
        </div>
        
       </div>
    </div>
  )
}

export default Skills
