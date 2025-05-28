import React, { useState } from "react";
import map from "../../assets/map.png";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";



const ChooseUs = () => {
const [selectedMarker, setSelectedMarker] = useState(null);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);



  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";



  const accordionData = [
    {
      icon: <GrUserExpert className="text-2xl" />,
      title: t("Over 30 years of experience"),
      details: "With over three decades in the industry, we bring unmatched expertise and deep-rooted knowledge to every project. Our longevity is a testament to our reliability, quality, and continuous innovation.",
    },
    {
      icon: <AiOutlineSolution className="text-2xl" />,
      title: t("Tailored Solutions"),
      details: "We understand that every business is unique. Our team works closely with each client to develop customized solutions that address specific needs, ensuring optimal results and long-term success.",
    },
    {
      icon: <GrTechnology className="text-2xl" />,
      title: t("Cutting-Edge Technology"),
      details: "We leverage the latest technologies and tools to keep you ahead of the curve. From automation to AI integration, our tech-driven approach enhances efficiency, accuracy, and scalability.",
    },
    {
      icon: <FaBuildingUser className="text-2xl" />,
      title: t("Trusted by Industry Leaders"),
      details: "Leading organizations across various sectors rely on our expertise. Our proven track record of delivering quality and consistency has earned us the trust of top-tier clients worldwide.",
    },
  ];
  const markers = [
  {
    name: "Zürich",
    coordinates: [1.0000, 56.0000],
    countryName: "Switzerland",
  },
  {
    name: "Budapest",
    coordinates: [12.7000, 55.9979],
    countryName: "Hungary",
  },
  {
    name: "Baku",
    coordinates: [42.3000, 50.4093],
    countryName: "Azerbaijan",
  },
  {
    name: "Nakhchivan",
    coordinates: [38.0090, 50.2089],
    countryName: "Azerbaijan",
  },
  {
    name: "Guatemala",
    coordinates: [-97.5133, 29.9349],
    countryName: "Guatemala",
  },
  {
    name: "Bishkek",
    coordinates: [66.5698, 51.8746],
    countryName: "Kyrgyzstan",
  },
  {
    name: "Chisinau",
    coordinates: [21.3180, 56.5000],
    countryName: "Moldova",
  },
  {
    name: "Chongqing",
    coordinates: [95.5516, 40.5630],
    countryName: "China",
  },

];
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <section className="bg-white">
      <div className="container py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10 space-y-6 md:space-y-0 ">
        {/* Banner Image */}
        <div className="relative md:justify-start max-h-[600px] max-w-[800px] object-fill overflow-hidden shadow-lg my-16">
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
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(geo.properties.name)}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{
                    default: {
                      fill:
                        hoveredCountry === geo.properties.name
                          ? "#FF9400"
                          : "#D6D6DA",
                      outline: "D6D6DA",
                    },
                    hover: {
                      fill: "gdgfd",
                      outline: "none",
                    },
                    pressed: {
                      fill: "##FF9400",
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
        setHoveredCountry(countryName); // highlight the geography
      }}
      onMouseLeave={() => {
        setSelectedMarker(null);
        setHoveredMarker(null);
        setHoveredCountry(null); // remove geography highlight
      }}
    >
  <g
    className="cursor-pointer transition-transform duration-300 ease-in-out"
    style={{
      transform: hoveredMarker === name ? "scale(1.1)" : "scale(1)",
      filter: hoveredMarker === name ? "drop-shadow(0 0 5px rgba(0,0,0,0.3))" : "none",
    }}
  >
      {/* Label box if this marker is selected */}
      {selectedMarker === name && (
        <foreignObject x={-40} y={47} width={120} height={45}>
          <div className="bg-secondary text-lg text-white px-2 my-3 rounded-md shadow text-center" >
            {name}
          </div>
        </foreignObject>
      )}

      {/* Marker Icon */}
      <FaMapMarkerAlt className="text-primary text-5xl shadow-lg" />
    </g>
  </Marker>
))}
</ComposableMap>

    


        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center "onMouseLeave={() => toggleAccordion(null)}>
          <div className="text-center md:text-left space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug">Why Choose Us</h1>
            <div className="flex flex-col gap-4 ">
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
