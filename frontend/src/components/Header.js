import React from "react";
import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={Logo} style={{ width: "130px" }} />
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontWeight: "800px",
            fontFamily: "calibri",
            fontSize: "25px",
          }}
        >
          Student Management
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/getAllStudents" className="nav-link">
              Students
            </Link>
            <Link to="#" className="nav-link">
              Teacher
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
