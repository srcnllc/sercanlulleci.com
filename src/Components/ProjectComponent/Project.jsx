import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Project.css';
import youtube from '../../logo/youtube.png'
import github from '../../logo/github.png'
import dbarray from '../../db'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Project() {

  
    const [data, setData] = useState([])

    useEffect(() => {
      console.log(dbarray.project)
      setData(dbarray.project)
      AOS.init({duration:2000})
    }, [])
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='ProjectContent'>
        <h2 data-aos="fade-down">MY PROJECTS</h2>
        <Slider {...settings}>
            {data.map((item, index) =>
              <div className='projectCard' key={index} >
                <div className="pcard" data-aos="fade-up">
                  <h4>{item.ProjectId}-{item.ProjectName.toUpperCase()}</h4>
                  <img src={item.img} alt={item.ProjectName} className='image'/>
                 <div className="linkItem">
                   <a href={item.link} rel="noreferrer noopener" target='_blank'><img className='l_icon' src={youtube} alt='Youtube'/></a>
                   <a href={item.gitHub} rel="noreferrer noopener" target='_blank'> <img className='l_icon' src={github} alt='GitHub'/></a>
                 </div>
                </div>
              </div>

          )}

        </Slider>
    </div>
  )
}

export default Project
