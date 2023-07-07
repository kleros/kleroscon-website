import React, { useRef } from "react";
import styled from "styled-components";
import NormalItems from "./NormalItems";
import { Button } from "@kleros/ui-components-library";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

const Wrapper = styled.div`
  line-height: 0;
  position: relative;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  line-height: normal;
  position: absolute;
  min-width: 248px;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-shadow: 0px 2px 3px ${({ theme }) => theme.color.black + "03"};
  border-radius: 3px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  padding: 28px 16px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primaryBlue};

  p {
    color: ${({ theme }) => theme.color.black};
    font-weight: normal !important;
  }
`;

const Menu: React.FC = () => {
  const ref = useRef(null);

  return (
    <Container>
      <NormalItems />
      <StyledButton text="Register Now" />
    </Container>
  );
};

export default Menu;
