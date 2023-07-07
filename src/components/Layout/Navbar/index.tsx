import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import klerosIconURL from "svgs/icons/kleros.svg";
import Menu from "./Menu";

const Container = styled.div`
  height: 68px;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.lightPurple};
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-image-slice: 1;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = forwardRef((_, ref) => (
  <Container ref={ref}>
    <StyledLogo>
      <img src={klerosIconURL} alt="Kleros Court Icon" />
    </StyledLogo>
    <StyledLogo>
      <Menu />
    </StyledLogo>
  </Container>
));
Navbar.displayName = "Navbar";

export default Navbar;
