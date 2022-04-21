import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../../assets/Home/shape-bg.png")}
            alt="No internet connections"
          />
        </div>
      </div>
    );
  }
}
