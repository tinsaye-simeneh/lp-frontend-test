import React from "react";
import homeIllust from "../assets/images/homeIllust.svg";

const Home = () => {
  return (
    <div className="container mt-5 bg-white">
      <div className="row">
        <div className="col-md-6 border bg-white pt-5 mt-5 pb-5">
          <h1 className="mt-5">Welcome to #Brand Name</h1>
          <p className="mt-5"> A place where access your hidden skills </p>
          <p className="mt-3 pb-5">
            {" "}
            Register and get a free access to our Resources{" "}
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="btn btn-white border border-primary">Get Started</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-3 border bg-white mt-5">
          <img src={homeIllust} alt="home" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
