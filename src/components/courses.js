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

      <div className="row mx-auto" style={{width:'85%'}}>
        <div className="col-md-3 col-12 mt-5 mx-auto">
          <div className="card text-center bg-secondary">
            <div className="card-body">
              <h5 className="card-title text-white"> FRONTEND </h5>
              <p
                className="card-text mt-3 text-white"
                style={{ fontSize: "13px" }}
              >
                Step by step guide to become a frontend developer in 2022
              </p>
              <a
                href="#frontend"
                className="btn btn-white py-0 text-decoration-underline text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mt-5 mx-auto">
          <div className="card text-center bg-secondary">
            <div className="card-body">
              <h5 className="card-title text-white"> FRONTEND </h5>
              <p
                className="card-text mt-3 text-white"
                style={{ fontSize: "13px" }}
              >
                Step by step guide to become a frontend developer in 2022
              </p>
              <a
                href="#frontend"
                className="btn btn-white py-0 text-decoration-underline text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mt-5 mx-auto">
          <div className="card text-center bg-secondary">
            <div className="card-body">
              <h5 className="card-title text-white"> FRONTEND </h5>
              <p
                className="card-text mt-3 text-white"
                style={{ fontSize: "13px" }}
              >
                Step by step guide to become a frontend developer in 2022
              </p>
              <a
                href="#frontend"
                className="btn btn-white py-0 text-decoration-underline text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
