import React from "react";
import "../styles/index.css";
import Card from "./cards";

const CoursePage = () => {
  return (
    <div className="container mt-5 bg-white">
      <div className="row">
        <h1 className="text-center" style={{ fontSize: "26px" }}>
          {" "}
          Popular courses{" "}
        </h1>
      </div>

      <div className="row mx-auto" style={{ width: "85%" }}>
        <Card
          title="FRONTEND"
          descriptionText="Frontend Developer"
          link="#frontend"
          linkState="View"
        />
         <Card
          title="BACKEND"
          descriptionText="Backend Developer"
          link="#backend"
          linkState="View"
        />
        <Card
          title="UI.UX Design"
          descriptionText="UI/UX Designer"
          link="#uiux"
          linkState="View"
        />
      </div>
    </div>
  );
};

export default CoursePage;
