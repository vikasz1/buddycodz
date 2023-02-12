import React from "react";
import "./curriculumCard.css";
const CurriculumCard = (props) => {
  const { image, title, description } = props.data;

  return (
    <div className="my-card single__course__item mb-5">
      <div className="course__img">
        <img src={image} alt="" className="w-100" style={{ height: "200px" }} />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
        <p>{description}</p>
        <div className=" d-flex justify-content-between align-items-center"></div>

        <div className=" d-flex ">
          <p className=" d-flex ">
            <a href="#register-class" className="btn btn-danger">
              Book Free Trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumCard;
