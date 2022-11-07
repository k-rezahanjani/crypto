// eslint-disable-next-line
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Crypto Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">About Us</a>
                            <a className="nav-link" href="#">Contact</a>
                            <a className="nav-link">Live Price</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}