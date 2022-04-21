import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Profile />
        <Footer />
      </div>
    );
  }
}
