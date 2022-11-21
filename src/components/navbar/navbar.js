import React from "react";

const Navbar = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <a className="navbar-brand" href="#">#Brand Name</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </nav>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
