import React from "react";
import ReactDOM from "react-dom/client";

const Card = ({title, descriptionText, link, linkState}) => {
    return (
        <div className="container">
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
      </div>
</div>
    );
};

export default Card;
