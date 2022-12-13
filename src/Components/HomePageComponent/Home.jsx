import React,{useState} from 'react'
import './Home.css';
import logo from '../../img/ssss.png'
import { useSpring, animated } from 'react-spring'



function Home() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 150,
    onRest: () => set(!flip),
  })

  return (
    <div className='container'>
      <div className="homeContent">
      <animated.h1 style={props}>
        <img src={logo} alt={logo}/>
      </animated.h1>

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
