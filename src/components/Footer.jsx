import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <footer className="bg-gray-800 text-white rounded-lg py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">{t("footer.aboutTitle")}</h4>
          <p className="text-gray-400">
            {t("footer.aboutDescription")}
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">{t("footer.quickLinksTitle")}</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                {t("footer.contact")}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                {t("footer.privacyPolicy")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">{t("footer.followUsTitle")}</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt={t("footer.facebook")}
                className="w-8 h-8 hover:opacity-75"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-256.png"
                alt={t("footer.twitter")}
                className="w-8 h-8 hover:opacity-75"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt={t("footer.instagram")}
                className="w-8 h-8 hover:opacity-75"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                alt={t("footer.linkedin")}
                className="w-8 h-8 hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 {t("footer.companyName")}. {t("footer.rightsReserved")}
      </div>
    </footer>
  );
}

export default Footer;
