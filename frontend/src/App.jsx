import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        {/* <Route path="/header" element={<PageHeader />} />
        <Route path="/footer" element={<PageFooter />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;
