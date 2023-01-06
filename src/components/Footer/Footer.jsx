import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> BuddyCodz.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <i class="fa fa-twitter" aria-hidden="true"></i>
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
