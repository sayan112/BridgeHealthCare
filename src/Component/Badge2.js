import React from "react";
import styled from "styled-components";
import { darkThemeColor, themeColor } from "../uthis";
import AvatarImage from "../assets/avatarImage4.jpg";
function Badge2({
  content,
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <Div clean={clean} glow={glow} paid={paid} late={late}>
      <Avatar>
        <img src={AvatarImage} alt="" />
      </Avatar>
      <div>{content}</div>
    </Div>
  );
}

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 0.7rem;
  font-weight: 500;
   font-size:1.4rem;
  color: white;
  background-color: ${darkThemeColor};
  cursor: pointer;
   width:16rem;
   height:5rem;
display:flex;
 justify-content:center;
  align-items:center;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ paid }) =>
    paid &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}

${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;

export default Badge2;











