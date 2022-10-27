import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name : "Thapa store",
    img: "images/hero.jpg"
  }

  return (
    <HeroSection myData={data} />
  )
}

export default About