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
    const savedFormData = localStorage.getItem('inputFormData');
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      console.log('Retrieved form data from localStorage:', parsedData);
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

    localStorage.setItem('inputFormData', JSON.stringify(formData));
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
      setError(t('error'));
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
      userSupplyVolume: supplyVolume
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
    localStorage.removeItem('inputFormData');
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        {t('bufferStockTitle')}
      </h1>

      {error && (
        <div className="mb-4 text-red-600 font-semibold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Commodity */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('commodity')}</label>
          <select
            value={commodity}
            onChange={handleInputChange(setCommodity)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>{t('selectCommodity')}</option>
            <option value="Rice">{t('rice')}</option>
            <option value="Onion">{t('onion')}</option>
          </select>
        </div>

        {/* Current Stock */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('currentStock')}</label>
          <input
            type="text"
            value={currentStock}
            onChange={handleInputChange(setCurrentStock)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Supply Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('supplyVolume')}</label>
          <input
            type="number"
            value={supplyVolume}
            onChange={handleInputChange(setSupplyVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('supplyVolumePlaceholder')}
            required
          />
        </div>

        {/* Demand Volume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('demandVolume')}</label>
          <input
            type="number"
            value={demandVolume}
            onChange={handleInputChange(setDemandVolume)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('demandVolumePlaceholder')}
            required
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('state')}</label>
          <select
            value={state}
            onChange={handleInputChange(setState)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>{t('selectState')}</option>
            {indianStates.map((stateName) => (
              <option key={stateName} value={stateName}>{stateName}</option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('district')}</label>
          <input
            type="text"
            value={district}
            onChange={handleInputChange(setDistrict)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          />
        </div>

        {/* Season */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('season')}</label>
          <select
            value={season}
            onChange={handleInputChange(setSeason)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
          >
            <option value="" disabled>{t('selectSeason')}</option>
            <option value="Rabi">{t('rabi')}</option>
            <option value="Kharif">{t('kharif')}</option>
          </select>
        </div>

        {/* Temperature */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('temperature')}</label>
          <input
            type="number"
            value={temperature}
            onChange={handleInputChange(setTemperature)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('temperaturePlaceholder')}
          />
        </div>

        {/* Rainfall */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('rainfall')}</label>
          <input
            type="number"
            value={rainfall}
            onChange={handleInputChange(setRainfall)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('rainfallPlaceholder')}
          />
        </div>

        {/* Transportation Cost */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('transportationCost')}</label>
          <input
            type="number"
            value={transportationCost}
            onChange={handleInputChange(setTransportationCost)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('transportationCostPlaceholder')}
          />
        </div>

        {/* Fertilizers Used */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('fertilizersUsed')}</label>
          <input
            type="number"
            value={fertilizersUsed}
            onChange={handleInputChange(setFertilizersUsed)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('fertilizersUsedPlaceholder')}
          />
        </div>

        {/* Pest Infestation */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('pestInfestation')}</label>
          <input
            type="number"
            value={pestInfestation}
            onChange={handleInputChange(setPestInfestation)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('pestInfestationPlaceholder')}
          />
        </div>

        {/* Market Competition */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('marketCompetition')}</label>
          <input
            type="number"
            value={marketCompetition}
            onChange={handleInputChange(setMarketCompetition)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('marketCompetitionPlaceholder')}
          />
        </div>

        {/* Price per kg */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">{t('pricePerKg')}</label>
          <input
            type="number"
            value={pricePerKg}
            onChange={handleInputChange(setPricePerKg)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 transition"
            placeholder={t('pricePerKgPlaceholder')}
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition">
          {t('predict')}
        </button>
      </form>

      {/* Prediction result */}
      {predictionResult && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h2 className="font-semibold">{t('predictionResultTitle')}</h2>
          <p>{t('predictedPrice')}: ₹{predictionResult.price}</p>
          <p>{t('recommendedStock')}: {predictionResult.recommendedStock} kg</p>
          <p>{t('userSupplyVolume')}: {predictionResult.userSupplyVolume} kg</p>
        </div>
      )}

      <button onClick={handleReset} className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-500 transition">
        {t('reset')}
      </button>
    </div>
  );
};

export default BufferStockComponent;
