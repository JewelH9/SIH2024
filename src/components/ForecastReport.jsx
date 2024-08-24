import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "January", price: 1800 },
  { name: "February", price: 1750 },
  { name: "March", price: 1700 },
  { name: "April", price: 1800 },
  { name: "May", price: 1850 },
  { name: "June", price: 1900 },
];

function ForecastReport() {
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Forecast Report</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">Crop: Wheat</h4>
          <p className="text-gray-700">Current Market Price: ₹1800 per quintal</p>
          <p className="text-gray-700">Production Estimates: 25,000 quintals</p>
          <hr className="my-4" />
          <h4 className="text-lg font-semibold">Forecasted Price:</h4>
          <p className="text-gray-700">Expected Price Range: ₹1700 - ₹1900 per quintal</p>
          <p className="text-gray-700">Projected Market Trend: Stable with slight fluctuations</p>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">Crop: Rice</h4>
          <p className="text-gray-700">Current Market Price: ₹2200 per quintal</p>
          <p className="text-gray-700">Production Estimates: 50,000 quintals</p>
          <hr className="my-4" />
          <h4 className="text-lg font-semibold">Forecasted Price:</h4>
          <p className="text-gray-700">Expected Price Range: ₹2150 - ₹2250 per quintal</p>
          <p className="text-gray-700">Projected Market Trend: Increasing demand with price rise</p>
          {/* Example line chart for Rice */}
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForecastReport;
