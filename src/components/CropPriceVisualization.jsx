import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

// Sample data for graphs
// Sample data for graphs (12 months)
const data = [
  {
    name: "January",
    price: 100,
    temperature: 22,
    rainfall: 50,
    pesticides: 20,
    humidity: 60,
    windSpeed: 10,
    solarRadiation: 5,
    soilPH: 6.5,
    organicMatter: 2.0,
    yield: 1500,
    pestInfestation: 2,
    fertilizerUsage: 1.5,
    marketPrice: 120,
    supplyVolume: 300,
    demandVolume: 280,
    transportationCost: 30,
    profitability: 40,
  },
  {
    name: "February",
    price: 110,
    temperature: 24,
    rainfall: 40,
    pesticides: 25,
    humidity: 62,
    windSpeed: 12,
    solarRadiation: 6,
    soilPH: 6.7,
    organicMatter: 2.1,
    yield: 1550,
    pestInfestation: 1,
    fertilizerUsage: 1.8,
    marketPrice: 125,
    supplyVolume: 320,
    demandVolume: 300,
    transportationCost: 32,
    profitability: 45,
  },
  {
    name: "March",
    price: 105,
    temperature: 26,
    rainfall: 35,
    pesticides: 22,
    humidity: 58,
    windSpeed: 11,
    solarRadiation: 7,
    soilPH: 6.8,
    organicMatter: 2.2,
    yield: 1600,
    pestInfestation: 3,
    fertilizerUsage: 1.6,
    marketPrice: 130,
    supplyVolume: 310,
    demandVolume: 290,
    transportationCost: 28,
    profitability: 42,
  },
  {
    name: "April",
    price: 120,
    temperature: 28,
    rainfall: 45,
    pesticides: 18,
    humidity: 65,
    windSpeed: 15,
    solarRadiation: 8,
    soilPH: 6.6,
    organicMatter: 2.3,
    yield: 1650,
    pestInfestation: 2,
    fertilizerUsage: 2.0,
    marketPrice: 135,
    supplyVolume: 330,
    demandVolume: 310,
    transportationCost: 35,
    profitability: 48,
  },
  {
    name: "May",
    price: 130,
    temperature: 30,
    rainfall: 60,
    pesticides: 15,
    humidity: 67,
    windSpeed: 14,
    solarRadiation: 9,
    soilPH: 6.9,
    organicMatter: 2.5,
    yield: 1700,
    pestInfestation: 1,
    fertilizerUsage: 2.5,
    marketPrice: 140,
    supplyVolume: 340,
    demandVolume: 320,
    transportationCost: 34,
    profitability: 50,
  },
  {
    name: "June",
    price: 140,
    temperature: 32,
    rainfall: 70,
    pesticides: 20,
    humidity: 70,
    windSpeed: 16,
    solarRadiation: 10,
    soilPH: 7.0,
    organicMatter: 2.7,
    yield: 1750,
    pestInfestation: 3,
    fertilizerUsage: 3.0,
    marketPrice: 145,
    supplyVolume: 350,
    demandVolume: 330,
    transportationCost: 38,
    profitability: 55,
  },
  {
    name: "July",
    price: 135,
    temperature: 31,
    rainfall: 80,
    pesticides: 22,
    humidity: 72,
    windSpeed: 13,
    solarRadiation: 11,
    soilPH: 6.8,
    organicMatter: 2.6,
    yield: 1600,
    pestInfestation: 4,
    fertilizerUsage: 2.7,
    marketPrice: 138,
    supplyVolume: 345,
    demandVolume: 325,
    transportationCost: 37,
    profitability: 48,
  },
  {
    name: "August",
    price: 145,
    temperature: 33,
    rainfall: 90,
    pesticides: 19,
    humidity: 75,
    windSpeed: 18,
    solarRadiation: 12,
    soilPH: 6.9,
    organicMatter: 2.8,
    yield: 1800,
    pestInfestation: 2,
    fertilizerUsage: 3.2,
    marketPrice: 150,
    supplyVolume: 360,
    demandVolume: 340,
    transportationCost: 40,
    profitability: 60,
  },
  {
    name: "September",
    price: 150,
    temperature: 30,
    rainfall: 85,
    pesticides: 17,
    humidity: 65,
    windSpeed: 14,
    solarRadiation: 10,
    soilPH: 7.0,
    organicMatter: 3.0,
    yield: 1900,
    pestInfestation: 3,
    fertilizerUsage: 3.5,
    marketPrice: 155,
    supplyVolume: 370,
    demandVolume: 350,
    transportationCost: 42,
    profitability: 65,
  },
  {
    name: "October",
    price: 160,
    temperature: 29,
    rainfall: 60,
    pesticides: 15,
    humidity: 63,
    windSpeed: 15,
    solarRadiation: 9,
    soilPH: 6.7,
    organicMatter: 2.9,
    yield: 2000,
    pestInfestation: 1,
    fertilizerUsage: 3.0,
    marketPrice: 160,
    supplyVolume: 380,
    demandVolume: 360,
    transportationCost: 45,
    profitability: 70,
  },
  {
    name: "November",
    price: 155,
    temperature: 28,
    rainfall: 50,
    pesticides: 20,
    humidity: 68,
    windSpeed: 12,
    solarRadiation: 8,
    soilPH: 6.8,
    organicMatter: 2.7,
    yield: 1950,
    pestInfestation: 2,
    fertilizerUsage: 2.8,
    marketPrice: 158,
    supplyVolume: 375,
    demandVolume: 355,
    transportationCost: 43,
    profitability: 68,
  },
  {
    name: "December",
    price: 165,
    temperature: 27,
    rainfall: 40,
    pesticides: 18,
    humidity: 64,
    windSpeed: 11,
    solarRadiation: 7,
    soilPH: 6.6,
    organicMatter: 2.5,
    yield: 2050,
    pestInfestation: 3,
    fertilizerUsage: 3.1,
    marketPrice: 170,
    supplyVolume: 390,
    demandVolume: 370,
    transportationCost: 50,
    profitability: 75,
  },
];

