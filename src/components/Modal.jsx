import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import the translation hook

const Modal = ({ isOpen, onClose, resources }) => {
  const { t } = useTranslation(); // Use the translation hook

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">{t("modal.downloadableResources")}</h2> {/* Translated title */}
        <ul>
          {resources.map((resource, index) => (
            <li key={index} className="mb-2">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {resource.title} {/* This should also use t(resource.title) if resource.title is a translation key */}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          {t("modal.close")} {/* Translated close button text */}
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
