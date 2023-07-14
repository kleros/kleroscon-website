import React from "react";
import styled, { css } from "styled-components";
import { Button } from "@kleros/ui-components-library";
import { smallScreenStyle } from "styles/smallScreenStyle";
import SectionSeparator from "tsx:svgs/section-separator.svg";

interface IAboutUs {}

const Container = styled.div`
  display: flex;
  margin: calc(48px + (128 - 48) * ((100vw - 300px) / (1250 - 300))) 0px;
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

const AdjectiveWithPlus = styled.div`
  display: flex;
`;

const AdjectivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  ${smallScreenStyle(css`
    justify-content: space-between;
    max-width: 240px;
    justify-content: center;
    margin: auto;
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
`;

const StyledAdjective = styled.span`
  color: ${({ theme }) => theme.color.darkLilac};
  font-size: 16px;
  line-height: 21.79px;
  margin: 0 12px;
`;

const StyledPlus = styled.small`
  color: ${({ theme }) => theme.color.primaryBlue};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const StyledA = styled.a`
  text-decoration: none;
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
            <AdjectiveWithPlus key={adjective}>
              <StyledAdjective>{adjective}</StyledAdjective>
              {index < ADJECTIVES.length - 1 && <StyledPlus>+</StyledPlus>}
            </AdjectiveWithPlus>
          ))}
        </AdjectivesContainer>

        <StyledA href="https://docs.kleros.io" target="_blank">
          <StyledButton text="Learn More" />
        </StyledA>
      </Container>
      <StyledSectionSeparatorPurple />
    </>
  );
};
export default AboutUs;
