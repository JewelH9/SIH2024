import React from "react";

function Predictions() {
  // Placeholder data
  const prediction = {
    crop: "Wheat",
    forecastedPrice: "₹1,500 per quintal",
    confidenceInterval: "±₹100",
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Predicted Prices</h3>
      <div className="text-gray-700">
        <p>Crop: {prediction.crop}</p>
        <p>Forecasted Price: {prediction.forecastedPrice}</p>
        <p>Confidence Interval: {prediction.confidenceInterval}</p>
      </div>
    </section>
  );
}

export default Predictions;
