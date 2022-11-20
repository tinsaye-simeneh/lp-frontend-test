import React from "react";
import "../styles/index.css";

const CoursePage = () => {
  return (
    <div className="container mt-5 bg-white">
      <div className="row">
        <h1 className="text-center" style={{ fontSize: "26px" }}>
          {" "}
          Popular courses{" "}
        </h1>
      </div>

    <div className="row">
        <div className="col-md-3 col-12 mt-5">
            <div className="card text-center">
              <div className="card-body">
                    <h5 className="card-title"> FRONTEND </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#frontend" className="btn btn-white text-decoration-underline">View</a>
                </div>
                </div>
                </div>
    </div>

    </div>
  );
};

export default CoursePage;
