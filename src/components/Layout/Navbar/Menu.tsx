import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { useToggle, useWindowSize, useLockBodyScroll } from "react-use";
import { Button } from "@kleros/ui-components-library";
import HamburgerIcon from "tsx:svgs/icons/hamburger.svg";
import MenuItems from "./MenuItems";
import { smallScreenStyle } from "styles/smallScreenStyle";
import { useFocusOutside } from "hooks/useFocusOutside";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0 48px;
  ${smallScreenStyle(css`
    visibility: hidden;
    display: none;
  `)}
`;

const HamburgerMenu = styled.div`
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  display: none;
  visibility: hidden;
  background-color: ${({ theme }) => theme.color.dark};
  box-shadow: 0px 2px 3px "#00000002";
  ${smallScreenStyle(css`
    visibility: visible;
    position: absolute;
    top: 46px;
    right: 0;
    width: 100vw;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 1;
  `)}

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primaryBlue};
  ${smallScreenStyle(css`
    :hover {
      transform: scale(1.02);
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.5, 0, 0.05, 1);
    }
  `)};
  p {
    color: ${({ theme }) => theme.color.black};
    font-weight: normal !important;
  }
`;

const HamburgerContainer = styled.div`
  padding-right: 32px;
`;

const StyledHamburger = styled(HamburgerIcon)`
  fill: ${({ theme }) => theme.color.grey};
  visibility: hidden;
  ${smallScreenStyle(css`
    width: 24px;
    height: 24px;
    visibility: visible;
  `)};
`;

const Menu: React.FC = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { width } = useWindowSize();
  const containerRef = useRef(null);
  useLockBodyScroll(isOpen);
  useFocusOutside(containerRef, () => {
    toggleOpen(false);
  });
  const isSmallScreen = useWindowSize().width <= 768;
  const showMenuContainer = !isSmallScreen || isOpen;

  useEffect(() => {
    if (width > 768) {
      toggleOpen(false);
    }
  }, [width]);

  return (
    <Container ref={containerRef}>
      <HamburgerContainer>
        <StyledHamburger onClick={toggleOpen} />
      </HamburgerContainer>
      {showMenuContainer && (
        <MenuContainer>
          <MenuItems />
          <StyledButton text="Register Now" />
        </MenuContainer>
      )}
      <HamburgerMenu isOpen={isOpen}>
        <MenuItems />
        <StyledButton text="Register Now" />
      </HamburgerMenu>
    </Container>
  );
};

export default Menu;
