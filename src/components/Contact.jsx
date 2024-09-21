import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
          {t("contact1.title")}
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  {t("contact1.nameLabel")}
                </label>
                <input
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact1.namePlaceholder")}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  {t("contact1.emailLabel")}
                </label>
                <input
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact1.emailPlaceholder")}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                {t("contact1.messageLabel")}
              </label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder={t("contact1.messagePlaceholder")}
                required
              ></textarea>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                {t("contact1.sendButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
