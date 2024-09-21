import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function InputForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const initialFormData = () => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          date: "",
          state: "",
          district: "",
          commodity_name: "",
          season: "",
          temperature: "",
          rainfall: "",
          supply_volume: "",
          demand_volume: "",
          transportation_cost: "",
          fertilizers_used: "",
          pest_infestation: "",
          market_competition: "",
          price_per_kg: "",
        };
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const crops = [t("crops.rice"), t("crops.onion")];
  const seasons = [t("inputForm.season.rabi"), t("inputForm.season.kharif")];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.commodity_name) {
      setError(t("inputForm.error"));
      return;
    }

    const encodedCropName = encodeURIComponent(formData.commodity_name);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/forecast-report?crop=${encodedCropName}`);
    }, 1500);

    setError(null);
  };

  const handleReset = () => {
    const defaultFormData = {
      date: "",
      state: "",
      district: "",
      commodity_name: "",
      season: "",
      temperature: "",
      rainfall: "",
      supply_volume: "",
      demand_volume: "",
      transportation_cost: "",
      fertilizers_used: "",
      pest_infestation: "",
      market_competition: "",
      price_per_kg: "",
    };
    setFormData(defaultFormData);
    setError(null);
    localStorage.removeItem("formData");
  };

  return (
    <motion.section
      className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-800">
        {t("inputForm.title")}
      </h3>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="w-16 h-16 border-4 border-blue-700 border-dotted rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-lg font-medium"
              htmlFor="crop-select"
            >
              {t("inputForm.label")}
            </label>
            <select
              id="crop-select"
              name="commodity_name"
              value={formData.commodity_name}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                {t("inputForm.select")}
              </option>
              {crops.map((cropName) => (
                <option key={cropName} value={cropName}>
                  {cropName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-gray-700 text-lg font-medium"
              htmlFor="date"
            >
              {t("inputForm.date")}
            </label>
            <input
              id="date"
              name="date"
              type="month"
              value={formData.date}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-lg font-medium"
              htmlFor="state-select"
            >
              {t("inputForm.state")}
            </label>
            <select
              id="state-select"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                {t("inputForm.select")}
              </option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-gray-700 text-lg font-medium"
              htmlFor="season-select"
            >
              {t("inputForm.season.label")}
            </label>
            <select
              id="season-select"
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                {t("inputForm.select")}
              </option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium">
              {t("inputForm.pestInfestation")}
            </label>
            <div className="flex flex-wrap mt-2">
              {[...Array(11).keys()].map((num) => (
                <label key={num} className="mr-4 flex items-center">
                  <input
                    type="radio"
                    name="pest_infestation"
                    value={num}
                    checked={formData.pest_infestation === num.toString()}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium">
              {t("inputForm.marketCompetition")}
            </label>
            <div className="flex flex-wrap mt-2">
              {[...Array(11).keys()].map((num) => (
                <label key={num} className="mr-4 flex items-center">
                  <input
                    type="radio"
                    name="market_competition"
                    value={num}
                    checked={formData.market_competition === num.toString()}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          {[
            {
              name: "temperature",
              type: "number",
              placeholder: "Temperature (°C)",
            },
            { name: "rainfall", type: "number", placeholder: "Rainfall (mm)" },
            {
              name: "supply_volume",
              type: "number",
              placeholder: "Supply Volume (Tons)",
            },
            {
              name: "demand_volume",
              type: "number",
              placeholder: "Demand Volume (Tons)",
            },
            {
              name: "transportation_cost",
              type: "number",
              placeholder: "Transportation Cost (INR)",
            },
            {
              name: "fertilizers_used",
              type: "number",
              placeholder: "Fertilizers Used (Tons)",
            },
            {
              name: "price_per_kg",
              type: "number",
              placeholder: "Price per kg (INR)",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                className="block text-gray-700 text-lg font-medium"
                htmlFor={field.name}
              >
                {t(`inputForm.${field.name}`)}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={t(field.placeholder)}
                value={formData[field.name]}
                onChange={handleChange}
                className="mt-2 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t("inputForm.submit")}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300"
            >
              {t("inputForm.reset")}
            </button>
          </div>
        </form>
      )}
    </motion.section>
  );
}

export default InputForm;
