import React from 'react'
import HeroSection from './components/HeroSection'
import {  useProductContext } from './context/productcontext';

const About = () => {
  const {myName} = useProductContext();
  const data = {
    name : "Thapa store",
    img: "images/hero.jpg"
  }

  return (
    <>
    {myName}
    <HeroSection myData={data} />
    </>
  )
}

export default About