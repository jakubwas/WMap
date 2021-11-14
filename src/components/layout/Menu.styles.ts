import styled from "styled-components";
import { device } from "../../styles";

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;

export const StyledMenuList = styled.div<{ mode: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: ${(props) => (props.mode === "countries" ? "80%" : "50%")};
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const StyledSelectMode = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: black;
  text-align: center;
  background: white;

  @media ${device.dL1} {
    font-size: 3.5rem;
  }
`;
