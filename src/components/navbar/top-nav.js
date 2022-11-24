import React from "react";
import '../../styles/topnav.css';

const TopNav = () => {
    return(
        <div className="container">
        <div className="row ">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-white bg-black">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="d-flex navbar-nav ml-auto mb-2 mb-lg-0 ms-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        </div>
    </div>            
    )
}

export default TopNav;