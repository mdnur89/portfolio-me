import React from "react";
import styled from "@emotion/styled";
import { logoUrls } from "../data/imgUrls";
import { Section, SectionHeading, Paragraph } from "./shared";
import { FaLaptopCode, FaShieldAlt, FaUserGraduate } from "react-icons/fa";

const AboutSection = styled(Section)`
  background-color: #191919;
  color: #fff;
`;

const LogoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    height: 64px;
    margin-right: 24px;
    margin-top: 15px;

    @media (max-width: 708px) {
      height: 32px;
    }
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  flex: 1 1 0; // Added this line
  flex-basis: 200px; // Added this line

  &:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .feature-title {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .feature-subtitle {
    font-size: 1rem;
    text-align: center;
  }
`;

const AboutMe = React.forwardRef((props, ref) => {
  function getLogos() {
    return Object.keys(logoUrls)
      .filter((e, i) => i < 14)
      .map((key) => <img key={logoUrls[key]} src={logoUrls[key]} alt={key} />);
  }

  return (
    <AboutSection ref={ref}>
      <div style={{ maxWidth: "700px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <FeatureContainer>
            <FaLaptopCode className="feature-icon" />
            <h3 className="feature-title">Software Dev</h3>
            <p className="feature-subtitle">
              Experienced in building web and mobile applications.
            </p>
          </FeatureContainer>
          <FeatureContainer>
            <FaShieldAlt className="feature-icon" />
            <h3 className="feature-title">Cybersecurity Practitioner</h3>
            <p className="feature-subtitle">
              Skilled in penetration testing and security incident management.
            </p>
          </FeatureContainer>
          <FeatureContainer>
            <FaUserGraduate className="feature-icon" />
            <h3 className="feature-title">Web dev</h3>
            <p className="feature-subtitle">
              Continuously expanding my skills and knowledge.
            </p>
          </FeatureContainer>
        </div>
        <SectionHeading>whoami</SectionHeading>
        <Paragraph>
          I'm a CyberSecurity Practitioner, software & web developer with a
          background in electronic systems design.
        </Paragraph>
        <Paragraph>
          More than ten years ago my interest in coding led me to teach myself
          enough to code my first few 'apps' then a 'homelab'. Ever since then
          I&rsquo;ve known coding was what I really want to do.
        </Paragraph>
        <Paragraph>
          I'm currently all the above and open to hire. Skilled in development,
          penetration testing, regulatory compliance, and security incident
          management. My goal is to provide advanced security solutions to help
          protect digital assets. Continually seeking to expand my skills and
          knowledge and tackle new challenges.
        </Paragraph>
        <LogoGroup>{getLogos()}</LogoGroup>
      </div>
    </AboutSection>
  );
});

export default AboutMe;
