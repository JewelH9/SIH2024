import React, { useState } from "react";

function Login() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleRole = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {isAdmin ? "Admin Login" : "User Login"}
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="mb-4 text-center">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={toggleRole}
              >
                {isAdmin ? "Switch to User Login" : "Switch to Admin Login"}
              </button>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                {isAdmin ? "Login as Admin" : "Login as User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
