import React from "react";
import "../styles/index.css";
import Card from "./cards";

const CoursePage = () => {
  return (
    <div className="container mt-5 bg-white">
      <div className="row">
        <h1 className="text-center" style={{ fontSize: "22px" }}>
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

      <div className="row mt-5 pt-5">
        <h1 className="text-center" style={{ fontSize: "22px" }}>
          {" "}
          Explore Our Resources{" "}
        </h1>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-md-5 col-12 mx-auto">
          <div className="bg-secondary text-white py-2 text-center">Videos</div>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-md-5 col-12 mx-auto d-flex">
          <span className="bg-white text-black py-2 me-auto">Frontend Web Development</span>
          <a href="#frontend" className="text-decoration-underline text-primary"> View all </a>
        </div>
      </div>

    </div>
  );
};

export default CoursePage;
