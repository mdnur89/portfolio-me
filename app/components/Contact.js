import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Section, SectionHeading } from "./shared";
import ermAvatar from "../images/avatar-bkg-bw.jpg";
import { logoUrls } from "../data/imgUrls";

const ContactSectionHeading = styled(SectionHeading)`
  z-index: 10;
  color: #000;
  background: #fff;
  padding: 5px;
  border-radius: 40px;
  font-weight: 100;
`;
const ContactInfoGroup = styled.div`
  align-items: left;
  width: 90%;
  max-width: 400px;
  a {
    color: #f58;
  }

  @media (min-width: 650px) {
    a {
      font-size: 20px;
    }
  }
`;
const ContactItem = styled.p`
  margin: 20px 0 20px 0px;
`;

const Contact = React.forwardRef((props, ref) => (
  <Section ref={ref}>
    <div style={{ position: "relative", marginBottom: "30px" }}>
      <img
        src={ermAvatar}
        css={{
          borderRadius: "50%",
          width: 128,
          height: 128,
          zIndex: -1,
          position: "absolute",
          top: -24,
          left: -100,
          boxShadow: "2px 1px 5px rgba(0, 0, 0, 1)",
        }}
      />
      <ContactSectionHeading>Contact</ContactSectionHeading>
    </div>
    <ContactInfoGroup>
      <ContactItem>
        <FontAwesomeIcon
          icon={["far", "envelope"]}
          css={{ marginRight: 25, fontSize: "26px" }}
        />
        <a href="mailto:tatendabandawa01@gmail.com">
          tatendabandawa01@gmail.com
        </a>
      </ContactItem>
      <hr />
      <ContactItem>
        <FontAwesomeIcon
          icon={["fas", "phone"]}
          css={{ marginRight: 25, fontSize: "26px" }}
        />
        <a href="tel:+263-78-293-1585">+263-78-293-1585</a>
      </ContactItem>
      <hr />
      <ContactItem>
        <img
          src={logoUrls["Github"]}
          css={{
            width: 30,
            height: 30,
            marginRight: 25,
            position: "relative",
            top: 10,
          }}
        />
        <a href="https://github.com/mdnur89">Muhammad</a>
      </ContactItem>
      <hr />
      <ContactItem>
        <FontAwesomeIcon
          icon={["far", "file-alt"]}
          css={{ marginRight: 36, fontSize: "26px" }}
        />
        <a
          href="https://drive.google.com/file/d/15bZ6q9xu8Q-OCfjz59xtVuAnbjgn4F0z/view?usp=sharing"
          target="_blank"
        >
          view/download resume
        </a>
      </ContactItem>
    </ContactInfoGroup>
  </Section>
));

export default Contact;
