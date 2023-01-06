import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../Hero-Section/learn-code.png";
// import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-5 hero__title display-4">
                Anytime Anywhere <br /> Learn to code <br />
              </p>
              <p className="mb-5 w-50 display-6">
                Make your child learn how to create their own apps, games and
                website
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
