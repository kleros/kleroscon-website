import React from "react";
import styled from "styled-components";

interface ISpeakers {}

const Container = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

const StyledSubtitle = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.lightPurple};
  margin-top: 48px;
  justify-content: center;
`;

const Speakers: React.FC<ISpeakers> = ({}) => {
  return (
    <Container>
      Speakers
      <StyledSubtitle>To be confirmed</StyledSubtitle>
    </Container>
  );
};
export default Speakers;
