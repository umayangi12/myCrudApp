import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import EditStudent  from "./components/EditStudent";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AllStudents />} exact />
            <Route path="/addStudent" element={<AddStudent />} exact />
            <Route path="/updateStudent/:id" element={<EditStudent/>} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
