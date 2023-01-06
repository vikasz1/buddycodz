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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="text-center">
        <a className="w-25 btn btn-primary ml-3" href="/trail">
          Book free Trial
        </a>
      </div>
    </div>
  );
};

export default LearnCode;
