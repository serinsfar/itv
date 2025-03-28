import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // Track which sub-dropdown is open
  const [language, setLanguage] = useState('EN'); // Default language
  const { t, i18n } = useTranslation();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null); // Close submenus when changing main menu
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
    { title: t('Organization'), subMenu: [
      { title: t('Strategy'), Link: '/Strategy' },
      { title: t('Organizational Development'), Link: '/Organisational_Development' },
    ]},
  ];

  const businessUnits =[
    { title: t('Aeronautical Information Management'), Link: '/AIM' },
    {title: t('Spatial Data Infrastructure'), Link: '/SDI'},
    {title: t('Data collection service'), Link:'/DCS'},
  ]

  return (
    <nav className="relative z-20 bg-light">
      <div className="container py-5 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/"><img src={logo} alt="Logo" className="logo w-16 h-auto lg:w-32" /></Link>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link to="/" className="text-xl hover:text-secondary">{t('Home')}</Link>

          {/* Services Dropdown */}
          <div className="relative">
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
              <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48">
                {servicesOptions.map((option, index) => (
                  <li key={index} className="relative">
                    <button
                      onClick={() => toggleSubDropdown(option.title)}
                      className="block w-full text-left px-4 py-2 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm focus:outline-none"
                    >
                      {option.title}
                    </button>

                    {openSubDropdown === option.title && (
                      <ul className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md w-48"  onMouseLeave={() => setOpenDropdown(null)}>
                        {option.subMenu.map((subOption, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subOption.Link}
                              className="block px-4 py-2 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm"
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

          {/* Business Units Dropdown */}
          <div className="relative">
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

          {/* Dropdown List */}
          {openDropdown === 'businessUnits' && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48" onMouseLeave={() => setOpenDropdown(null)}>
              {businessUnits.map((unit, index) => (
                <li key={index}>
                  <Link
                    to={unit.Link}
                    className="block px-4 py-2 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm"
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

          <Link to="contact_Us">
            <button className="primary-btn flex items-center gap-2 mt-2">{t("Contact")}</button>
          </Link>
        </div>

        {/* Language Dropdown */}
        <div className="relative hidden lg:block">
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

        {/* Mobile Menu */}
        <div className="lg:hidden hover:text-secondary">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
