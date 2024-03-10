import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";

import ytIcon from "../assets/img/ytIcon.svg";
import instaIcon from "../assets/img/igIcon.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={9} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.youtube.com/@chirantan_k_begoor">
                <img src={ytIcon} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/chirantan_k_begoor/">
                <img src={instaIcon} alt="Icon" />
              </a>
              <p>Copyright 2024. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
