import React from "react";
import styled from "styled-components";
import SectionSeparator from "tsx:svgs/section-separator.svg";

interface ISpeakers {}

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  margin: calc(48px + (80 - 48) * ((100vw - 300px) / (1250 - 300))) 0px;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
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
`;

const StyledSectionSeparatorPurple = styled(SectionSeparator)`
  stroke: ${({ theme }) => theme.color.lightPurple};
  width: 91vw;
`;

const Speakers: React.FC<ISpeakers> = ({}) => {
  return (
    <Container id="Speakers">
      <InnerContainer>
        <StyledTitle>Speakers</StyledTitle>
        <StyledSubtitle>To be confirmed</StyledSubtitle>
      </InnerContainer>

      <StyledSectionSeparatorPurple />
    </Container>
  );
};
export default Speakers;
