import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
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

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px 0 rgba(128, 0, 128, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(128, 0, 128, 0.5);
  }
  100% {
    box-shadow: 0 0 5px 0 rgba(128, 0, 128, 0.5);
  }
`;

const TitleGroup = styled.div`
  position: relative;
  top: 33vh;
  width: 110%;
  max-width: 600px;
  padding: 10px 20px 20px;
  border: 2px solid rgba(127, 125, 105, 0.8);
  background-color: rgba(230, 230, 230, 0.8);
  margin: 0 auto;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    animation: ${pulseGlow} 1.5s infinite;
  }
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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const MiniTitle = styled.h3`
  font-weight: 100;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  text-shadow: 1px 1px 3px #555;
  color: #0a0a0a;
  height: 1.5em;
  display: flex;
  justify-content: center;
`;

const AnimatedText = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 3.5s steps(40, end) infinite alternate;
`;

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Separator = styled.span`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-play-state: ${(props) =>
    props.shouldAnimate ? "running" : "paused"};
`;

const AnimatedWord = styled.span`
  display: inline-block;
  opacity: 0;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-play-state: ${(props) =>
    props.shouldAnimate ? "running" : "paused"};
`;

const Software = styled(AnimatedWord)`
  animation-name: ${fadeInFromTop};
`;

const Cybersecurity = styled(AnimatedWord)`
  animation-name: ${fadeInFromBottom};
`;

const Web = styled(AnimatedWord)`
  animation-name: ${fadeInFromTop};
`;

const TypingText = () => {
  const text = "I Make Stuff";

  return (
    <MiniTitle>
      <AnimatedText>{text}</AnimatedText>
    </MiniTitle>
  );
};

const Home = React.forwardRef((props, ref) => {
  const [shouldAnimateSeparators, setShouldAnimateSeparators] = useState(false);
  const [shouldAnimateWords, setShouldAnimateWords] = useState(false);

  useEffect(() => {
    const separatorTimer = setTimeout(() => {
      setShouldAnimateSeparators(true);
    }, 2000); // 2 seconds delay for separators

    const wordTimer = setTimeout(() => {
      setShouldAnimateWords(true);
    }, 3500); // 3.5 seconds delay for words (2s + 1.5s)

    return () => {
      clearTimeout(separatorTimer);
      clearTimeout(wordTimer);
    };
  }, []);

  return (
    <Root bgImg={homeImage} ref={ref}>
      <TitleGroup>
        <MainTitle>Muhammad Bandawa</MainTitle>
        <SubTitle>
          <Software shouldAnimate={shouldAnimateWords}>Software</Software>
          <Separator shouldAnimate={shouldAnimateSeparators}> | </Separator>
          <Cybersecurity shouldAnimate={shouldAnimateWords}>
            CyberSecurity
          </Cybersecurity>
          <Separator shouldAnimate={shouldAnimateSeparators}> | </Separator>
          <Web shouldAnimate={shouldAnimateWords}>Web</Web>
        </SubTitle>
        <TypingText />
      </TitleGroup>
    </Root>
  );
});

export default Home;
