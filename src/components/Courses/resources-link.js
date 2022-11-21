import React from "react";

const ResourcesLink = ({title, link}) => {
    return (
        <div className="row">
        <div className="col-md-5 col-12 mx-auto d-flex">
          <span className="bg-white text-black py-2 me-auto">{title}</span>
          <a href={link} className="text-decoration-underline text-primary"> View all </a>
        </div>
      </div>
    );
    };

export default ResourcesLink;