import React from "react";
import { Container, Row, Col } from "reactstrap";
import CurriculumCard from "./curriculumCard";

const curr1 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696515373/buddycodz/tkinter_mohdfs.webp"
const curr2 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696515363/buddycodz/python_dhmgem.webp"
const curr3 = "https://res.cloudinary.com/dkvfpxzme/image/upload/v1696515372/buddycodz/math_xbwdky.png"

const Curriculums = () => {
  const curriculumdata = [
    {
      id: 1,
      image: curr1,
      title: "Block Based Programming",
      description:
        "These are the stepping stones for your kid who start their journey into the world of coding! We help them make games, applications, animations and a lot more!",
    },
    {
      id: 2,
      image: curr2,
      title: "Text Based Programming",
      description:
        "This embarks there journey to real text based programming which comes post learning the block based programming. \n They will now be able to develop chatbots.",
    },
    {
      id: 3,
      image: curr3,
      title: "3D Designing and STEM",
      description:
        "It includes the conecpts of building 3D designs that can be easily printed out into a 3D object! Also they will be learning about designing circuties and STEM Concepts!",
    },
  ];
  return (
    <section>
    <h1 className="text-center bg-primary text-white p-3">Curriculums</h1>
      <Container className="mt-5">
        <Row>
          {curriculumdata.map((item) => {
            return (
              <Col lg="4" md="6" sm="6" key={item.id}>
                <CurriculumCard key={item.id} data={item} />  
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Curriculums;
