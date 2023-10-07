import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { CgBee } from "react-icons/cg";
import "./header.scss";

const Header = () => {
  const [active, setActive] = useState("navBar");
  // const [user, setUser] = useState({});

  // function handleCallbackResponse(response) {
  //   console.log("JWT ID token" + response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("signInDiv").hidden = true; //when a user already signed in
  // }

  // function handleSignOut(event) {
  //   setUser({}); // no one signed in
  //   document.getElementById("signInDiv").hidden = false;
  // }

  // useEffect(() => {
  //   //gloabl google
  //   if (window.google && window.google.accounts) {
  //     window.google.accounts.id.initialize({
  //       client_id:
  //         "943710538249-c5b86unf68085l2u7kb7dedfgcogi2b4.apps.googleusercontent.com",
  //       callback: handleCallbackResponse,
  //     });
  //   }
  //   if (window.google && window.google.accounts) {
  //     window.google.accounts.id.renderButton(
  //       document.getElementById("signInDiv"),
  //       {
  //         theme: "outline",
  //         size: "large",
  //       }
  //     );
  //   }
  //   if (window.google && window.google.accounts) {
  //     window.google.accounts.id.prompt();
  //   }
  // }, []);


  //show navbar
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  //close navbar
 const removeNavBar = () => {
   setActive("navBar");
 };

 //adding bgcolor to the header
 const [transparent, setTransparent] = useState('header');
 const addBg = () => {
  if(window.scrollY >= 10) {
    setTransparent("header activeHeader");
  } else {
    setTransparent("header");
  }
 }

 window.addEventListener('scroll', addBg)


  return (
    <section className="navBarSection">
      <div className={transparent}>
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
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/getAllStudents" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
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
  );
};

export default Header;
