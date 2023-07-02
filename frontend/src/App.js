import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/addStudent" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
