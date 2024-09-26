import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Footer from "./Footer";
import FAQs from "./FAQ";
import Modal from "./Modal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"; // Import Recharts components

function HomePage() {
  const { t } = useTranslation(); // Initialize translation
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

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

  // Expanded dummy data for graphs with crops
  const monthlyPriceTrendsData = [
    { month: "Jan", Wheat: 85, Rice: 75 },
    { month: "Feb", Wheat: 92, Rice: 81 },
    { month: "Mar", Wheat: 78, Rice: 90 },
    { month: "Apr", Wheat: 88, Rice: 60 },
    { month: "May", Wheat: 95, Rice: 85 },
    { month: "Jun", Wheat: 80, Rice: 75 },
    { month: "Jul", Wheat: 90, Rice: 95 },
    { month: "Aug", Wheat: 70, Rice: 50 },
    { month: "Sep", Wheat: 88, Rice: 75 },
    { month: "Oct", Wheat: 94, Rice: 83 },
    { month: "Nov", Wheat: 76, Rice: 80 },
    { month: "Dec", Wheat: 82, Rice: 90 },
  ];

  const yieldVsPesticideUsageData = [
    {
      pesticide: "No Pesticide",
      Wheat: 90,
      Rice: 95,
      Corn: 100,
      Soybean: 65,
      Barley: 48,
    },
    {
      pesticide: "Low",
      Wheat: 80,
      Rice: 85,
      Corn: 80,
      Soybean: 78,
      Barley: 80,
    },
    {
      pesticide: "Medium",
      Wheat: 70,
      Rice: 45,
      Corn: 74,
      Soybean: 62,
      Barley: 60,
    },
    {
      pesticide: "High",
      Wheat: 55,
      Rice: 60,
      Corn: 68,
      Soybean: 50,
      Barley: 50,
    },
    {
      pesticide: "Very High",
      Wheat: 40,
      Rice: 45,
      Corn: 52,
      Soybean: 40,
      Barley: 35,
    },
  ];

  return (
    <section className="mb-8">
      {/* Hero Section */}
      <motion.div
        className="relative bg-blue-800 text-white py-16 mb-12 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-4">{t("welcome_message")}</h1>
          <p className="text-lg mb-6">{t("description")}</p>
          <div className="flex space-x-4">
            <Link
              to="/input"
              className="bg-white text-blue-800 py-2 px-4 rounded-md hover:bg-gray-100"
            >
              {t("get_started")}
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-800 py-2 px-4 rounded-md hover:bg-gray-100"
            >
              {t("download_resources")}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Crop Price Visualization Tab */}
      <motion.div
        className="container mx-auto px-6 md:px-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          {t("agricultural_graph_visualization")} {/* Translated title */}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          {t("explore_visualizations")} {/* Translated description */}
        </p>
        <div className="flex justify-center mb-8">
          <Link
            to="/crop-price-visualization"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 12h18M3 21h18"
                />
              </svg>
              {t("view_visualization")} {/* Translated button text */}
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">
              {t("monthly_price_trends")} {/* Translated subheading */}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyPriceTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  label={{
                    value: "Months",
                    position: "insideBottom",
                    offset: -5,
                  }}
                />
                <YAxis
                  label={{
                    value: "Price (INR)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />

                {/* Rendering a line for each crop */}
                <Line
                  type="monotone"
                  dataKey="Wheat"
                  stroke="#ff7300"
                  name="Wheat"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="Rice"
                  stroke="#8884d8"
                  name="Rice"
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">
              {t("yield_vs_pesticide_usage")} {/* Translated subheading */}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yieldVsPesticideUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="pesticide"
                  label={{
                    value: "Pesticide Usage (liters/ha)",
                    position: "insideBottom",
                    offset: -5,
                  }}
                />
                <YAxis
                  label={{
                    value: "Yield (tons/ha)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />

                {/* Rendering a line for each crop based on pesticide usage */}
                <Line
                  type="monotone"
                  dataKey="Wheat"
                  stroke="#82ca9d"
                  name="Wheat"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="Rice"
                  stroke="#8884d8"
                  name="Rice"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="Corn"
                  stroke="#ff7300"
                  name="Corn"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="Soybean"
                  stroke="#c72c91"
                  name="Soybean"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="Barley"
                  stroke="#0074d9"
                  name="Barley"
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">{t("key_features")}</h2>{" "}
          {/* Translated title */}
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>{t("feature_forecasting")}</li> {/* Translated feature */}
            <li>{t("feature_data_input")}</li> {/* Translated feature */}
            <li>{t("feature_historical_analysis")}</li>{" "}
            {/* Translated feature */}
            <li>{t("feature_report_generation")}</li> {/* Translated feature */}
            <li>{t("feature_user_friendly")}</li> {/* Translated feature */}
          </ul>
        </div>
        <div>
          <img
            src="https://cionews.co.in/wp-content/uploads/2022/10/Untitled-design-2022-10-06T104412.492.png"
            alt={t("key_features")} // Alt text for accessibility
            className="rounded-lg shadow-md w-full h-auto max-w-xs mx-auto"
          />
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="bg-gray-50 py-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20221106/pngtree-modern-tech-improves-farm-harvests-through-data-collection-photo-image_40543974.jpg"
              alt={t("how_it_works")} // Alt text for accessibility
              className="rounded-lg shadow-md w-full h-auto max-w-xs mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("how_it_works")}</h2>{" "}
            {/* Translated title */}
            <ol className="list-decimal list-inside text-gray-800 space-y-2">
              <li>{t("step_enter_data")}</li> {/* Translated step */}
              <li>{t("step_submit_data")}</li> {/* Translated step */}
              <li>{t("step_view_predictions")}</li> {/* Translated step */}
              <li>{t("step_generate_reports")}</li> {/* Translated step */}
            </ol>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resources={resources}
      />

      {/* Testimonials Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          {t("user_testimonials")} {/* Translated title */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "{t("testimonial_1")}" {/* Translated testimonial */}
            </p>
            <p className="text-blue-800 font-bold">
              {t("testimonial_1_author")}
            </p>{" "}
            {/* Translated author */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "{t("testimonial_2")}" {/* Translated testimonial */}
            </p>
            <p className="text-blue-800 font-bold">
              {t("testimonial_2_author")}
            </p>{" "}
            {/* Translated author */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">
              "{t("testimonial_3")}" {/* Translated testimonial */}
            </p>
            <p className="text-blue-800 font-bold">
              {t("testimonial_3_author")}
            </p>{" "}
            {/* Translated author */}
          </div>
        </div>
      </motion.div>

      {/* FAQs Section */}
      <FAQs />

      {/* Modal for Download Resources */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resources={resources}
      />

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default HomePage;