// Graph selection buttons
const graphTypes = [
  { name: "Price", dataKey: "price", color: "#8884d8" },
  { name: "Temperature", dataKey: "temperature", color: "#82ca9d" },
  { name: "Rainfall", dataKey: "rainfall", color: "#ffc658" },
  { name: "Pesticides", dataKey: "pesticides", color: "#ff6347" },
  { name: "Humidity", dataKey: "humidity", color: "#ff9999" },
  { name: "Wind Speed", dataKey: "windSpeed", color: "#66b3ff" },
  { name: "Solar Radiation", dataKey: "solarRadiation", color: "#ffcc99" },
  { name: "Soil pH", dataKey: "soilPH", color: "#99ff99" },
  { name: "Organic Matter", dataKey: "organicMatter", color: "#ffb3e6" },
  { name: "Crop Yield", dataKey: "yield", color: "#ff7f50" },
  { name: "Pest Infestation", dataKey: "pestInfestation", color: "#d9534f" },
  { name: "Fertilizer Usage", dataKey: "fertilizerUsage", color: "#5bc0de" },
  { name: "Market Price", dataKey: "marketPrice", color: "#f0ad4e" },
  { name: "Supply Volume", dataKey: "supplyVolume", color: "#5cb85c" },
  { name: "Demand Volume", dataKey: "demandVolume", color: "#0275d8" },
  {
    name: "Transportation Cost",
    dataKey: "transportationCost",
    color: "#c9302c",
  },
  { name: "Profitability", dataKey: "profitability", color: "#5e5e5e" },
];

function CropPriceVisualization() {
  const [selectedGraphs, setSelectedGraphs] = useState(
    graphTypes.reduce((acc, graph) => {
      acc[graph.dataKey] = "bar"; // Default graph type for each parameter
      return acc;
    }, {})
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleGraphChange = (dataKey, graphType) => {
    setSelectedGraphs((prev) => ({ ...prev, [dataKey]: graphType }));
  };

  // Filter graph types based on search term
  const filteredGraphTypes = graphTypes.filter((graph) =>
    graph.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 md:px-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">Crop Price Visualization</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a graph..."
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGraphTypes.length > 0 ? (
          filteredGraphTypes.map((graph) => (
            <div
              key={graph.dataKey}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">
                {graph.name} Visualization
              </h3>
              {/* Graph Type Selector */}
              <div className="mb-4">
                <button
                  onClick={() => handleGraphChange(graph.dataKey, "bar")}
                  className={`py-1 px-3 mr-2 rounded-md ${
                    selectedGraphs[graph.dataKey] === "bar"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  Bar
                </button>
                <button
                  onClick={() => handleGraphChange(graph.dataKey, "line")}
                  className={`py-1 px-3 mr-2 rounded-md ${
                    selectedGraphs[graph.dataKey] === "line"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => handleGraphChange(graph.dataKey, "pie")}
                  className={`py-1 px-3 rounded-md ${
                    selectedGraphs[graph.dataKey] === "pie"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  Pie
                </button>
              </div>

              {/* Graph Display */}
              <ResponsiveContainer width="100%" height={300}>
                {selectedGraphs[graph.dataKey] === "bar" && (
                  <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={graph.dataKey} fill={graph.color} />
                  </BarChart>
                )}
                {selectedGraphs[graph.dataKey] === "line" && (
                  <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={graph.dataKey}
                      stroke={graph.color}
                    />
                  </LineChart>
                )}
                {selectedGraphs[graph.dataKey] === "pie" && (
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey={graph.dataKey}
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill={graph.color}
                      label
                    />
                    <Tooltip />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          ))
        ) : (
          <p>No graphs found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default CropPriceVisualization;
