import styled from "styled-components";

export const MainScreen = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 2rem;
  z-index: -1;
`;

export const TextAbout = styled.h1`
  color: #d45a03;
  font-family: "Poppins";
  font-size: 2.8rem;
  font-weight: bold;
  padding: 2rem 0rem;
`;

export const ImgAbout = styled.img`
  width: 15rem;
  height: 15rem;
`;

export const TextInfoMe = styled.h3`
  color: #fff;
  font-family: "Poppins";
  font-size: 1.1rem;
  font-weight: 400;
  width: 77vw;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.55rem;
`;
