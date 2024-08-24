import React from "react";

function AboutUs() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-12">
          We are a dedicated team focused on providing accurate and insightful
          price predictions for agri-horticultural commodities. Our mission is
          to empower farmers, traders, and market analysts with the tools they
          need to make informed decisions.
        </p>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to revolutionize the agricultural market with
            data-driven insights and advanced AI-ML models, ensuring a stable
            and prosperous future for all stakeholders in the agri-horticultural
            sector.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
            />
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-gray-600">Data Scientist</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
            />
            <h4 className="text-xl font-semibold">Jane Smith</h4>
            <p className="text-gray-600">Software Engineer</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
            />
            <h4 className="text-xl font-semibold">Raj Patel</h4>
            <p className="text-gray-600">Market Analyst</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 4"
            />
            <h4 className="text-xl font-semibold">Emily Johnson</h4>
            <p className="text-gray-600">AI Specialist</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 5"
            />
            <h4 className="text-xl font-semibold">Michael Lee</h4>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 6"
            />
            <h4 className="text-xl font-semibold">Sophia Martinez</h4>
            <p className="text-gray-600">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
