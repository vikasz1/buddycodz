import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";
import { Container, Row, Col } from "reactstrap";
const courseImg1 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696563052/buddycodz/computer_sfzfon.png";
const courseImg2 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696515363/buddycodz/kids-learning_davudc.jpg";
const courseImg3 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696515364/buddycodz/hero-img3_mzb5nr.jpg";

const coursesData = [
  {
    id: "01",
    title: "Learn Coding",
    lesson: 20,
    students: 2,
    rating: 5.9,
    desc: "Make your child learn how to create their own apps, games and website!",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Learn Designing",
    lesson: 20,
    students: 12.5,
    rating: 5.9,
    desc: "Make them learn how to create thier own 3D objects, STEM designing of Arduino, Microbit !",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Learn Maths",
    lesson: 20,
    students: 12.5,
    rating: 5.9,
    desc: "Make them learn special tips and tricks to speed up there calculations and better understand concepts!",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section id="course-section">
      <Container>
        <Row className="mb-2">
          <Col lg={180} className="mb-3">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100">
                <h2 className="btn-primary p-3 text-center">Our Popular Courses</h2>
                <p className="p-4 lead">
                  Unlock your child's potential with our engaging courses! <br /><br />Here your child will embark on a journey to discover the world of programming, enabling them to craft their very own apps, games, and websites. With 20 comprehensive lessons, this course equips them with valuable skills for the future. Join the 2K+ enthusiastic learners who have already enrolled and dive into the exciting realm of coding.
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
