import React from 'react'
import './style.css'
import Me from './images/Group 77.png'
const Hero = () => {
  return (
    <section className='hero--container'>
     <img src={Me} alt="" className='hero--photo'/>
    
     <h1 className='hero--header'>Online Experiences</h1>
     <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
     </p>
    </section>
  )
}

export default Hero
