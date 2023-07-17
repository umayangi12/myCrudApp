import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import AllStudents from "./components/student/AllStudents";
import ViewStudent from "./components/student/ViewStudent";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Offer from "./components/offers/Offer";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Home />
          <Popular />
          <Offer/>
          <Routes>
            <Route path="/getAllStudents" element={<AllStudents />} exact />
            <Route path="/addStudent" element={<AddStudent />} exact />
            <Route path="/updateStudent/:id" element={<EditStudent />} exact />
            <Route path="/getStudent/:id" element={<ViewStudent />} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
