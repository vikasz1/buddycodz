import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> BuddyCodz.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </Col>


        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
