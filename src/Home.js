import React from 'react'
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
 
const Home = () => {
  const data = {
    name : "Thapa E-commerce",
    img: "images/hero.jpg"

  }
  return (
    // <Wrapper className="test">Home</Wrapper>
    <>
    <HeroSection myData={data}/>
    <Services/>
    <Trusted/>
    </>
  )
};

// const Wrapper = styled.section`
// background-color : ${({theme})=> theme.colors.bg };
// `;

export default Home