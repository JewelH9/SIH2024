import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation(); // Initialize translation hook
  const [role, setRole] = useState("user");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <section className="bg-gray-100 py-12 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {role === "admin"
              ? t("signUp1.adminSignUp")
              : role === "farmer"
              ? t("signUp1.farmerSignUp")
              : t("signUp1.userSignUp")}
          </h2>
          <form>
            {/* Role Selection */}
            <div className="mb-5 text-center">
              <label className="block text-gray-700 font-medium mb-2">
                {t("signUp1.selectRole")}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="user">{t("signUp1.user")}</option>
                <option value="admin">{t("signUp1.admin")}</option>
                <option value="farmer">{t("signUp1.farmer")}</option>
              </select>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                {t("signUp1.fullName")}
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="text"
                id="name"
                placeholder={t("signUp1.enterFullName")}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                {t("signUp1.email")}
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                placeholder={t("signUp1.enterEmail")}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                {t("signUp1.password")}
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                id="password"
                placeholder={t("signUp1.enterPassword")}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
                {t("signUp1.confirmPassword")}
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                id="confirm-password"
                placeholder={t("signUp1.confirmPasswordPlaceholder")}
                required
              />
            </div>

            {/* Admin-Specific Fields */}
            {role === "admin" && (
              <>
                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="aadhar">
                    {t("signUp1.aadhar")}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    id="aadhar"
                    placeholder={t("signUp1.enterAadhar")}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="gov-documents">
                    {t("signUp1.govDocuments")}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="file"
                    id="gov-documents"
                    required
                  />
                </div>
              </>
            )}

            {/* Farmer-Specific Fields */}
            {role === "farmer" && (
              <>
                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="farmer-id">
                    {t("signUp1.farmerId")}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    id="farmer-id"
                    placeholder={t("signUp1.enterFarmerId")}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="land-size">
                    {t("signUp1.landSize")}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    id="land-size"
                    placeholder={t("signUp1.enterLandSize")}
                    required
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                {role === "admin"
                  ? t("signUp1.signUpAsAdmin")
                  : role === "farmer"
                  ? t("signUp1.signUpAsFarmer")
                  : t("signUp1.signUpAsUser")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
