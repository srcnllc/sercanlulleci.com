import React from 'react'
import './Skills.css';
import html from '../../logo/html.png'
import css from '../../logo/css.png'
import js from '../../logo/js.png'
import bootstrap from '../../logo/bootstrap.png'
import react from '../../logo/react.png'
import ps from '../../logo/Photoshop.png'
import pr from '../../logo/Premiere.png'
import ms from '../../logo/office.png'



function Skills() {
  return (
    <div className="container-skills">
        <h1>MY SKILLS</h1>
       <div className="yetenek_card">
        <div className="skillCard">
            <img src={html} alt="html" />
            <h4>HTML</h4>
        </div>
        <div className="skillCard">
            <img src={css} alt="css" />
            <h4>CSS</h4>
        </div>
        <div className="skillCard">
            <img src={js} alt="js" />
            <h4>JAVASCRIPT</h4>
        </div>
        <div className="skillCard">
            <img src={bootstrap} alt="bootstrap" />
            <h4>BOOTSTRAP</h4>
        </div>
        <div className="skillCard">
            <img src={react} alt="react" />
            <h4>REACT.JS</h4>
        </div>
        <div className="skillCard">
            <img src={ps} alt="photoshop" />
            <h4>A.PHOTOSHOP</h4>
        </div>
        <div className="skillCard">
            <img src={pr} alt="premiere" />
            <h4>A.PREMIERE</h4>
        </div>
        <div className="skillCard">
            <img src={ms} alt="m.office" />
            <h4>M.OFFICE</h4>
        </div>
        
       </div>
    </div>
  )
}

export default Skills
