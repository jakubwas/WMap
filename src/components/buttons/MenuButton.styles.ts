import styled from "styled-components";
import { device } from "../../styles";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 4rem 0;

  .menu-btn-effect {
    color: #fff;
    border: 2px solid rgb(211, 211, 211);
    background-color: #001f3f;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  .menu-btn-effect:hover {
    border: 2px solid #001f3f;
    background-color: #fff;
    box-shadow: 0px 0px 0px 4px #eee inset;
  }

  .menu-btn-effect span {
    transition: all 0.2s ease-out;
    z-index: 2;
  }
  .menu-btn-effect:hover span {
    letter-spacing: 0.13em;
    color: #333;
  }

  .menu-btn-effect:after {
    background: #fff;
    border: 0px solid #000;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 1;
  }
  .menu-btn-effect:hover:after {
    background: #fff;
    border: 20px solid #000;
    opacity: 0;
    left: 120%;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }

  .link {
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    font-weight: 500;
    pointer-events: all;
  }

  .link:hover {
    color: black;
  }
`;

export const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  width: 20rem;
  padding-bottom: 1rem;
  pointer-events: none;
`;

export const StyledBtn = styled.div`
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 3.8rem;
  border-radius: 10px;
  max-width: 16rem;
  position: relative;
  text-transform: uppercase;
  width: 100%;

  @media ${device.dL1} {
    max-width: 18rem;
    line-height: 4.4rem;
  }

  span {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
