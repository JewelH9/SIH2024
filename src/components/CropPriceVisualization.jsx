import React, { useState, useEffect } from "react";
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

function Loader() {
  return <div className="text-center text-lg">Loading...</div>;
}

function CropPriceVisualization() {
  const [data, setData] = useState([]);
  const [selectedGraphs, setSelectedGraphs] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("New Delhi");

  // Graph types with "Market Price" set to show for 12 months
  const graphTypes = [
    { name: "Market Price", dataKey: "market_price", color: "#f39c12" }, // Show 12 months
    { name: "Temperature", dataKey: "temp_c", color: "#82ca9d" }, // Show until September
    { name: "Humidity", dataKey: "humidity", color: "#ff9999" }, // Show until September
    { name: "Wind Speed", dataKey: "wind_mph", color: "#66b3ff" }, // Show until September
    { name: "Precipitation", dataKey: "precip_mm", color: "#ffc658" }, // Show until September
    { name: "UV Index", dataKey: "uv", color: "#ff6666" }, // Show until September
    { name: "Cloud Cover", dataKey: "cloud", color: "#cccccc" }, // Show until September
    { name: "Wind Gust", dataKey: "gust_mph", color: "#ffccff" }, // Show until September
    { name: "Feels Like", dataKey: "feelslike_c", color: "#ffb3b3" }, // Show until September
    { name: "Dew Point", dataKey: "dewpoint_c", color: "#b3e0ff" }, // Show until September
  ];

  useEffect(() => {
    const defaultGraphs = graphTypes.reduce((acc, graph) => {
      acc[graph.dataKey] = "bar";
      return acc;
    }, {});
    setSelectedGraphs(defaultGraphs);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiKey = "4aa6dbae380f48fb8ab140125242109";

      // Fetch Weather Data for 9 months (January to September 2024)
      const monthsForWeather = Array.from({ length: 9 }, (_, i) => i + 1); // Jan-Sep 2024
      const fetchWeatherPromises = monthsForWeather.map((month) => {
        const date = `2024-${month.toString().padStart(2, "0")}-01`;
        return fetch(
          `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${date}`
        ).then((response) => response.json());
      });

      // Fetch Market Price Data for 12 months (June 2023 to May 2024)
      const marketPriceApiKey =
        "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";
      const marketPriceUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${marketPriceApiKey}&format=json&limit=12`;
      const marketPriceResponse = await fetch(marketPriceUrl);
      const marketPriceData = await marketPriceResponse.json();

      const weatherResults = await Promise.all(fetchWeatherPromises);

      // Combine both datasets into one array, ensuring that Market Price covers 12 months and Weather data covers Jan-Sep
      const yearData = monthsForWeather.map((month, index) => {
        const result = weatherResults[index];

        if (
          result.forecast &&
          result.forecast.forecastday &&
          result.forecast.forecastday[0]
        ) {
          const day = result.forecast.forecastday[0].day;

          return {
            name: `${index + 1}-2024`,
            temp_c: day.avgtemp_c,
            humidity: day.avghumidity,
            wind_mph: day.maxwind_mph,
            precip_mm: day.totalprecip_mm,
            uv: day.uv,
            cloud: day.avghumidity,
            gust_mph: day.maxwind_mph,
            feelslike_c: day.avgtemp_c,
            dewpoint_c: day.avgtemp_c,
            market_price: marketPriceData.records[index]?.modal_price || 0, // Adding market price data (only for months covered by the data)
          };
        } else {
          return {
            name: `${index + 1}-2024`,
            temp_c: null,
            humidity: null,
            wind_mph: null,
            precip_mm: null,
            uv: null,
            cloud: null,
            gust_mph: null,
            feelslike_c: null,
            dewpoint_c: null,
            market_price: marketPriceData.records[index]?.modal_price || 0, // Ensure market price is filled for missing weather data
          };
        }
      });

      setData(yearData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGraphChange = (dataKey, graphType) => {
    setSelectedGraphs((prev) => ({ ...prev, [dataKey]: graphType }));
  };

  const filteredGraphTypes = graphTypes.filter((graph) =>
    graph.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(); // Fetch data on submit
  };

  return (
    <div className="container mx-auto px-6 md:px-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">Crop Price Visualization</h2>

      {/* Place Name Input and Submit Button */}
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter place name..."
          className="border p-2 rounded w-full mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>

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

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGraphTypes.length > 0 ? (
            filteredGraphTypes.map((graph) => (
              <div key={graph.dataKey} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{graph.name} Visualization</h3>
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
                      <CartesianGrid stroke="#ccc" />
                      <Bar
                        dataKey={graph.dataKey}
                        fill={graph.color}
                        name={graph.name}
                      />
                    </BarChart>
                  )}

                  {selectedGraphs[graph.dataKey] === "line" && (
                    <LineChart data={data}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid stroke="#ccc" />
                      <Line
                        type="monotone"
                        dataKey={graph.dataKey}
                        stroke={graph.color}
                        name={graph.name}
                      />
                      <Legend />
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
                      />
                      <Tooltip />
                    </PieChart>
                  )}
                </ResponsiveContainer>
              </div>
            ))
          ) : (
            <p>No graphs found for the entered search term.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CropPriceVisualization;
