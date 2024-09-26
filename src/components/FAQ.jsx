import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">{t("faq.title")}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            layout 
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left p-4 font-bold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="p-4 text-gray-600"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: "1000px" }} // a large enough maxHeight
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }} // prevent overflow during transition
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
