import React from "react";
import styled from "@emotion/styled";
import homeImage from "../images/heros/laptop-2434393_1280.jpg";

const Root = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  :after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: background 0.8s linear;
    background-image: url(${(props) => props.bgImg});
    filter: contrast(115%) opacity(0.9);
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const TitleGroup = styled.div`
  position: relative;
  top: 33vh;
  width: 90%;
  max-width: 500px;
  padding: 10px 20px 20px;
  border: 2px solid rgba(127, 125, 105, 0.8);
  background-color: rgba(230, 230, 230, 0.8);
  margin: 0 auto;
`;
const MainTitle = styled.h1`
  font-size: 3em;
  font-family: Roboto;
  font-weight: 100;
  text-align: center;
  text-shadow: 1px 1px 1px #555;
  color: #0a0a0a;
`;
const SubTitle = styled.h2`
  font-weight: 100;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  text-shadow: 1px 1px 3px #555;
  color: #0a0a0a;
`;

const Home = React.forwardRef((props, ref) => (
  <Root bgImg={homeImage} ref={ref}>
    <TitleGroup>
      <MainTitle>Muhammad Bandawa</MainTitle>
      <SubTitle>Software / CyberSecurity / Web</SubTitle>
    </TitleGroup>
  </Root>
));

export default Home;
