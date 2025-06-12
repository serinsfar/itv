import React from "react";
import logo_white from "../../assets/logo_white.png";
import { Footer } from "flowbite-react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { Link } from "react-router-dom";
import Metadata from "../../Components/Services/Data/Metadata";
const sections = [
  {
    title: "Menu",
    items: ["Home", "Services", "Business units", "Company", "Contact Us"],
  },
  {
    title: "Address",
    items: [
      "Dorfstrasse 53",
      "8105 Regensdorf-Watt",
      "Tel.: +41 44 871 21 90",
      "Mail: info@itv.ch",
    ],
  },
  {
    title: "Company",
    items: ["Impressum Datenschutzerklärung", "Soziale Netzwerke"],
  },
];


const FooterF = () =>{
  return (
<footer className="pt-16 bg-primary">
  <div>
    <div className="grid grid-cols-1 md:grid-cols-7  pb-5">
      {/* Logo Section */}
      <div className="max-w-[300px] col-start-1 col-span-2  mx-auto pt-5">
        <img className="w-40 mx-auto" src={logo_white} alt="Logo" />
      </div>
      {/* Lists Section */}
     
        {/* Menu Section */}
        <div className=" space-y-4 gap-x-11">
          <h1 className="text-2xl font-bold text-white">Menu</h1>
          <ul className="text-gray-400 space-y-2 text-lg ">
            <li className="cursor-pointer hover:text-white"><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  Home
</Link></li>

            <li className="cursor-pointer hover:text-white"><Link to="/Metadata" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Services</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to="/AIM" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Business units</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to="/company">Company</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to="/Contact_Us">Contact Us</Link></li>
          </ul>
        </div>
        {/* Address Section */}
        <div className="space-y-4 gap-x-11">
          <h1 className="text-2xl font-bold text-white">Address</h1>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>Dorfstrasse 53</li>
            <li>8105 Regensdorf-Watt</li>
            <li>Tel.: +41 44 871 21 90</li>
            <li className="cursor-pointer hover:text-white duration-200">
              <a href="mailto:Info@itv.ch" className="hover:text-white">
              E-Mail: Info@itv.ch
              </a>
            </li>
          </ul>
        </div>
        {/* Company Section */}
        <div className="space-y-4 gap-x-11">
          <h1 className="text-2xl font-bold text-white">Company</h1>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>
              Impressum Datenschutzerklärung
            </li>
            <li >Soziale Netzwerke</li>
            <li>
              <div className="flex items-center gap-2">
                <Footer.Icon className="cursor-pointer hover:text-white duration-200" href="https://www.linkedin.com/company/97985639" icon={FaLinkedin} />
                <Footer.Icon className="cursor-pointer hover:text-white duration-200" href="mailto:info@itv.ch" icon={FaEnvelope} />
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4 gap-x-11 ml-5">
          <h1 className="text-2xl font-bold text-white">DCS Service Hotline</h1>
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>Monday to Friday</li>
            <li>08h30 - 11h30 </li>
            <li>13h30 - 16h30</li>
            <li>Hotline: +41 44 871 21 99 </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <a href="mailto:obstacles@itv.ch" className="hover:text-white">
              E-Mail: obstacles@itv.ch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer.Divider className=" container border-gray-400" />
      <div className=" flex justify-center items-center text-sm text-center py-4 text-white">
        <Footer.Copyright href="#" by="ITV Consult AG - All Rights Reserved" year={new Date().getFullYear()}
/>
      </div>

  
</footer>

  )


}

export default FooterF;
