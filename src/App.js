import React from "react";
import './../src/assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Decentralize from "./components/Decentralize";
import TradingPlatform from "./components/TradingPlatform";
import Rating from "./components/Rating";
import CreateCard from "./components/CreateCard";
import Card from "./data/Card";
import AboutUs from "./components/AboutUs";
import TeamMembers from "./data/TeamMembers";
import CreateMembers from "./components/CreateMembers";
import Footer from "./components/Footer";
import API from "./components/CryptoApi";

function App() {
  return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
                <Decentralize/>
            </header>
            <TradingPlatform/>
            <Rating/>
            <div className="container">
                <dl className="rating-cards">
                    {Card.map(CreateCard)}
                </dl>
            </div>
            <AboutUs/>
            <dl className='team-members'>
                {TeamMembers.map(CreateMembers)}
            </dl>
            <API/>
            <Footer/>
        </div>
  );
}

export default App;
