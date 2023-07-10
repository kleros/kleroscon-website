import React from "react";
import styled, { css } from "styled-components";
import { Button } from "@kleros/ui-components-library";
import { smallScreenStyle } from "styles/smallScreenStyle";
import SectionSeparator from "tsx:svgs/section-separator.svg";

interface IAboutUs {}

const Container = styled.div`
  display: flex;
  margin-top: calc(64px + (128 - 64) * ((100vw - 300px) / (1250 - 300)));
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 90vw;
  gap: 32px;

  ${smallScreenStyle(css`
    align-items: center;
    text-align: center;
  `)};
`;

const AdjectivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  ${smallScreenStyle(css`
    justify-content: center;
  `)};
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

const StyledDescription = styled.div`
  display: flex;
  font-size: 24px;
  color: ${({ theme }) => theme.color.lightBlue};
  width: calc(275px + (500 - 275) * ((100vw - 300px) / (1250 - 300)));
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.darkLilac};

  p {
    color: ${({ theme }) => theme.color.black};
    font-weight: normal !important;
  }
`;

const StyledSectionSeparatorPurple = styled(SectionSeparator)`
  stroke: ${({ theme }) => theme.color.lightPurple};
  width: 91vw;
  margin-top: calc(64px + (128 - 64) * ((100vw - 300px) / (1250 - 300)));
`;

const StyledAdjective = styled.span`
  color: ${({ theme }) => theme.color.darkLilac};
  font-size: 16px;
  line-height: 21.79px;
`;

const StyledPlus = styled.small`
  color: ${({ theme }) => theme.color.primaryBlue};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin: 0 12px;
`;

const ADJECTIVES = ["FAST", "AFFORDABLE", "TRANSPARENT", "FAIR"];

const AboutUs: React.FC<IAboutUs> = ({}) => {
  return (
    <>
      <Container>
        <StyledTitle>About Us</StyledTitle>
        <StyledDescription>
          Kleros is the leading decentralized arbitration service for the
          disputes of the new economy
        </StyledDescription>
        <AdjectivesContainer>
          {ADJECTIVES.map((adjective, index) => (
            <React.Fragment key={adjective}>
              <StyledAdjective>{adjective}</StyledAdjective>
              {index < ADJECTIVES.length - 1 && <StyledPlus>+</StyledPlus>}
            </React.Fragment>
          ))}
        </AdjectivesContainer>

        <StyledButton text="Learn More" />
      </Container>
      <StyledSectionSeparatorPurple />
    </>
  );
};
export default AboutUs;
