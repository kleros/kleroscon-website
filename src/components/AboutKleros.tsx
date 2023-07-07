import React from "react";
import styled from "styled-components";
import AboutKlerosIcon from "tsx:svgs/icons/about-kleros.svg";

interface IAboutKleros {}

const Container = styled.div`
  height: 553px;
  display: flex;
  overflow-x: hidden;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const AboutKleros: React.FC<IAboutKleros> = ({}) => {
  return (
    <Container>
      {/* <img src={aboutKlerosURL} alt="Kleros Court Icon" />; */}
      <AboutKlerosIcon />
    </Container>
  );
};
export default AboutKleros;
