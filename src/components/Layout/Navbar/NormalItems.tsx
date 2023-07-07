import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";

const Container = styled.div`
  display: flex;
  gap: 32px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;

const ITEMS = [
  {
    text: "Venue",
    url: "https://docs.vea.ninja/faq",
  },
  {
    text: "Speakers",
    url: "https://docs.vea.ninja/",
  },
];

const NormalItems = () => (
  <Container>
    {ITEMS.map(({ text, url }, i) => (
      <StyledA key={i} href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </StyledA>
    ))}
  </Container>
);

export default NormalItems;
