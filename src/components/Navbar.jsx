import React from "react";
import "./Navbar.css";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/Group.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>Services</li>
          <li>Technologies</li>
          <li>Work</li>
          <li>About</li>
          <li>Career</li>
          <li>Page</li>
          <li>Contact</li>
        </ul>
        <div className="get-in-touch">
          <button className="get-in-touch-button">
            Get In Touch{" "}
            <img
              style={{ width: "14px", paddingLeft: "5px" }}
              src="/images/Groupaero.png"
              alt=""
            />
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
