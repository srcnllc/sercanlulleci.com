import React, { useEffect } from 'react'
import './Contact.css';
import logo from '../../img/ssss.png'
import { GoMail } from 'react-icons/go';
import { BsFillTelephoneFill ,BsGithub} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='contactMe'>
      <h1 data-aos="fade-down">CONTACT ME</h1>
      <div data-aos="zoom-out" className="contactcontent">
        <img src={logo} alt={logo}/>
        <div className="contact">
            <div data-aos="fade-right" className='contactlink'><GoMail/><a rel="noreferrer noopener" target='_blank' href="mailto:srcn_llc_@hotmail.com"> srcn_llc_@hotmail.com</a></div>
            <div data-aos="fade-left" className='contactlink'><BsFillTelephoneFill/><a rel="noreferrer noopener" target='_blank' href='https://wa.me/905435281944'>0543 528 19 44</a></div>
            <div data-aos="fade-right" className='contactlink'><BsGithub/><a rel="noreferrer noopener" target='_blank' href="https://github.com/srcnllc">GitHub:srcnllc</a></div>
            <div data-aos="fade-left" className='contactlink'><FaLinkedinIn/> <a rel="noreferrer noopener" target='_blank'href="https://www.linkedin.com/in/sercan-l%C3%BClleci-673440125/">Linkedin:Sercan Lülleci</a></div>
            <div data-aos="fade-right" className='contactlink'><AiFillYoutube/><a rel="noreferrer noopener" target='_blank'href="https://www.youtube.com/channel/UCQ7tv6vZbOxDRIAUDQezIFw/videos">Youtube:Sercan Lülleci</a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
