import React, { Component } from "react";
import TypeAnimation from "react-type-animation";
import "./Profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colZ">
              <div className="colZ-icon">
                <a href="/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello , I'M <span className="highlighted-text">Ahmed</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <TypeAnimation
                    repeat={Infinity}
                    sequence={[
                      "HTML 🏗️",
                      1000,
                      "CSS 🏞️",
                      1000,
                      "Java Script 🌍",
                      1000,
                      "Bootstrap 🚦",
                      1000,
                      "React Js 🚥",
                      1000,
                      "UI/UX Design ✍️",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of building websites with frontend operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""} Hire Me {""}
              </button>
              <a
                href="Ahmed-Abdelhaleem-Gamal.pdf"
                download="Myportifolio Ahmed-Abdelhaleem-Gamal.pdf"
              >
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    );
  }
}
