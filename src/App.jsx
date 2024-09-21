import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import i18n configuration
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import InputForm from './components/InputForm';
import Predictions from './components/Predictions';
import HistoricalData from './components/HistoricalData';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForecastReport from './components/ForecastReport';
import BufferStock from './components/BufferStockComponent'; // Import the new component
import NotFound from './components/NotFound';
import CropPriceVisualization from "./components/CropPriceVisualization";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/crop-price-visualization" element={<CropPriceVisualization />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/input" element={<InputForm />} />
              <Route path="/forecast-report" element={<ForecastReport />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/historical-data" element={<HistoricalData />} />
              <Route path="/buffer-stock" element={<BufferStock />} /> {/* Add this line */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
