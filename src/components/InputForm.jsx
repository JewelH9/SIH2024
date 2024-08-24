import React, { useState } from 'react';

function InputForm() {
  const [crop, setCrop] = useState('');
  const [price, setPrice] = useState('');
  const [production, setProduction] = useState('');

  const crops = [
    'Wheat',
    'Rice',
    'Maize',
    'Soybean',
    'Barley',
    'Sugarcane',
    'Potato',
    'Tomato',
    'Onion',
    'Cotton',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the backend for processing)
    console.log({ crop, price, production });
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-bold mb-4">Enter Crop Data</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Crop Type</label>
          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="" disabled>Select a crop</option>
            {crops.map((cropName) => (
              <option key={cropName} value={cropName}>
                {cropName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Current Market Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter market price"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Production Estimates</label>
          <input
            type="number"
            value={production}
            onChange={(e) => setProduction(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter production estimates"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Get Forecast
        </button>
      </form>
    </section>
  );
}

export default InputForm;
