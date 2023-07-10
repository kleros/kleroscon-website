import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import Venue1 from "tsx:svgs/icons/venue-1.svg";
import Venue2 from "tsx:svgs/icons/venue-2.svg";
import LocationIcon from "tsx:svgs/icons/location.svg";
import SectionSeparator from "tsx:svgs/section-separator.svg";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vw;
  margin-top: 24px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  ${smallScreenStyle(css`
    justify-content: space-between;
    gap: 24px;
    width: 80%;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 16px;
  `)};
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${smallScreenStyle(css`
    position: static;
    translate: none;
    width: 80%;
    max-width: 400px;
  `)};
`;

const Venue1Image = styled(StyledSvg)`
  transform: translate(-20%, -95%) scale(1.25);
  z-index: 0;
  ${smallScreenStyle(css`
    transform: none;
  `)};
`;

const Venue2Image = styled(StyledSvg)`
  z-index: 1;
  transform: translate(-90%, -30%) scale(1);
  ${smallScreenStyle(css`
    transform: none;
  `)};
`;

const VenueHeader = styled.div`
  position: absolute;
  top: 17%;
  padding-bottom: 20%;
  left: 4%;

  ${smallScreenStyle(css`
    position: static;
    margin-top: 0;
    text-align: center;
    padding-bottom: 5%;

    h2 {
      padding-bottom: 0;
    }
  `)};

  h2 {
    margin-bottom: 6%;
    color: ${({ theme }) => theme.color.white};
    font-size: calc(36px + (48 - 36) * (100vw - 375px) / (1085 - 375));
    line-height: 65px;
    font-weight: 600;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: ${({ theme }) => theme.color.lightBlue};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-left: 32px;
    ${smallScreenStyle(css`
      align-items: center;
      margin-left: 0;
    `)};
  }
  ${smallScreenStyle(css`
    align-items: center;
  `)};
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  small {
    word-wrap: break-word;
    color: ${({ theme }) => theme.color.white};
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    width: calc(140px + (250 - 140) * (100vw - 375px) / (1085 - 375));
    ${smallScreenStyle(css`
      width: fit-content;
    `)};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const AddressText = styled.p`
  position: absolute;
  right: 4%;
  top: 50%;
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: calc(13px + (16 - 13) * (100vw - 375px) / (1085 - 375));
  font-weight: 400;
  line-height: 21px;
  margin-top: 6%;
  text-align: end;
  ${smallScreenStyle(css`
    position: static;
    margin-top: 8px;
  `)};
`;

const StyledSectionSeparatorBlue = styled(SectionSeparator)`
  stroke: ${({ theme }) => theme.color.blue};
  width: 91vw;
`;

const Venue: React.FC = () => {
  return (
    <>
      <Container id="Venue">
        <VenueHeader>
          <h2>The Venue</h2>
          <LocationContainer>
            <AddressContainer>
              <LocationIcon />
              <small>PAVILHÃO CARLOS LOPES</small>
            </AddressContainer>
            <p>Lisbon, Portugal</p>
          </LocationContainer>
        </VenueHeader>
        <ImagesContainer>
          <Venue1Image as={Venue1} />
          <Venue2Image as={Venue2} />
        </ImagesContainer>
        <AddressText>
          Av. Sidónio Pais 16, 1070-051 Lisboa, Portugal
        </AddressText>
      </Container>
      <StyledSectionSeparatorBlue />
    </>
  );
};

export default Venue;
