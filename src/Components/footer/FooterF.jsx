import React from "react";
import logo_white from "../../assets/logo_white.png";
import { Footer } from "flowbite-react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";




const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

const FooterF = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // <-- moved inside component
  const contactRef = React.useRef(null);

  const handleContactClick = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  return (
    <footer className="pt-16 bg-primary">
      <div className="container flex flex-col items-center pb-5">
        {/* Logo Section */}
        <div className="w-full flex justify-center mb-10">
          <img className="w-44 md:w-52" src={logo_white} alt="Logo" />
        </div>

        {/* Two Columns Section */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column: Menu & Company */}
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Menu Section */}
            <div className="space-y-4 flex-1">
              <h1 className="text-2xl font-bold text-white">Menu</h1>
              <ul className="text-gray-400 space-y-2 text-lg">
                <li className="cursor-pointer hover:text-white">
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                  <Link to="/Metadata" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Services')}</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                  <Link to="/AIM" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Business Units')}</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                  <Link to="/company">{t('Company')}</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                  {/* Use a button that navigates with state */}
                  <button type="button" onClick={handleContactClick}>
                    {t("Contact Us")}
                  </button>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="space-y-4 flex-1 mt-8 md:mt-0">
              <h1 className="text-2xl font-bold text-white">{t('Address')}</h1>
              <ul className="text-gray-400 space-y-2 text-lg">
                <li>Dorfstrasse 53</li>
                <li>8105 Regensdorf-Watt</li>
                <li>
                  {t('Telefon')}:{" "}
                  <a className="hover:text-white" href="tel:+41 44 871 21 90">
                    +41 44 871 21 90
                  </a>
                </li>
                <li className="cursor-pointer hover:text-white duration-200">
                  <a href="mailto:Info@itv.ch" className="hover:text-white">
                    {t('Email')} : Info@itv.ch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Company & DCS Hotline */}
          <div className="flex flex-col md:flex-row md:gap-8 mt-8 md:mt-0">
            {/* Company Section */}
            <div className="space-y-4 flex-1">
              <h1 className="text-2xl font-bold text-white">{t('Company')}</h1>
              <ul className="text-gray-400 space-y-2 text-lg">
                <li>{t('Social networks')}</li>
                <li>
                  <div className="flex items-center gap-2">
                    <Footer.Icon
                      className="cursor-pointer hover:text-white duration-200"
                      href="https://www.linkedin.com/company/97985639"
                      icon={FaLinkedin}
                    />
                    <Footer.Icon
                      className="cursor-pointer hover:text-white duration-200"
                      href="mailto:info@itv.ch"
                      icon={FaEnvelope}
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/* DCS Service Hotline Section */}
            <div className="space-y-4 flex-1 mt-8 md:mt-0">
              <h1 className="text-2xl font-bold text-white">DCS Service Hotline</h1>
              <ul className="text-gray-400 space-y-3 text-lg">
                <li>{t('Monday to Friday')}</li>
                <li>08h30 - 11h30</li>
                <li>13h30 - 16h30</li>
                <li>
                  Hotline:{" "}
                  <a className="hover:text-white" href="tel:+41 44 871 21 99">
                    +41 44 871 21 99
                  </a>
                </li>
                <li className="cursor-pointer hover:text-white duration-200">
                  <a href="mailto:obstacles@itv.ch" className="hover:text-white">
                    {t('Email')}: obstacles@itv.ch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer.Divider className="w-fill border-gray-400 mt-8" />
        <div className="flex justify-center items-center text-sm text-center py-4 text-white w-full">
          <Footer.Copyright
            href="#"
            by="ITV Consult AG - All Rights Reserved"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterF;
