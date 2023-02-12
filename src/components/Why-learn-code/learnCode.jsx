import React from "react";

const LearnCode = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col w-25 ">
          <h1 className="display-4 mr-5">
            Why Children should learn how to Code ?
          </h1>
        </div>
        <div className="col">
          <iframe style={{border:"sky-blue dashed 8px"}}
            width="584"
            height="310"
            src="https://www.youtube.com/embed/vOsdfRbrNdk"
            title="Coding: By a kid, for kids | Krish Mehra | TEDxKentState"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          ></iframe>
        </div>
      </div>
      <div className="text-center">
        <a className="w-25 btn btn-primary ml-3" href="#register-class">
          Book free Trial
        </a>
      </div>
    </div>
  );
};

export default LearnCode;
