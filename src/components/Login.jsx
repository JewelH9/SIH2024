import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();  // Translation hook
  const [role, setRole] = useState("user");

  const handleRoleChange = (event) => {
    setRole(event.target.value);  // Change role based on dropdown selection
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
          {t('login1.title', { role: t(`login1.${role}`) })}  {/* Translate role */}
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="role">
                {t('login1.selectRole')}  {/* Translate Select Role */}
              </label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="role"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="user">{t('login1.user')}</option>
                <option value="farmer">{t('login1.farmer')}</option>
                <option value="admin">{t('login1.admin')}</option>
              </select>
            </div>

            {/* Additional form fields based on role */}
            {role === "farmer" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="username">
                    {t('login1.username')}
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    id="username"
                    placeholder={t('login1.username')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="mobile">
                    {t('login1.mobile')}
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="tel"
                    id="mobile"
                    placeholder={t('login1.mobile')}
                    required
                  />
                </div>
              </>
            )}

            {/* Common email field */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                {t('login1.email')}
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                placeholder={t('login1.email')}
                required
              />
            </div>

            {/* Common password field */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                {t('login1.password')}
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                id="password"
                placeholder={t('login1.password')}
                required
              />
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                {t('login1.loginButton', { role: t(`login1.${role}`) })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
