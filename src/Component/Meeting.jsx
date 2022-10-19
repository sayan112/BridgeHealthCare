import React from "react";
import styled from "styled-components";
import Badge from "./Badge.jsx";
import { cardShadow, hoverEffect } from "../uthis";
 import AvatarImage from "../assets/avatarImage5.jpg";
 import AvatarImage2 from "../assets/avatarImage6.jpg";
  import AvatarImage3 from "../assets/avatarImage2.jpg";
 

function Meeting() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="img" />
            </Avatar>
            <TextContainer>
              <Title>Alexander Williams</Title>
              <SubTitle>Report</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="OnGoing" paid />
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="img" />
            </Avatar>
            <TextContainer>
              <Title>John Philips</Title>
              <SubTitle>Inchor Associates</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="8.50AM" late />
  
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage3} alt="img" />
            </Avatar>
            <TextContainer>
              <Title>Maria Jenipher</Title>
              <SubTitle>Weekly visit</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="9.40AM" late />
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 30rem;
  border-radius: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  background-color: white;
  height: 80%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
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

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
   font-size:1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default Meeting;
