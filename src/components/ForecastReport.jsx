import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import { motion } from "framer-motion";

function ForecastReport() {
  const { t } = useTranslation();
  const location = useLocation();
  const [predictedPrice, setPredictedPrice] = useState(30);
  const [selectedCrop, setSelectedCrop] = useState("Dummy Crop");
  const [graphType, setGraphType] = useState("line");

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${t("forecastReport1.title")} - ${selectedCrop}`,
          text: `${t("forecastReport1.predictedPrice", {
            price: predictedPrice,
          })}`,
          url: window.location.href, // URL of the current page
        })
        .then(() => console.log("Share successful!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert(t("forecastReport.shareUnsupported"));
    }
  };

  // Extract crop name from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const crop = params.get("crop");
    if (crop) {
      setSelectedCrop(decodeURIComponent(crop));
    }
  }, [location.search]);

  const cropData = {
    actual: [
      { month: "Jan", price: 20 },
      { month: "Feb", price: 35 },
      { month: "Mar", price: 70 },
      { month: "Apr", price: 50 },
      { month: "May", price: 60 },
      { month: "Jun", price: 45 },
      { month: "Jul", price: 80 },
      { month: "Aug", price: 55 },
      { month: "Sep", price: 90 },
      { month: "Oct", price: 40 },
      { month: "Nov", price: 75 },
      { month: "Dec", price: 65 },
    ],
    forecast: [
      { month: "Jan", price: 23 },
      { month: "Feb", price: 33 },
      { month: "Mar", price: 56 },
      { month: "Apr", price: 48 },
      { month: "May", price: 70 },
      { month: "Jun", price: 50 },
      { month: "Jul", price: 45 },
      { month: "Aug", price: 60 },
      { month: "Sep", price: 95 },
      { month: "Oct", price: 45 },
      { month: "Nov", price: 80 },
      { month: "Dec", price: 70 },
    ],
  };

  const combinedData = cropData.actual.map((item, index) => ({
    month: item.month,
    actualPrice: item.price,
    forecastPrice: cropData.forecast[index].price,
  }));

  const resources = [
    {
      title: t("resources.bestPractices"),
      link: "https://eird.org/pr14/cd/documentos/espanol/CaribeHerramientasydocumentos/Agricultura/oxfamguideagriculture2014eng.pdf",
    },
    {
      title: t("resources.cropManagement"),
      link: "https://icar.org.in/sites/default/files/inline-files/crop-management-AR-2011-12_1.pdf",
    },
    {
      title: t("resources.weatherPatterns"),
      link: "https://www.nios.ac.in/media/documents/316courseE/ch17.pdf",
    },
    {
      title: t("resources.tradingStrategies"),
      link: "https://www.investopedia.com/articles/forex/031015/guide-agricultural-trading-strategies.asp",
    },
    {
      title: t("resources.marketAnalysis"),
      link: "https://www.marketwatch.com/story/how-to-analyze-agricultural-stocks-2020-01-23",
    },
    {
      title: t("resources.commodityMarkets"),
      link: "https://www.cmegroup.com/education/understanding-commodity-markets.html",
    },
    {
      title: t("resources.agriculturalInvestments"),
      link: "https://www.forbes.com/sites/greatspeculations/2021/05/27/agricultural-investments-a-rising-trend/",
    },
  ];

  return (
    <motion.section
      className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-800">
        {t("forecastReport1.title")}
      </h3>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">
            {t("forecastReport1.cropLabel", { crop: selectedCrop })}
          </h4>

          {/* Graph Type Selection */}
          <div className="mb-4">
            <label className="mr-4">Select Graph Type:</label>
            <select
              value={graphType}
              onChange={(e) => setGraphType(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
          </div>

          <div className="w-full h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              {graphType === "line" ? (
                <LineChart data={combinedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actualPrice"
                    stroke="#8884d8"
                    dot={false}
                    name={t("forecastReport1.actualLine")}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecastPrice"
                    stroke="#82ca9d"
                    dot={false}
                    name={t("forecastReport1.forecastLine")}
                  />
                </LineChart>
              ) : graphType === "bar" ? (
                <BarChart data={combinedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="actualPrice"
                    fill="#8884d8"
                    name={t("forecastReport1.actualLine")}
                  />
                  <Bar
                    dataKey="forecastPrice"
                    fill="#82ca9d"
                    name={t("forecastReport1.forecastLine")}
                  />
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={combinedData}
                    dataKey="actualPrice"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={({ name, value }) => `${name}: ${value}`} // Custom label format
                  />
                  <Pie
                    data={combinedData}
                    dataKey="forecastPrice"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#82ca9d"
                    label={({ name, value }) => `${name}: ${value}`} // Custom label format
                  />
                  <Tooltip />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>

          <p className="text-lg font-medium mb-4 text-green-700">
            {t("forecastReport1.predictedPrice", { price: predictedPrice })}
          </p>

          <button
            onClick={handleShare}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {t("forecastReport1.shareButton")}
          </button>
        </div>

        {/* Downloadable Resources Section */}
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <h4 className="text-xl font-semibold mb-4">{t("resources.title")}</h4>
          <ul className="list-disc list-inside space-y-2">
            {resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.link}
                  className="text-blue-600 hover:underline"
                  download
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default ForecastReport;
