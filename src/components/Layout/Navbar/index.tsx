import React from "react";
import styled, { css } from "styled-components";
import KlerosIcon from "tsx:svgs/icons/kleros.svg";
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

const StyledKlerosIcon = styled(KlerosIcon)`
  position: absolute;
  left: 3%;
  width: 148px;
  height: 48px;
`;

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <StyledKlerosIcon />
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
};

export default Navbar;
