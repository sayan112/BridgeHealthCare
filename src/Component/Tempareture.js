import React from 'react'
 import Temp from '../assets/Temp.png'

 import styled from "styled-components";
 import { cardShadow, hoverEffect } from "../uthis";

const Tempareture = () => {
  return (
    <InvoicesContainer>
      <img src={Temp} alt="img"/>
    </InvoicesContainer> 
  )
}

const InvoicesContainer = styled.div`
  margin-left: 4rem;
  width: 20rem;
  border-radius: 2rem;
  margin-top: 1rem;
  background-color: white;
  height: 80%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Tempareture
