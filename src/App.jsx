import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Signin from "./pages/signIn";
import Signup from "./pages/signup";
import { Routes as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/details" element={<Details />} />
      </Router>
    </>
  );
}

export default App;
