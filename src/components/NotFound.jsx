import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

function NotFound() {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">{t('notFound.title')}</h1>
      <p className="text-gray-700">{t('notFound.message')}</p>
    </div>
  );
}

export default NotFound;
