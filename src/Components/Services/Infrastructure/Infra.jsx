import React from 'react'
import { IoEarth } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

function Infra() {
  const services = [
    { name: "System Architecture", path: "/System_Arch" },
    { name: "Specification", path: "/Specification" },
    { name: "Procurement of a System", path: "/Procurment_System" },
    { name: "Test Management", path: "/Test_Management" },
  ];

  return (
    <div className="flex flex-col items-start pt-10">
      <div className="flex items-center gap-4">
        <DisplaySettingsIcon />
        <span className="text-lg font-bold">Infrastructure</span>
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
}
export default Infra