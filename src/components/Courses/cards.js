import React from "react";

const Card = ({title, descriptionText, link, linkState}) => {
    return (
      <div className="col-md-3 col-12 mt-5 mx-auto">
        <div className="card text-center bg-secondary">
          <div className="card-body">
            <h5 className="card-title text-white"> {title} </h5>
            <p
              className="card-text mt-3 text-white"
              style={{ fontSize: "13px" }}
            >
              Step by step guide to become a {descriptionText} in 2022
            </p>
            <a
              href={link}
              className="btn btn-white py-0 text-decoration-underline text-white"
            >
              {linkState}
            </a>
          </div>
        </div>
</div>
    );
};

export default Card;
