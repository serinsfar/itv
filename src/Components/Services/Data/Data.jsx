import React from 'react'
import { HiChartPie } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <aside className="hidden sm:hidden lg:hidden xl:block w-64 white shadow-xl text-neutral-800 rounded-3xl mt-10  p-4 ">
      <div className="flex items-center gap-2 px- py-6 mb-3">
        <RiCustomerService2Line className="text-xl" />
        <span className="text-lg font-bold">Services</span>
      </div>
      <div>
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
      </div>
    </aside>
  );
};

export default Data;
