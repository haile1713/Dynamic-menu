import React, { Component } from "react";

export default class Navbar extends Component {
  handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-title">Our Menu</h1>
        <div className="navbar-buttons">
          <button onClick={() => this.handleScroll("salads-section")}>
            Salads 🥗
          </button>
          <button onClick={() => this.handleScroll("brunch-section")}>
            Brunch 🥖
          </button>
          <button onClick={() => this.handleScroll("drinks-section")}>
            Drinks ☕️
          </button>
        </div>
      </nav>
    );
  }
}
