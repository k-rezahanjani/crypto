import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Decentralize() {
    return (
        <div className="decentralize">
            <div className="row">
                <div className="container">
                    <div className="col-lg-6 col-md-6 col-sm-12 decen">
                        <div className="decen-left">
                            <h4>Creative landing page template</h4>
                            <h1 className="decentra-title">Decenteralized Crypto Trading Platform</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.
                            </p>
                            <button type="button" className="btn btn-primary">Whitepaper</button>
                            <button type="button" className="btn btn-outline-light">Buy Token</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 decen">
                        <div className="platform"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decentralize;