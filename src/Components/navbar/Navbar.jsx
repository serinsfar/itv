import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [language, setLanguage] = useState('EN'); // Default language

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const switchLanguage = (lang) => {
        setLanguage(lang);
        setOpenDropdown(null); // Close the dropdown after selection
    };

    const servicesOptions = [
        { title: 'Data', Link: '/data' },
        { title: 'Infrastucture', Link: '#Infrastructure' },
        { title: 'People', Link: '#People' },
        { title: 'Process', Link: '#Process' },
        { title: 'Organisation', Link: '#Organisation' },
    ];

    const businessUnitsOptions = [
        { title: 'Spatial Data Infrasturucture', Link: '#SDI' },
        { title: 'Aeronautical Information Management', Link: '#AIM' },
        { title: 'DCS', Link: '#DCS' },
    ];

    const languageOptions = ['EN', 'DE'];

    return (
        <nav className="relative z-20 bg-light">
            <div className="container py-5 flex justify-between items-center">
                {/* Logo Section */}
                <div>
                    <img src={logo} alt="Logo" className="logo w-16 h-auto lg:w-32" />
                </div>

                {/* Menu Section */}
                <div className="hidden lg:flex items-center gap-8 font-medium">
                    <a href="/" className="text-xl hover:text-secondary">
                        Home
                    </a>

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('services')}
                            className="text-xl hover:text-secondary focus:outline-none inline-flex" 
                        >
                            Services
                            <svg className="ml-1 -mr-1 h-5 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        {openDropdown === 'services' && (
                            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48"
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {servicesOptions.map((option, index) => (
                                    <li key={index}>
                                        <a
                                            href={option.Link}
                                            className="block px-4 py-5 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm scroll-smooth"
                                        >
                                            {option.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Business Units Dropdown */}
                    <div className="relative ">
                        <button
                            onClick={() => toggleDropdown('businessUnits')}
                            className="text-xl hover:text-secondary focus:outline-none inline-flex" 
                        >
                            Business Units

                            <svg className="ml-1 -mr-1 h-5 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {openDropdown === 'businessUnits' && (
                            <ul
                                className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-80"
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {businessUnitsOptions.map((option, index) => (
                                    <li key={index}>
                                        <a
                                            href={option.Link}
                                            className="block px-4 py-5 hover:bg-light rounded-md hover:scale-100 hover:shadow-sm scroll-smooth"
                                        >
                                            {option.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <a href="#" className="text-xl hover:text-secondary">
                        Company
                    </a>

                    <button className="primary-btn ml-5">Contact Us</button>
                </div>

                {/* Language Dropdown */}
                <div className="relative hidden lg:block">
                    <button
                        onClick={() => toggleDropdown('language')}
                        className="text-xl hover:text-secondary"
                    >
                        {language}
                    </button>
                    {openDropdown === 'language' && (
                        <ul
                            className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-20 "
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {languageOptions
                                .filter((lang) => lang !== language) // Filter out the selected language
                                .map((lang) => (
                                    <li key={lang}>
                                        <button
                                            onClick={() => switchLanguage(lang)}
                                            className="block px-4 py-2 hover:bg-gray-200 w-full text-left rounded-md"
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            {lang}
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>

                {/*<div className="relative hidden lg:block">
                    <button
                        onClick={() => toggleDropdown('language')}
                        className="text-xl hover:text-secondary"
                    >
                        {language}
                    </button>
                    {openDropdown === 'language' && (
                        <ul
                            className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-20"
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {languageOptions.map((lang) => (
                                <li key={lang}>
                                    <button
                                        onClick={() => switchLanguage(lang)}
                                        className="block px-4 py-2 hover:bg-gray-200 w-full text-left rounded-md"
                                    >
                                        {lang}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>*/}

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden hover:text-secondary">
                    <IoMdMenu className="text-4xl" />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
