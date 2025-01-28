import styled from "styled-components";

export const MainScreen = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  gap: 5rem;
`;

export const TextSkills = styled.h1`
  color: #d45a03;
  font-family: "Poppins";
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
`;

export const SkillsTable = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const ListSkills = styled.ul`
  text-decoration: none;
`;

export const ListItem = styled.li`
  font-family: "Poppins";
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  list-style: none;
`;
