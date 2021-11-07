import styled from "styled-components";
// import "../Buttons/menuButton.css";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const SelectMode = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
  background: white;
`;
