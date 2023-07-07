import React from "react";
import styled from "styled-components";
import newsletterCardURL from "svgs/icons/newsletter-card.svg";

interface INewsletterCard {}

const Container = styled.div`
  height: 553px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const NewsletterCard: React.FC<INewsletterCard> = ({}) => {
  return (
    <Container>
      <img src={newsletterCardURL} alt="Kleros Court Icon" />;
    </Container>
  );
};
export default NewsletterCard;
