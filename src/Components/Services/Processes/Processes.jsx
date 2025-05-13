import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from '@mui/icons-material/AccountTree';


function Processes() {
  const processes = [
    { name: "Process Documentation", path: "/Process_Documentation" },
    { name: "Process Design", path: "/Process_Design" },
    { name: "Process Optimization", path: "/Process_Optimisation" },
  ];

  return (
    <div className="flex flex-col items-start pt-10">
      <div className="flex items-center gap-4">
        <AccountTreeIcon/>
        <span className="text-lg font-bold">Processes</span>
        {processes.map((process, index) => (
          <React.Fragment key={index}>
            <IoIosArrowForward />
            <NavLink
              to={process.path}
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'text-white bg-secondary font-medium' : ''
                }`
              }
            >
              {process.name}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Processes;