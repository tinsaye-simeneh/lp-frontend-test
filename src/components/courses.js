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
          title="UI/UX DESIGN"
          descriptionText="UI/UX Designer"
          link="#uiux"
          linkState="View"
        />
      </div>

      <div className="row mx-auto" style={{ width: "85%" }}>
        <Card
          title="FULLSTACK"
          descriptionText="Fullstack Developer"
          link="#fullstack"
          linkState="Coming Soon"
        />
         <Card
          title="APP DEV."
          descriptionText="App Developer"
          link="#AppDeveloper"
          linkState="Coming Soon"
        />
        <Card
          title="GRAPHICS DESIGN"
          descriptionText="Graphics Designer"
          link="#uiux"
          linkState="Coming Soon"
        />
      </div>

    </div>
  );
};

export default CoursePage;
