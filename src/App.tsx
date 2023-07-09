import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Banner from "components/Banner";
import Venue from "components/Venue";
import Countdown from "./components/Countdown";
import AboutUs from "./components/AboutUs";
import Speakers from "./components/Speakers";
import Newsletter from "./components/Newsletter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MiddleSections = styled.div`
  max-width: 1700px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
`;

const App = () => {
  return (
    <Layout>
      <Banner />
      <Countdown />
      <AboutUs />
      <Venue />
      <Speakers />
      <Newsletter />
    </Layout>
  );
};

export default App;
