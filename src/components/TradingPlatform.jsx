import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

export default function TradingPlatform() {
    return (
        <section className="trading-platform">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 trading">
                        <div className="trading-img"></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 trading">
                        <p>Decentralized Trading Platform</p>
                        <h1>Connect blockchain to the real world and start crypto trading.</h1>
                        <p className="trading-pa">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.
                        </p>
                        <Button type="button" className="btn btn-lg btn-primary">Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}