import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/computer.png";
import courseImg2 from "../../assests/images/kids-learning.png";
import courseImg3 from "../../assests/images/math.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Learn Coding",
    lesson: 20,
    students: 2,
    rating: 5.9,
    desc : "Make your child learn how to create their own apps, games and website!",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Learn Designing",
    lesson: 20,
    students: 12.5,
    rating: 5.9,
    desc : "Make them learn how to create thier own 3D objects, STEM designing of Arduino, Microbit !",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Learn Maths",
    lesson: 20,
    students: 12.5,
    rating: 5.9,
    desc : "Make them learn special tips and tricks to speed up there calculations and better understand concepts!",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row className="mb-2">
          <Col lg={180} className="mb-3">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100">
                <h2 className="btn-primary p-3 text-center">Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard key={item.id} item={item}  />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
