import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

  // State for all the fields
  const [commodity, setCommodity] = useState("");
  const [currentStock, setCurrentStock] = useState("");
  const [supplyVolume, setSupplyVolume] = useState("");
  const [demandVolume, setDemandVolume] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [transportationCost, setTransportationCost] = useState("");
  const [fertilizersUsed, setFertilizersUsed] = useState("");
  const [pestInfestation, setPestInfestation] = useState("");
  const [marketCompetition, setMarketCompetition] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState("");

  // Retrieve values from localStorage and set states
  useEffect(() => {
    const savedFormData = localStorage.getItem("inputFormData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      console.log("Retrieved form data from localStorage:", parsedData);

      setCommodity(parsedData.commodity || "");
      setCurrentStock(parsedData.currentStock || "");
      setSupplyVolume(parsedData.supplyVolume || "");
      setDemandVolume(parsedData.demandVolume || "");
      setState(parsedData.state || "");
      setDistrict(parsedData.district || "");
      setSeason(parsedData.season || "");
      setTemperature(parsedData.temperature || "");
      setRainfall(parsedData.rainfall || "");
      setTransportationCost(parsedData.transportationCost || "");
      setFertilizersUsed(parsedData.fertilizersUsed || "");
      setPestInfestation(parsedData.pestInfestation || "");
      setMarketCompetition(parsedData.marketCompetition || "");
      setPricePerKg(parsedData.pricePerKg || "");
    } else {
      console.log("No data found in localStorage.");
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
      temperature,
      rainfall,
      transportationCost,
      fertilizersUsed,
      pestInfestation,
      marketCompetition,
      pricePerKg,
    };

    localStorage.setItem("inputFormData", JSON.stringify(formData));
  };

  // Update state and save to localStorage on field change
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
  };

  const handleReset = () => {
    setCommodity("");
    setCurrentStock("");
    setSupplyVolume("");
    setDemandVolume("");
    setState("");
    setDistrict("");
    setSeason("");
    setTemperature("");
    setRainfall("");
    setTransportationCost("");
    setFertilizersUsed("");
    setPestInfestation("");
    setMarketCompetition("");
    setPricePerKg("");
    setPredictionResult(null);
    setError("");
    localStorage.removeItem("inputFormData");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        {t("bufferStockTitle")}
      </h1>

      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Commodity */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("commodity")}
          </label>
          <select
            value={commodity}
            onChange={handleInputChange(setCommodity)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Supply Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("supplyVolume")}
          </label>
          <input
            type="number"
            value={supplyVolume}
            onChange={handleInputChange(setSupplyVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder={t("supplyVolumePlaceholder")}
            required
          />
        </div>

        {/* Demand Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("demandVolume")}
          </label>
          <input
            type="number"
            value={demandVolume}
            onChange={handleInputChange(setDemandVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder={t("demandVolumePlaceholder")}
            required
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t("state")}</label>
          <select
            value={state}
            onChange={handleInputChange(setState)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              {t("selectState")}
            </option>
            {indianStates.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Season */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t("season")}</label>
          <select
            value={season}
            onChange={handleInputChange(setSeason)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              {t("selectSeason")}
            </option>
            <option value="Rabi">{t("rabi")}</option>
            <option value="Kharif">{t("kharif")}</option>
          </select>
        </div>

        {/* Price per Kg */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            {t("pricePerKg")}
          </label>
          <input
            type="number"
            value={pricePerKg}
            onChange={handleInputChange(setPricePerKg)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder={t("pricePerKg")}
          />
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            {t("reset")}
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {t("submit")}
          </button>
        </div>
      </form>

      {predictionResult && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{t("predictionResults")}</h2>
          <p>
            {t("predictedPrice")}: ₹{predictionResult.price} {t("perKg")}
          </p>
          <p>
            {t("recommendedStock")}: {predictionResult.recommendedStock} tons
          </p>
          <p>
            {t("SupplyVolume")}: {predictionResult.userSupplyVolume} tons
          </p>
        </div>
      )}
    </div>
  );
};

export default BufferStockComponent;
