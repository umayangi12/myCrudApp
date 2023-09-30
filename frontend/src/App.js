import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
// import AddStudent from "./components/student/AddStudent";
// import EditStudent from "./components/student/EditStudent";
// import AllStudents from "./components/student/AllStudents";
// import ViewStudent from "./components/student/ViewStudent";
import Home from "./components/home/Home";
import Offer from "./components/offers/Offer";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Popular from "./components/popular/Popular";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";

function App() {
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

  return (
    <Router>
      <div>
        {/* Common components that should appear on multiple routes */}
        <Header />
        <Home />
        <Popular />
        <Offer />
        <Blog />
        <About />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Popular />} />
          <Route path="/" element={<Offer />} />
          <Route path="/" element={<Blog />} />
          <Route path="/" element={<About />} />
        </Routes> */}
      </div>
      {/* <Routes>
        <Route path="/getAllStudents" element={<AllStudents />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/updateStudent/:id" element={<EditStudent />} />
        <Route path="/getStudent/:id" element={<ViewStudent />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
