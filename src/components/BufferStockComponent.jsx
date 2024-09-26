import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// List of Indian states
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const BufferStockComponent = () => {
  const { t } = useTranslation();
  const [commodity, setCommodity] = useState("");
  const [currentStock, setCurrentStock] = useState("");
  const [supplyVolume, setSupplyVolume] = useState("");
  const [demandVolume, setDemandVolume] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [transportationCost, setTransportationCost] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState("");
  const [graphData, setGraphData] = useState([]);

  // Retrieve values from localStorage and set states
  useEffect(() => {
    const savedFormData = localStorage.getItem("inputFormData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setCommodity(parsedData.commodity || "");
      setCurrentStock(parsedData.currentStock || "");
      setSupplyVolume(parsedData.supplyVolume || "");
      setDemandVolume(parsedData.demandVolume || "");
      setState(parsedData.state || "");
      setDistrict(parsedData.district || "");
      setSeason(parsedData.season || "");
      setTransportationCost(parsedData.transportationCost || "");
      setPricePerKg(parsedData.pricePerKg || "");
    }
  }, []);

  // Save form data to localStorage
  const saveToLocalStorage = () => {
    const formData = {
      commodity,
      currentStock,
      supplyVolume,
      demandVolume,
      state,
      district,
      season,
      transportationCost,
      pricePerKg,
    };

    localStorage.setItem("inputFormData", JSON.stringify(formData));
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    saveToLocalStorage();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setPredictionResult(null);

    // Validate fields
    if (!commodity || !currentStock || !supplyVolume || !demandVolume) {
      setError(t("error"));
      return;
    }

    // Save the form data on submit
    saveToLocalStorage();

    // Simulate a dummy prediction
    const dummyPrediction = {
      price: (Math.random() * 10 + 20).toFixed(2),
      recommendedStock: (parseFloat(supplyVolume) * 1.2).toFixed(2),
    };

    setPredictionResult({
      ...dummyPrediction,
      userSupplyVolume: supplyVolume,
    });

    // Populate graph data
    const newGraphData = [
      { name: "Week 1", stock: 80, constant: 150 },
      { name: "Week 2", stock: 137, constant: 150 },
      { name: "Week 3", stock: 99, constant: 150 },
      { name: "Week 4", stock: 111, constant: 150 },
      { name: "Week 5", stock: 100, constant: 150 },
      { name: "Week 6", stock: 139, constant: 150 },
      { name: "Week 7", stock: 117, constant: 150 },
      { name: "Week 8", stock: 175, constant: 150 },
      { name: "Week 9", stock: 100, constant: 150 },
      { name: "Week 10", stock: 70, constant: 150 },
    ];

    setGraphData(newGraphData);
  };

  const handleReset = () => {
    setCommodity("");
    setCurrentStock("");
    setSupplyVolume("");
    setDemandVolume("");
    setState("");
    setDistrict("");
    setSeason("");
    setTransportationCost("");
    setPricePerKg("");
    setPredictionResult(null);
    setError("");
    setGraphData([]); // Clear graph data on reset
    localStorage.removeItem("inputFormData");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        {t("bufferStockTitle")}
      </h1>

      {error && (
        <div className="mb-4 text-red-600 font-semibold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Commodity */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("commodity")}
          </label>
          <select
            value={commodity}
            onChange={handleInputChange(setCommodity)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>
              {t("selectCommodity")}
            </option>
            <option value="Rice">{t("rice")}</option>
            <option value="Onion">{t("onion")}</option>
          </select>
        </div>

        {/* Current Stock */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("currentStock")}
          </label>
          <input
            type="text"
            value={currentStock}
            onChange={handleInputChange(setCurrentStock)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Supply Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("supplyVolume")}
          </label>
          <input
            type="text"
            value={supplyVolume}
            onChange={handleInputChange(setSupplyVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Demand Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("demandVolume")}
          </label>
          <input
            type="text"
            value={demandVolume}
            onChange={handleInputChange(setDemandVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t("state")}</label>
          <select
            value={state}
            onChange={handleInputChange(setState)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>
              {t("selectState")}
            </option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t("district")}</label>
          <input
            type="text"
            value={district}
            onChange={handleInputChange(setDistrict)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Season */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t("season")}</label>
          <select
            value={season}
            onChange={handleInputChange(setSeason)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>
              {t("selectSeason")}
            </option>
            <option value="Rabi">{t("rabi")}</option>
            <option value="Kharif">{t("kharif")}</option>
          </select>
        </div>

        {/* Transportation Cost */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("transportationCost")}
          </label>
          <input
            type="text"
            value={transportationCost}
            onChange={handleInputChange(setTransportationCost)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Price per kg */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("pricePerKg")}
          </label>
          <input
            type="text"
            value={pricePerKg}
            onChange={handleInputChange(setPricePerKg)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md transition hover:bg-blue-500"
        >
          {t("predict")}
        </button>
      </form>

      {predictionResult && (
        <div className="mt-4">
          <h2 className="font-semibold">{t("predictionResultTitle")}</h2>
          <p>
            {t("predictedPrice")}: {predictionResult.price} INR
          </p>
          <p>
            {t("recommendedStock")}: {predictionResult.recommendedStock} Tons
          </p>
          <p>
            {t("userSupplyVolume")}: {predictionResult.userSupplyVolume} Tons
          </p>
        </div>
      )}

      {graphData.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">{t("bufferStockGraphTitle")}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                  label={{
                    value: "Price (INR)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="constant"
                stroke="#82ca9d"
                name="Critical Point" // Updated label name for the legend
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <button
        onClick={handleReset}
        className="mt-4 w-full bg-red-600 text-white font-semibold p-2 rounded-md transition hover:bg-red-500"
      >
        {t("reset")}
      </button>
    </div>
  );
};

export default BufferStockComponent;
