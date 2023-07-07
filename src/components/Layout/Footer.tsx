import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import footerURL from "svgs/icons/footer.svg";

// const LINKS = [
//   {
//     Icon: IconTwitter,
//     href: "https://www.twitter.com/vea_eth",
//   },
//   {
//     Icon: IconGithub,
//     href: "https://www.github.com/kleros/vea",
//   },
//   {
//     Icon: IconTelegram,
//     href: "https://t.me/veabridge",
//   },
// ];

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  ${smallScreenStyle(css`
    margin-bottom: 32px;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
  `)}
`;

const Logo = styled.h2`
  text-align: center;
  margin: 20px;

  ${smallScreenStyle(css`
    position: relative;
    font-size: 46px;
  `)}
`;

const StyledLink = styled.a`
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${({ theme }) => theme.color.lightBlue};
    width: 32px;
    transition: fill 0.25s ease, transform 0.25s ease;
    :hover {
      fill: ${({ theme }) => theme.color.blue};
      transform: scale(1.05);
    }
  }
`;

const SocialMedia = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  display: flex;
  gap: 16px;

  ${smallScreenStyle(css`
    position: relative;
    right: 0%;
    margin-top: 30px;
  `)}
`;

const Footer: React.FC = () => (
  <Container>
    <img src={footerURL} alt="Kleros Court Icon" />;
  </Container>
);

export default Footer;
