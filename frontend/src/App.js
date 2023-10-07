// import "./App.css";
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import AddStudent from "./components/student/AddStudent";
// import EditStudent from "./components/student/EditStudent";
// import AllStudents from "./components/student/AllStudents";
// import ViewStudent from "./components/student/ViewStudent";
// import Home from "./components/home/Home";
// import Offer from "./components/offers/Offer";
// import About from "./components/about/About";
// import Footer from "./components/footer/Footer";
// import Blog from "./components/blog/Blog";
// import Popular from "./components/popular/Popular";

// function App() {

//   return (
//     <Router>
//       <div>
//         {/* Common components that should appear on multiple routes */}
//         <Header />
//         <Home />
//         <Popular />
//         <Offer />
//         <Blog />
//         <About />

//         {/* <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/" element={<Popular />} />
//           <Route path="/" element={<Offer />} />
//           <Route path="/" element={<Blog />} />
//           <Route path="/" element={<About />} />
//         </Routes> */}
//       </div>
//       <Routes>
//         <Route path="/getAllStudents" element={<AllStudents />} />
//         <Route path="/addStudent" element={<AddStudent />} />
//         <Route path="/updateStudent/:id" element={<EditStudent />} />
//         <Route path="/getStudent/:id" element={<ViewStudent />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import AllStudents from "./components/student/AllStudents";
import ViewStudent from "./components/student/ViewStudent";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
// import Offer from "./components/offers/Offer";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
              <Popular />
              {/* <Offer /> */}
              <Blog />
              <About />
            </div>
          }
        />
        <Route path="/getAllStudents" element={<AllStudents />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/updateStudent/:id" element={<EditStudent />} />
        <Route path="/getStudent/:id" element={<ViewStudent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
