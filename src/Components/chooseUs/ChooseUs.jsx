import React from "react";
import { useState } from "react";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";




const ChooseUs = () => {
const [selectedMarker, setSelectedMarker] = useState(null);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
   const [setselSelectedCountry] = useState(null);
   

  const mapTitle = t("Our Projects Around the World");



  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";



  const accordionData = [
    {
      icon: <GrUserExpert className="text-2xl" />,
      title: t("Over 30 years of experience"),
      details: t("With over three decades in the industry, we bring unmatched expertise and deep-rooted knowledge to every project. Our longevity is a testament to our reliability, quality, and continuous innovation."),
    },
    {
      icon: <AiOutlineSolution className="text-2xl" />,
      title: t("Tailored Solutions"),
      details: t("We understand that every business is unique. Our team works closely with each client to develop customized solutions that address specific needs, ensuring optimal results and long-term success."),
    },
    {
      icon: <GrTechnology className="text-2xl" />,
      title: t("Cutting-Edge Technology"),
      details: t("We leverage the latest technologies and tools to keep you ahead of the curve. From automation to AI integration, our tech-driven approach enhances efficiency, accuracy, and scalability."),
    },
    {
      icon: <FaBuildingUser className="text-2xl" />,
      title: t("Trusted by Industry Leaders"),
      details: t("Leading organizations across various sectors rely on our expertise. Our proven track record of delivering quality and consistency has earned us the trust of top-tier clients worldwide."),
    },
  ];
  const markers = [
  {
    name: "Zürich",
    coordinates: [4.7000, 51.5000],
    countryName: t("Switzerland"),
  },
  {
    name: "Budapest",
    coordinates: [16.7000, 51.3979],
    countryName: t("Hungary"),
  },
  {
    name: "Guatemala",
    coordinates: [-93.4133, 22.9349],
    countryName: t("Guatemala"),
  },
  {
    name: "Chisinau",
    coordinates: [24.4180, 52.0000],
    countryName: t("Moldova"),
  },
  {
    name: "Chongqing",
    coordinates: [98.5516, 37.5630],
    countryName: t("China"),
  },
  {
    name: "Sudan",
    coordinates: [25.1111, 22.5000],
    countryName: t("Sudan"),
  },
  {
    name: "Bahrain",
    coordinates: [47.5111, 31.5000],
    countryName: t("Qatar"),
  },
  {
    name: "Tschechien",
    coordinates: [10.1111, 53.9000],
    countryName: t("Czechia"),
  },
  {
    name: "Lithuania",
    coordinates: [20.1111, 59.0000],
    countryName: t("Lithuania"),
  },
  {
    name: "Nepal",
    coordinates: [78.0111, 34.8000],
    countryName: t("Nepal"),
  },
  {
    name: "Denmark",
    coordinates: [5.5111, 59.9000],
    countryName: t("Denmark"),
  },
  {
    name: "Montreal (ICAO)",
    coordinates: [-82.1111, 50.5000],
    countryName: t("Canada"),
  },
  {
    name: "Portugal",
    coordinates: [-11.4999, 45.1000],
    countryName: t("Portugal"),
  },
  {
    name: "Sweden",
    coordinates: [10.9900, 64.5000],
    countryName: t("Sweden"),
  },
  {
    name: "Brüssel (Eurocontrol)",
    coordinates: [0.00, 55.0000],
    countryName: t("Belgium"),
  },
  {
    name: "Bishkek",
    coordinates: [69.5698, 46.4946],
    countryName: t("Kyrgyzstan"),
  },
  {
    name: "Baku",
    coordinates: [45.3000, 45.4093],
    countryName: t("Azerbaijan"),
  },
  {
    name: "Nakhchivan",
    coordinates: [41.4090, 44.2089],
    countryName: t("Azerbaijan"),
  },
];
  const markerCountryNames = new Set(markers.map((m) => m.countryName));



  return (
    <section className="bg-white pt-10 pb-3">
<div className="container py-5 md:py-10 grid grid-cols-1 xl:grid-cols-2 items-center text-start gap-10 space-y-6 md:space-y-0 ">
        <div className="flex flex-col justify-center "><h1 className="text-3xl font-bold">{mapTitle}</h1>
        {/* Banner Image */}
        <div className="relative md:justify-center max-h-[400px] max-w-[800px] object-fill overflow-hidden shadow-lg mt-8 rounded-lg">
      {/* Your map component goes here */}
      <ComposableMap
  projection="geoMercator"
  projectionConfig={{
    scale: 200, 
    center: [5, 30], // Adjust center to focus on Europe and surrounding regions  

  
  }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              console.log("Geo country name:", name);
              const countryName = geo.properties.name;
              const isMarked = markerCountryNames.has(countryName);
              const isActive = isMarked && hoveredCountry === countryName;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  tabIndex={-1}                       // 🔑 empêche le focus
                  onMouseEnter={() => {
                    const country = geo.properties.name;
                    const matchedMarkers = markers.filter(m => m.countryName === country);
                    if (matchedMarkers.length > 0) {
                      const primary = matchedMarkers[0];
                      setSelectedMarker(primary.name);
                      setHoveredMarker(primary.name);
                      setHoveredCountry(country);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredCountry(null);
                    setHoveredMarker(null);
                    setSelectedMarker(null);
                  }}
                  onClick={(e) => {                   // 🔑 clic = même effet que hover
                    const country = geo.properties.name;
                    const matched = markers.find(m => m.countryName === country);
                    if (matched) {
                      setSelectedMarker(matched.name);
                      setHoveredMarker(matched.name);
                      setHoveredCountry(country);
                    }
                    // évite le focus visuel
                    e.currentTarget.blur?.();
                  }}
                  style={{
                    default: {
                      fill: isActive ? "#FF9400" : "#EAEAEA",
                      stroke: "#555",
                      strokeWidth: isActive ? 2.5 : 0.5,
                      transition: "all 0.2s ease",
                      outline: "none",             
                    },
                    hover: {
                      fill: isMarked
                        ? (hoveredCountry === countryName ? "#FF9400" : "#EAEAEA")
                        : "#EAEAEA",
                      stroke: "#555",
                      strokeWidth: isMarked
                        ? (hoveredCountry === countryName ? 2.5 : 0.5)
                        : 0.5,
                      outline: "none",               
                      transition: "all 0.2s ease",
                    },
                    pressed: {
                      fill: isActive ? "#FF9400" : "#EAEAEA",
                      stroke: isActive ? "#FF9400" : "#555",
                      strokeWidth: isActive ? 2.5 : 0.5,
                      outline: "none",               
                    }
                  }}
                />

              );
            })
          }
        </Geographies>

