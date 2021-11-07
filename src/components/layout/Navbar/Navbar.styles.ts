import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: rgb(0, 31, 63);
  height: 7vh;
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  margin-right: 1.2rem;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.3rem;
  margin: 0.4rem 0;
  background: white;
`;
