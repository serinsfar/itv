import React from "react";
import logo_white from "../../assets/logo_white.png";
import { Footer } from "flowbite-react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <li className="cursor-pointer hover:text-white"><Link to="/">Home</Link></li>
            <li className="cursor-pointer hover:text-white">Services</li>
            <li className="cursor-pointer hover:text-white">Business units</li>
            <li className="cursor-pointer hover:text-white"><Link to="/company">Company</Link></li>
            <li className="cursor-pointer hover:text-white">Contact Us</li>
          </ul>
        </div>
        {/* Address Section */}
        <div className="space-y-4 gap-x-11">
          <h1 className="text-2xl font-bold text-white">Address</h1>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>Dorfstrasse 53</li>
            <li>8105 Regensdorf-Watt</li>
            <li>Tel.: +41 44 871 21 90</li>
            <li>Mail: info@itv.ch</li>
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
            <li>E-Mail: info@itv.ch</li>
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









/*
const CustomFooter = () => {
  return (
    <footer>
      <div className="container bg-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          <div>
            <img className="w-40 py-28" src={logo_white} alt="Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 w-96 bg-slate-100 ">
            <div className="bg-black w-36">
              <FlowbiteFooter.Title title="Menu" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Home</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Services</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Business units</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Company</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Contact Us</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div className="px-20">
              <FlowbiteFooter.Title title="Address" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div className="px-20">
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={FaFacebook} />
            <FlowbiteFooter.Icon href="#" icon={FaInstagram} />
            <FlowbiteFooter.Icon href="#" icon={FaTwitter} />
            <FlowbiteFooter.Icon href="#" icon={FaGithub} />
            <FlowbiteFooter.Icon href="#" icon={FaTwitch} />
          </div>
        </div>
      </div>
    </footer>
  );
};*/

export default FooterF;