{markers.map(({name, coordinates, countryName}) => (
    <Marker 
      key={name}
      coordinates={coordinates}
      onMouseEnter={() => {
  setSelectedMarker(name);
  setHoveredMarker(name);
  setHoveredCountry(countryName);
  setselSelectedCountry(countryName); // set selected country
      }}
      onMouseLeave={() => {
        setSelectedMarker(null);
        setHoveredMarker(null);
        setHoveredCountry(null); // remove geography highlight
        setselSelectedCountry(null); // clear selected country
      }}
    >
  
  <g
    className="cursor-pointer transition-transform duration-300 ease-in-out"
style={{
  transform:
    hoveredMarker === name || hoveredCountry === countryName
      ? "scale(1.1)"
      : "scale(1)",
  filter:
    hoveredMarker === name || hoveredCountry === countryName
      ? "drop-shadow(0 0 5px rgba(0,0,0,0.3))"
      : "none",
}}
  >
    
      {/* Label box if this marker is selected */}
{selectedMarker === name && (
  <foreignObject x={-40} y={35} width={107} height={75}>
    <div className="bg-primary text-lg text-white my-1 rounded-md shadow text-center" >
      {name}
    </div>
  </foreignObject>
)}




      {/* Marker Icon */}
      <FaMapMarkerAlt className="text-primary text-2xl shadow-lg" />
    </g>
   
  </Marker>
))}
</ComposableMap>

    


        </div>
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center "onMouseLeave={() => toggleAccordion(null)}>
          <div className="text-center md:text-left space-y-16">
            <h1 className="text-3xl font-bold">{t("Why Choose Us")}</h1>
            <div className="flex flex-col gap-4">
              {accordionData.map((item, index) => (
                <div key={index} className={`p-4 bg-light rounded-2xl text-black transition-all  ease-in-out hover:bg-white hover:scale-5 duration-200 hover:shadow-xl ${activeIndex === index ? "bg-white shadow-2xl" : ""}`}>
                  <div className="flex items-center h-12 justify-between cursor-pointer" onClick={() => toggleAccordion(index)} >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <p className="text-2xl">{item.title}</p>
                    </div>
                    <span className={`transition-transform duration-300 ease-in-out transform text-primary font-bold ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-max-height duration-300 ease-in-out  ${activeIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                    <p className="text-xl text-gray-700" >{item.details}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ChooseUs;
