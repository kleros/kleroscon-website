import React from "react";
import styled from "styled-components";
import aboutKlerosURL from "svgs/icons/about-kleros.svg";

interface IAboutKleros {}

const Container = styled.div`
  height: 553px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const AboutKleros: React.FC<IAboutKleros> = ({}) => {
  return (
    <Container>
      <img src={aboutKlerosURL} alt="Kleros Court Icon" />;
    </Container>
  );
};
export default AboutKleros;
