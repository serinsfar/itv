import React, { useEffect } from 'react';   // 👈 add useEffect here
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom"; // 👈 already have useLocation
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { useTranslation } from 'react-i18next';


// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Business_units() {
  const { t } = useTranslation();
  const businessUnits = [
    { name: t("Aeronautical Information Management"), path: "/AIM" },
    { name: t("Spatial Data Infrastructure"), path: "/SDI" },
    { name: t("Data Collection Service"), path: "/DCS" },
  ];

  return (
    <div className="w-full pt-10">
      <ScrollToTop />
      <div className='flex flex-col items-center md:flex-row md:justify-start'>
        <div className="flex md:flex-row items-center gap-4 md:pr-6 mb-6 md:mb-0">
          <AssuredWorkloadIcon fontSize="small" />
          <span className="text-base md:text-lg font-bold">{t('Business Units')}</span>
        </div>

        {/* Responsive List */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
          {businessUnits.map((unit, index) => (
            <NavLink
              key={index}
              to={unit.path}
              className={({ isActive }) =>
                [
                  "flex items-center gap-1 ",
                  "px-5 py-3 rounded-3xl",
                  "transition-colors duration-200",
                  isActive
                    ? "bg-secondary text-white font-medium"
                    : "bg-light text-gray-800 hover:bg-gray-200",
                ].join(" ")
              }
            >
              <IoIosArrowForward className="text-gray-500" />
              {unit.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business_units;
