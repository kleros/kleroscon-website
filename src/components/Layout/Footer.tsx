import React from "react";
import styled, { css } from "styled-components";
import FooterBackground from "tsx:svgs/icons/footer-background.svg";
import KlerosConText from "tsx:svgs/icons/kleroscon-text.svg";
import SecuredByKleros from "tsx:svgs/icons/secured-by-kleros.svg";
import IconTwitter from "tsx:svgs/icons/twitter.svg";
import IconGithub from "tsx:svgs/icons/github.svg";
import IconTelegram from "tsx:svgs/icons/telegram.svg";
import IconDiscord from "tsx:svgs/icons/discord.svg";
import IconGhostBlog from "tsx:svgs/icons/ghost-blog.svg";
import DecorativeLine from "tsx:svgs/icons/decorative-line.svg";
import { smallScreenStyle } from "styles/smallScreenStyle";

const LINKS = [
  {
    Icon: IconTwitter,
    href: "https://www.twitter.com/kleros_io",
  },
  {
    Icon: IconTelegram,
    href: "https://t.me/kleros",
  },
  {
    Icon: IconDiscord,
    href: "https://discord.com/invite/MhXQGCyHd9",
  },
  {
    Icon: IconGhostBlog,
    href: "https://blog.kleros.io/",
  },
  {
    Icon: IconGithub,
    href: "https://www.github.com/kleros",
  },
];

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px;
  background: linear-gradient(90deg, #7e1bd4 0%, #b45fff 100%);

  ${smallScreenStyle(css`
    height: 280px;
  `)}
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 32px;
  ${smallScreenStyle(css`
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  `)};
`;

const StyledFooterBackground = styled(FooterBackground)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${smallScreenStyle(css`
    visibility: hidden;
  `)};
`;

const StyledKlerosConText = styled(KlerosConText)`
  display: flex;
  height: 69px;
  justify-content: flex-start;

  ${smallScreenStyle(css`
    width: 300px;
  `)}
`;

const StyledSecuredByKleros = styled(SecuredByKleros)`
  width: 201px;
  height: 27px;
  margin-top: 32px;
  ${smallScreenStyle(css`
    top: 100%;
    left: 0%;
  `)}
`;

const LeftSide = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${smallScreenStyle(css`
    align-items: center;
  `)}
`;

const StyledLink = styled.a`
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${({ theme }) => theme.color.secondaryDarkPurple};
    width: 32px;
    transition: fill 0.25s ease, transform 0.25s ease;
    :hover {
      fill: ${({ theme }) => theme.color.darkPurple};
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
  gap: 32px;
  z-index: 2;
  max-width: calc(150px + (350 - 150) * ((100vw - 300px) / (1250 - 300)));
  flex-wrap: wrap;

  ${smallScreenStyle(css`
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: 100%;
    justify-content: center;
    margin-top: 48px;
    flex-wrap: nowrap;
  `)}
`;

const Footer: React.FC = () => (
  <>
    <DecorativeLine />
    <Container>
      <StyledFooterBackground />
      <InnerContainer>
        <LeftSide>
          <StyledKlerosConText />
          <StyledSecuredByKleros />
        </LeftSide>
        <SocialMedia>
          {LINKS.map(({ href, Icon }) => (
            <StyledLink
              key={href}
              {...{ href }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </StyledLink>
          ))}
        </SocialMedia>
      </InnerContainer>
    </Container>
  </>
);

export default Footer;
