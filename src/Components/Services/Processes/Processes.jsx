import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useTranslation } from 'react-i18next';


function Processes() {
   const { t } = useTranslation();
  const services = [
    { name: t("Process Documentation"), path: "/Process_Documentation" },
    { name: t("Process Design"), path: "/Process_Design" },
    { name: t("Process Optimization"), path: "/Process_Optimisation" },
  ];
 

  return (
 <div className="w-full pt-10">
      <div className='flex flex-col items-center md:flex-row md:justify-start'>
      <div className="flex md:flex-row items-center gap-4 md:pr-6 mb-6 md:mb-0">
        <AccountTreeIcon className="text-xl" />
        <span className="text-lg font-bold">{t('Processes')}</span>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
        {services.map((unit, index) => (
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

export default Processes;