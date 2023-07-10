import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import KlerosLogo from "svgs/icons/hero-image.png";
import Background from "svgs/icons/hero-background.png";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 78px 4%;
  background-color: ${({ theme }) => theme.color.lightPurple};
  width: 100vw;
  ${smallScreenStyle(css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
  `)};
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 1;
  max-width: 500px;
  white-space: pre-wrap;
  width: calc(425px + (500 - 425) * (100vw - 375px) / (1085 - 375));
  h1 {
    font-size: 6rem;
    font-weight: 600;
    line-height: 130px;
    background: linear-gradient(90deg, #1b003f 0%, #7e1bd4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 43px;
    word-wrap: break-word;
  }

  ${smallScreenStyle(css`
    max-width: 350px;
    text-align: center;
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.75rem;
    }
  `)};
`;

const ImageContainer = styled.div`
  max-width: calc(60% + (100% - 60%) * (100vw - 375px) / (1085 - 375));
  max-height: calc(60% + (100% - 60%) * (100vw - 375px) / (1085 - 375));
  ${smallScreenStyle(css`
    max-width: 60%;
    max-height: 60%;
  `)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>KlerosCon</h1>
        <p>Decentralized Justice at the Dawn of the Blockchain and AI age</p>
      </Header>
      <ImageContainer>
        <Image src={KlerosLogo} alt="Kleros Icon with diamonds" />
      </ImageContainer>
      <BackgroundImageContainer>
        <img src={Background} alt="Kleros Icon" />
      </BackgroundImageContainer>
    </Container>
  );
};
export default Hero;
