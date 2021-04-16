import React from "react";
import {
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>Welcome To My PORTFOLIO</h1>
                <p>Hello professional's       \
    Thank you visiting my portfolio</p>
                <div className="header__buttons">
                  <a href="/" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="/" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Banner;
