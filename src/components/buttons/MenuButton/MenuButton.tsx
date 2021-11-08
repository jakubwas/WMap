import React, { ReactChildren, ReactChild } from "react";
import {
  StyledMainContainer,
  StyledButtonContainer,
  StyledBtn,
} from "./MenuButton.styles";

interface ComponentProps {
  children: ReactChild | ReactChildren;
}

const MenuButton = (props: ComponentProps) => (
  <StyledMainContainer>
    <StyledButtonContainer>
      <StyledBtn className="menu-btn-effect">
        <span>{props.children}</span>
      </StyledBtn>
    </StyledButtonContainer>
  </StyledMainContainer>
);

export default MenuButton;
