import React from "react";
import '../../styles/navbar.css';

const Navbar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white">
                        <a className="navbar-brand ps-5" href="#logo">Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="d-flex navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                                <li className="nav-item">
                                    <a className="btm-nav active" aria-current="page" href="#courses">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btm-nav" href="#resources">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btm-nav" href="#rules">Rules</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btm-nav" href="#usefulLinks">Useful links</a>
                                </li>
                            </ul>
                        </div>
                        </nav>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
