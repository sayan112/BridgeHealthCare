import React from 'react'
import { cardShadow, hoverEffect } from '../uthis';
import styled from "styled-components";
import Badge2 from './Badge2.js';

const SmallBadge = () => {
  return (
    <SmallContainer>
     
          <Badge2 content="Lymphosis" paid/>
        
          <Badge2 content="Neutrophils" late />
 
        <Badge2 content="Monocytus" paid />
        <Badge2 content="Besophils" late />
    </SmallContainer>
  );
}


const SmallContainer = styled.div`
  margin-left: 2rem;
  margin-right:2rem;
  width: 28rem;
  border-radius: 3rem;
  margin-top: 1rem;
  background-color: white;
  height: 88%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
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





export default SmallBadge













