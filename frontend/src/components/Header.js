import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { CgBee } from "react-icons/cg";
import "./header.scss";

const Header = () => {
  const [active, setActive] = useState("navBar");

  //show navbar
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  //close navbar
 const removeNavBar = () => {
   setActive("navBar");
 };


  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <CgBee className="icon" />
              TravelBee
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Student
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Teacher
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Assignment
              </a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">Sign up</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNavBar} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavBar} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <img src={Logo} style={{ width: "130px" }} />
    //     <a
    //       className="navbar-brand"
    //       href="#"
    //     >
    //       Student Management
    //     </a>

    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <Link to="/" className="nav-link">
    //           Home
    //         </Link>
    //         <Link to="/getAllStudents" className="nav-link">
    //           Students
    //         </Link>
    //         <Link to="#" className="nav-link">
    //           Teacher
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
