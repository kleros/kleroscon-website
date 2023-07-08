import React from "react";
import styled from "styled-components";
import SectionSeparator from "tsx:svgs/section-separator.svg";

interface ISpeakers {}

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 143px;
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

const StyledSectionSeparatorBlue = styled(SectionSeparator)`
  stroke: ${({ theme }) => theme.color.blue};
  width: 91vw;
`;

const StyledSectionSeparatorPurple = styled(SectionSeparator)`
  stroke: ${({ theme }) => theme.color.lightPurple};
  width: 91vw;
`;

const Speakers: React.FC<ISpeakers> = ({}) => {
  return (
    <Container>
      <StyledSectionSeparatorBlue />
      <InnerContainer>
        <StyledTitle>Speakers</StyledTitle>
        <StyledSubtitle>To be confirmed</StyledSubtitle>
      </InnerContainer>

      <StyledSectionSeparatorPurple />
    </Container>
  );
};
export default Speakers;
