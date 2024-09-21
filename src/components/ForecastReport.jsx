import React, { useState } from "react";
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
import { motion } from "framer-motion";

function ForecastReport() {
  const { t } = useTranslation();
  const [predictedPrice, setPredictedPrice] = useState(30); // Set a dummy predicted price
  const [selectedCrop, setSelectedCrop] = useState("Dummy Crop");

  // Dummy data for the graph
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

          <div className="w-full h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cropData.actual}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8884d8"
                  dot={false}
                  name={t("forecastReport1.actualLine")}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#82ca9d"
                  dot={false}
                  name={t("forecastReport1.forecastLine")}
                  data={cropData.forecast}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-lg font-medium mb-4 text-green-700">
            {t("forecastReport1.predictedPrice", { price: predictedPrice })}
          </p>

          <button
            onClick={() => alert(t("forecastReport.shareButton"))}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {t("forecastReport1.shareButton")}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default ForecastReport;
