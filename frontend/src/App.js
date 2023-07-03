import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
// import Header from "./components/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
