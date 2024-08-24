import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import InputForm from "./components/InputForm";
import Predictions from "./components/Predictions";
import HistoricalData from "./components/HistoricalData";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForecastReport from "./components/ForecastReport";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/input" element={<InputForm />} />
            <Route path="/forecast-report" element={<ForecastReport />} />{" "}
            {/* Match this with the link */}
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/historical-data" element={<HistoricalData />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
