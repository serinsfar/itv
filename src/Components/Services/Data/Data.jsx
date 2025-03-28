import React from 'react'
import { HiChartPie } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-xl">
      <div className="flex items-center gap-2 px-4 py-6">
        <RiCustomerService2Line className="text-xl" />
        <span className="text-lg font-bold">Services</span>
      </div>
      <ul className="space-y-2">
        <li className="group">
          <div className="flex items-center gap-2 px-4">
            <HiChartPie className="text-xl" />
            <span className="text-lg font-bold">Data</span>
          </div>
          <ul className="ml-8 mt-2 space-y-1">
            <li>
              <Link
                to="/Metadata"
                className="block hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Metadata
              </Link>
            </li>
            <li>
              <Link
                to="/Data_Organisation"
                className="block hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Data Organisation
              </Link>
            </li>
            <li>
              <Link
                to="/Data_Modeling"
                className="block hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Data Modeling
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Data;
