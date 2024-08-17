import React, { useState, useEffect } from "react";
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

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BentoItem = styled.div`
  perspective: 1000px;
  height: 300px;
  transition: transform 0.8s;
  ${({ isFlipped }) =>
    isFlipped &&
    `
    transform: scale(1.15);
    z-index: 1;
  `}
`;

const BentoInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ isFlipped, flipDirection }) =>
    isFlipped &&
    `
    transform: ${getFlipTransform(flipDirection)};
  `}
`;

const BentoFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.5rem;
`;

const BentoFront = styled(BentoFace)``;

const BentoBack = styled(BentoFace)`
  transform: rotateY(180deg);
  overflow: hidden;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const SlideShow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

function getFlipTransform(direction) {
  switch (direction) {
    case "left":
      return "rotateY(-180deg)";
    case "right":
      return "rotateY(180deg)";
    case "up":
      return "rotateX(180deg)";
    case "down":
      return "rotateX(-180deg)";
    default:
      return "rotateY(180deg)";
  }
}

const BentoItemComponent = ({ icon: Icon, title, subtitle, images }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState("right");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleFlip = () => {
    const directions = ["left", "right", "up", "down"];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    setFlipDirection(randomDirection);
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    let slideInterval;
    if (isFlipped) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(slideInterval);
  }, [isFlipped, images.length]);

  return (
    <BentoItem
      isFlipped={isFlipped}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <BentoInner isFlipped={isFlipped} flipDirection={flipDirection}>
        <BentoFront>
          <FeatureIcon>
            <Icon />
          </FeatureIcon>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureSubtitle>{subtitle}</FeatureSubtitle>
        </BentoFront>
        <BentoBack>
          <SlideShow>
            {images.map((image, index) => (
              <Slide
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                active={index === currentSlide}
              />
            ))}
          </SlideShow>
        </BentoBack>
      </BentoInner>
    </BentoItem>
  );
};

const AboutMe = React.forwardRef((props, ref) => {
  function getLogos() {
    return Object.keys(logoUrls)
      .filter((e, i) => i < 14)
      .map((key) => <img key={logoUrls[key]} src={logoUrls[key]} alt={key} />);
  }

  return (
    <AboutSection ref={ref}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BentoGrid>
          <BentoItemComponent
            icon={FaLaptopCode}
            title="Software Dev"
            subtitle="Experienced in building web and mobile applications."
            images={[
              "/path/to/software-dev-image1.jpg",
              "/path/to/software-dev-image2.jpg",
              "/path/to/software-dev-image3.jpg",
            ]}
          />
          <BentoItemComponent
            icon={FaShieldAlt}
            title="Cybersecurity Practitioner"
            subtitle="Skilled in penetration testing and security incident management."
            images={[
              "/path/to/cybersecurity-image1.jpg",
              "/path/to/cybersecurity-image2.jpg",
              "/path/to/cybersecurity-image3.jpg",
            ]}
          />
          <BentoItemComponent
            icon={FaUserGraduate}
            title="Web dev"
            subtitle="Continuously expanding my skills and knowledge."
            images={[
              "/path/to/webdev-image1.jpg",
              "/path/to/webdev-image2.jpg",
              "/path/to/webdev-image3.jpg",
            ]}
          />
        </BentoGrid>
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
