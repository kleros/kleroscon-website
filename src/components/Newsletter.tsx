import React from "react";
import styled from "styled-components";
import { Button } from "@kleros/ui-components-library";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkPurple};
  width: calc(240px + (1080 - 240) * ((100vw - 300px) / (1250 - 300)));
  padding: 26px calc(16px + (64 - 16) * ((100vw - 300px) / (1250 - 300)));
  margin-top: 128px;
  margin-bottom: 96px;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.color.lightPurple},
      ${({ theme }) => theme.color.blue}
    );
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primaryBlue};

  p {
    color: ${({ theme }) => theme.color.black};
    font-weight: normal !important;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Text>Stay up to date!</Text>
      <StyledButton text="Newsletter" />
    </Container>
  );
};

export default Newsletter;
