import React from "react";
import styled from "styled-components";
import bannerURL from "svgs/icons/banner.svg";
import klerosConTextURL from "svgs/icons/kleroscon-text.svg";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.lightPurple};
  width: 100vw;
`;

interface IBanner {}

const Banner: React.FC<IBanner> = ({}) => {
  return (
    <Container>
      <img src={bannerURL} alt="Kleros Court Icon" />
    </Container>
  );
};
export default Banner;
