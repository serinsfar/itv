import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import StorageIcon from '@mui/icons-material/Storage';

const Data = () => {
  const services = [
    { name: "Metadata", path: "/Metadata" },
    { name: "Data Organisation", path: "/Data_Organisation" },
    { name: "Data Modeling", path: "/Data_Modeling" },
  ];

  return (
    <div className="flex flex-col items-start pt-10 pb-5">
      <div className="flex items-center gap-4">
        <StorageIcon className="text-xl" />
        <span className="text-lg font-bold">Data</span>
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <IoIosArrowForward />
            <NavLink
              to={service.path}
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'text-white bg-secondary font-medium' : ''
                }`
              }
            >
              {service.name}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Data;
