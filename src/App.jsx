import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />

        <Route path="/details" element={<Details />} />
      </Router>
    </>
  );
}

export default App;
