import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/addStudent" element={<AddStudent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
