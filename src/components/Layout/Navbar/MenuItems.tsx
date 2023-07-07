import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";

const Container = styled.div`
  display: flex;
  gap: 32px;
  ${smallScreenStyle(css`
    gap: 24px;
    flex-direction: column;
  `)};
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  ${smallScreenStyle(css`
    :hover {
      transform: scale(1.02);
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.5, 0, 0.05, 1);
    }
  `)};
`;

const ITEMS = [
  {
    text: "Venue",
  },
  {
    text: "Speakers",
  },
];

const MenuItems: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      {ITEMS.map(({ text }, i) => (
        <StyledA
          key={text}
          onClick={() => scrollToSection(text)}
          rel="noopener noreferrer"
        >
          {text}
        </StyledA>
      ))}
    </Container>
  );
};

export default MenuItems;
