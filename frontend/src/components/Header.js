import React from "react";
import Logo from "../assets/img/logo.png"

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
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="/AddStudent">
              Students
            </a>
            <a className="nav-link" href="#">
              Teachers
            </a>
            <a className="nav-link" href="#">
              Assignments
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
