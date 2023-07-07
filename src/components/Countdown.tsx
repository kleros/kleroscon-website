import React from "react";
import styled from "styled-components";
import countdownURL from "svgs/icons/countdown.svg";

interface ICountdown {}

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.darkPurple};
  width: 100vw;
`;

const Countdown: React.FC<ICountdown> = ({}) => {
  return (
    <Container>
      <img src={countdownURL} alt="Kleros Court Icon" />;
    </Container>
  );
};
export default Countdown;
