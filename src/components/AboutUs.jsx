import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "JEWEL HOSSAIN",
      role: "TEAM LEAD, FULL-STACK DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    {
      name: "SOHAM BHATTACHARYYA",
      role: "AIML DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    {
      name: "SUBHAMITA BANIK",
      role: "AIML DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    {
      name: "MD. AZAM",
      role: "BACK-END DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    {
      name: "TANVEER HOSSAIN",
      role: "DATABASE DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    {
      name: "TRIDIB BAG",
      role: "BACK-END DEVELOPER",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-8">{t("aboutUsTitle")}</h2>
        <p className="text-lg text-gray-700 mb-12">{t("aboutUsDescription")}</p>

        {/* Mission Statement */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{t("ourMission")}</h3>
          <p className="text-gray-700">{t("missionDescription")}</p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={member.imgSrc}
                alt={member.name}
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{t(member.role)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
