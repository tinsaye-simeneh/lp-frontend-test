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

        <div className="row">
            <Card title="Web Developer" descriptionText="Web Developer" link="https://www.youtube.com/watch?v=I2UBjN5ER4s" linkState="Get Started"/>
    </div>
      </div>
  );
};

export default CoursePage;
