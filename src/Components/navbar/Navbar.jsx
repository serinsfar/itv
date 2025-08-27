// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";
import PropTypes from 'prop-types';

const Navbar = ({ contactRef }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'businessUnits' | 'language' | null
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // sub-ids per menu
  const [language, setLanguage] = useState('EN');
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs (optional but handy to read, not strictly required with the data-attr approach)
  const mobileMenuRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  // Submenus for services
  const servicesOptions = [
    { title: t('Data'), subMenu: [
      { title: t('Metadata'), Link: '/metadata' },
      { title: t('Data Organisation'), Link: '/Data_organisation' },
      { title: t('Data Modeling'), Link: '/Data_Modeling' },
    ]},
    { title: t('Infrastructure'), subMenu: [
      { title: t('System Architecture'), Link: '/System_Arch' },
      { title: t('Specifications'), Link: '/Specification' },
      { title: t('Procurement of a System'), Link: '/Procurment_System' },
      { title: t('Test Management'), Link: '/Test_Management' },
    ]},
    { title: t('People'), subMenu: [
      { title: t('Awareness'), Link: '/Awareness' },
      { title: t('Training'), Link: '/Training' },
    ]},
    { title: t('Process'), subMenu: [
      { title: t('Process Documentation'), Link: '/Process_Documentation' },
      { title: t('Process Design'), Link: '/Process_Design' },
      { title: t('Process Optimization'), Link: '/Process_Optimisation' },
    ]},
    { title: t('Organisation'), subMenu: [
      { title: t('Strategy'), Link: '/Strategy' },
      { title: t('Organisational Development'), Link: '/Organisational_Development' },
    ]},
  ];

  const businessUnits = [
    { title: t('Aeronautical Information Management'), Link: '/AIM' },
    { title: t('Spatial Data Infrastructure'), Link: '/SDI' },
    { title: t('Data collection service'), Link: '/DCS' },
  ];

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  // ✅ Close on page click (outside ANY dropdown/sub-dropdown/mobile panel)
  useEffect(() => {
    const handlePointerDown = (event) => {
      const target = event.target;
      // If the click is inside any zone marked as "keep open", do nothing
      if (target && typeof target.closest === 'function' && target.closest('[data-keep-open="true"]')) {
        return;
      }
      // Otherwise close everything
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [mobileMenuOpen]);

  return (
    <nav className="relative z-20 bg-light">
      <div className="container py-5 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/"><img src={logo} alt="Logo" className="logo w-16 h-auto lg:w-32" /></Link>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link to="/" className="text-xl hover:text-secondary">{t('Home')}</Link>

          {/* Services Dropdown (desktop) */}
          <div className="relative" data-keep-open="true">
            <button
              onClick={() => toggleDropdown('services')}
              className="text-xl hover:text-secondary focus:outline-none inline-flex"
            >
              {t('Services')}
              <svg
                className="ml-1 -mr-1 h-5 w-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {openDropdown === 'services' && (
              <ul className="absolute top-full left-0 mt-2 w-max min-w-[14rem] bg-white border rounded shadow-md">
                {servicesOptions.map((option, index) => (
                  <li key={index} className="relative">
                    <button
                      onClick={() => toggleSubDropdown(option.title)}
                      className="block w-full text-left px-4 py-4 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm focus:outline-none"
                    >
                      {option.title}
                    </button>

                    {openSubDropdown === option.title && (
                      <ul className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-md w-max min-w-[14rem]">
                        {option.subMenu.map((subOption, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subOption.Link}
                              className="block px-4 py-5 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subOption.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Business Units Dropdown (desktop) */}
          <div className="relative" data-keep-open="true">
            <button
              onClick={() => toggleDropdown('businessUnits')}
              className="text-xl hover:text-secondary focus:outline-none inline-flex"
            >
              {t('Business Units')}
              <svg
                className="ml-1 -mr-1 h-5 w-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {openDropdown === 'businessUnits' && (
              <ul className="absolute top-full left-0 mt-2 w-max min-w-[14rem] bg-white border rounded shadow-md">
                {businessUnits.map((unit, index) => (
                  <li key={index}>
                    <Link
                      to={unit.Link}
                      className="block px-4 py-5 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {unit.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/company" className="text-xl hover:text-secondary">{t('Company')}</Link>
          <Link to="/References" className="text-xl hover:text-secondary">{t('References')}</Link>

          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (contactRef && contactRef.current) {
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="primary-btn flex items-center gap-2 mt-2" onClick={handleContactClick}>
              {t("Contact")}
            </button>
          </Link>
        </div>

        {/* Language (desktop) */}
        <div className="relative hidden lg:block mt-2" data-keep-open="true">
          <button onClick={() => toggleDropdown('language')} className="text-xl hover:text-secondary">
            {language}
          </button>
          {openDropdown === 'language' && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-20">
              {['EN', 'DE'].filter((lang) => lang !== language).map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => {
                      switchLanguage(lang);
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left rounded-md"
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile burger */}
        <div
          className="lg:hidden hover:text-secondary"
          data-keep-open="true"     // ⬅️ prevent outside handler from fighting the toggle
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <IoMdMenu className="text-4xl" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white shadow-md absolute top-full left-0 w-full z-30 py-4 px-6 max-h-[90vh] overflow-y-auto"
          data-keep-open="true"     // ⬅️ clicks inside won’t close everything
          ref={mobileMenuRef}
        >
          {/* Home */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xl font-semibold hover:bg-light rounded-md p-3"
          >
            {t('Home')}
          </Link>

          {/* Services (mobile) */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left text-xl hover:bg-light rounded-md p-3 font-semibold flex justify-between items-center"
            >
              {t('Services')}
              {openDropdown === 'services' ? <RxTriangleUp className="text-xl" /> : <RxTriangleDown className="text-xl" />}
            </button>

            {openDropdown === 'services' && (
              <div className="pl-4 mt-2 space-y-2">
                {servicesOptions.map((option, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleSubDropdown(index)}
                      className="w-full text-left font-semibold flex justify-between items-center hover:bg-light rounded-md p-2"
                    >
                      {option.title}
                      {openSubDropdown === index ? <RxTriangleUp /> : <RxTriangleDown />}
                    </button>

                    {openSubDropdown === index && (
                      <ul className="ml-4 mt-1 space-y-1 border-gray-200 pl-2">
                        {option.subMenu.map((subOption, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subOption.Link}
                              className="block py-3 px-3 border-l-2 hover:bg-light rounded-md font-medium"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }}
                            >
                              {subOption.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Business Units (mobile) */}
          <div>
            <button
              onClick={() => toggleDropdown('businessUnits')}
              className="w-full text-left text-xl font-semibold flex justify-between hover:bg-light rounded-md p-3"
            >
              {t('Business Units')}
              {openDropdown === 'businessUnits' ? <RxTriangleUp className="text-xl" /> : <RxTriangleDown className="text-xl" />}
            </button>

            {openDropdown === 'businessUnits' && (
              <ul className="pl-4 mt-2 space-y-2">
                {businessUnits.map((unit, index) => (
                  <li key={index}>
                    <Link
                      to={unit.Link}
                      className="block hover:bg-light rounded-md p-3 font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {unit.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company */}
          <Link
            to="/company"
            className="block text-xl font-semibold hover:bg-light rounded-md p-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Company')}
          </Link>

          {/* References */}
          <Link
            to="/References"
            className="block text-xl font-semibold hover:bg-light rounded-md p-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('References')}
          </Link>

          {/* Contact */}
          <button
            className="primary-btn w-full my-3"
            onClick={() => {
              navigate('/', { state: { scrollToContact: true } });
              setMobileMenuOpen(false);
            }}
          >
            {t('Contact')}
          </button>

          {/* Language (mobile) */}
          <div>
            <button
              onClick={() => toggleDropdown('language')}
              className="text-xl font-semibold flex justify-between w-full hover:bg-light rounded-md p-3"
            >
              {language}
              {openDropdown === 'language' ? <RxTriangleUp className="text-xl" /> : <RxTriangleDown className="text-xl" />}
            </button>

            {openDropdown === 'language' && (
              <ul className="mt-2 pl-4 space-y-1">
                {['EN', 'DE'].filter((lang) => lang !== language).map((lang) => (
                  <li key={lang}>
                    <button
                      className="block py-1 px-3 hover:bg-light rounded-md w-full text-left"
                      onClick={() => {
                        switchLanguage(lang);
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  contactRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element)
  })
};

export default Navbar;
