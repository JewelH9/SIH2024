import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function HomePage() {
  return (
    <section className="mb-8">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-16 mb-12 rounded-lg shadow-lg">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Agri Forecast Platform
          </h1>
          <p className="text-lg mb-6">
            Accurate price predictions for agri-horticultural commodities using
            advanced AI-ML models.
          </p>
          <Link
            to="/input"
            className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Key Features Section */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Accurate price forecasting using AI-ML models.</li>
            <li>
              Easy data input for crop types, prices, and production estimates.
            </li>
            <li>Historical data analysis and trend visualization.</li>
            <li>Custom report generation for market insights.</li>
            <li>User-friendly interface with intuitive navigation.</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cionews.co.in/wp-content/uploads/2022/10/Untitled-design-2022-10-06T104412.492.png"
            alt="Key Features"
            className="rounded-lg shadow-md w-full h-auto max-w-xs mx-auto"
          />
        </div>
      </div>
      {/* How It Works Section */}
      <div className="bg-gray-50 py-12 mb-12">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20221106/pngtree-modern-tech-improves-farm-harvests-through-data-collection-photo-image_40543974.jpg"
              alt="How It Works"
              className="rounded-lg shadow-md w-full h-auto max-w-xs mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-800 space-y-2">
              <li>Enter data for the crop you want to forecast.</li>
              <li>Submit the data and wait for the prediction.</li>
              <li>View detailed predictions and analysis.</li>
              <li>Generate reports for further decision-making.</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "This platform has transformed the way we plan our market
              strategies. The price predictions are spot on!"
            </p>
            <p className="text-blue-600 font-bold">- John Doe, Farmer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "A must-have tool for anyone involved in agriculture. It’s
              user-friendly and incredibly accurate."
            </p>
            <p className="text-blue-600 font-bold">
              - Jane Smith, Market Analyst
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "The reports feature is a game-changer. It’s helped me make
              informed decisions and stay ahead of the market."
            </p>
            <p className="text-blue-600 font-bold">- Raj Patel, Trader</p>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-12 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Forecasting?</h2>
        <p className="text-lg mb-6">
          Explore the platform, enter your data, and get accurate price
          predictions today.
        </p>
        <Link
          to="/input"
          className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100"
        >
          Enter Data Now
        </Link>
      </div>
      {/* Footer Section */}
      <Footer /> {/* Adding the Footer component here */}
    </section>
  );
}

export default HomePage;
