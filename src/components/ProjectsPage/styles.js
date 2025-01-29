import styled from "styled-components";

export const MainScreen = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5rem;
`;

export const TextProjects = styled.h1`
  color: #d45a03;
  font-family: "Poppins";
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
`;

export const CardProjeto = styled.div`
  width: 75vw;
  height: 40vh;
  border: 1px solid #fff;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ImgCard = styled.img`
  width: 14.5rem;
  height: 12.2rem;
  border-radius: 2.5rem;
  margin-top: 1.5rem;
`;

export const TituloProjeto = styled.p`
  font-family: "Bebas Neue";
  font-size: 1.6rem;
  color: #fff;
  letter-spacing: 1px;

  a {
    text-decoration: none;
    font-style: normal;
    color: #fff;
  }
`;
