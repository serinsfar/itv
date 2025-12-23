import React from 'react';
import organisation from '../../assets/organisation.jpg'
import flughafen from '../../assets/flughafen.jpg'
import euro from '../../assets/eurocontrol.png'
import skye from '../../assets/skyguide.jpg'
import bv from '../../assets/Austria.png'
import astro from '../../assets/Austro.jpg'
import hungaro from '../../assets/hungaro.jpg'
import saab from '../../assets/saab.jpg'
import bahrain from '../../assets/Bahrain.png'
import uae from '../../assets/UAE.jpg'
import icao from '../../assets/icaop.png'
import iata from '../../assets/IATA.jpg'
import ana from '../../assets/ANA.png'
import caan from '../../assets/CAAN.png'
import ag from '../../assets/AG.png'
import swisstopo from '../../assets/swisstopo.png'
import strassen from '../../assets/Strassen.png'
import umwelt from '../../assets/Umwelt.png'
import bav from '../../assets/bav.png'
import bazl from '../../assets/bazl.png'
import uvek from '../../assets/uvek.png'
import Kogis from '../../assets/Kogis.png'
import Bl from '../../assets/BL.svg'
import bud from '../../assets/Basel Landschaft.png'
import st from  '../../assets/st-gallen.png'
import aln from '../../assets/ZH_ALN.jpg'
import baden from '../../assets/Baden.png'
import regio from '../../assets/Regio.png'
import chur from '../../assets/Stadt_Chur.png'
import langenthal from '../../assets/Langenthal.svg'
import afs from '../../assets/AfS.png'
import zurichVer from '../../assets/Zurich_Vermessung.jpg'
import Gruen_zurich from '../../assets/gruen_zuerich.svg'
import TAZ from '../../assets/TAZ.png'
import seco from '../../assets/seco.jpg'
import budapest from '../../assets/Budapest.png'
import Aserbaidschan from '../../assets/Aserbaidschan.png'
import guatemala from '../../assets/guatemala.png'
import Kirgistan from '../../assets/Kirgistan.jpg'
import Moldawien from '../../assets/Moldawien.png'
import Nakhchivan from '../../assets/Nakhchivan.png'
import China from '../../assets/China.png'
import Nagra from '../../assets/NAGRA.jpg'
import sbb from '../../assets/SBB.png'
import obb from '../../assets/OBB.png'
import vbg from '../../assets/VBG.gif'
import Cablecom from '../../assets/cablecom.png'
import saw from '../../assets/SAW.png'
import Entsorgungsamt from '../../assets/SG_Entsorgungsamt.png'
import sgsw from '../../assets/sgsw.png'
import erz from '../../assets/ZH_ERZ.jpg'
import caa from '../../assets/CAA.png'
import meteoschweiz from '../../assets/meteoschweiz.png'
import glarus from '../../assets/glarus.jpg'
import Graubünden from '../../assets/Graubünden.png'
import { useTranslation } from 'react-i18next';
import FourPartPageTemplate from '../Template/Services_Template';
import { motion } from 'framer-motion';

const AIMRef = [
    { imageLink: bazl,  
      name: "Bundesamt für Zivilluftfahrt - BAZL",
      link: "https://www.bazl.admin.ch/de",
    },
    { imageLink: flughafen,  
      name: "Flughafen Zürich AG",
      link: "https://www.flughafen-zuerich.ch/",
    },
    { imageLink: euro,  
      name: "Eurocontrol",
      link: "https://www.eurocontrol.int/",
    
    },
    { imageLink: skye,  
      name: "Skyguide - Swiss Air Navigations Services",
      link: "https://www.skyguide.ch/en/",
    },
    { imageLink: bv,  
      name: "Oberste Zivile Luftfahrtbehörde (OZB), BMVIT (A)",
      link: "https://www.bmimi.gv.at/themen/verkehr/luftfahrt.html",
    },
    { imageLink: astro,  
      name: "Austro Control",
      link: "https://www.austrocontrol.at/",
    },
    { imageLink: hungaro,  
      name: "HungaroControl",
      link: "https://www.hungarocontrol.hu/en",
    },
    { imageLink: saab,  
      name: "SAAB",
      link: "https://www.saab.com/",
    },
    {imageLink: bahrain,
      name: "Bahrain Civil Aviation Affairs",
      link: "https://www.mtt.gov.bh/civil-aviation",
    },
    {imageLink: uae,
      name: "UAE General Civil Aviation Authority",
      link: "https://www.gcaa.gov.ae/",
    },
    {imageLink: icao,
      name: "ICAO",
      link: "https://www.icao.int/",
    },
    {imageLink: iata,
      name: "IATA",
      link: "https://www.iata.org/",
    },
    {imageLink: ana,
      name: "ANA Luxembourg",
      link: "https://ana.gouvernement.lu/en.html",
    },
    {imageLink: caan,
      name: "Civil Aviation Authority of Nepal",
      link: "https://caanepal.gov.np/",
    },
      {imageLink: caa,
      name: "Sudan Civil Aviation Authority",
      link: "https://scaa.gov.sd/",
    },
 ];

const SDIRefConf = [
    { imageLink: swisstopo, 
      name: "Bundesamt für Landestopographie - Swisstopo",
      link: "https://www.geo.admin.ch/de/swisstopo-organisation",
    },
    { imageLink: strassen,
      name: "Bundesamt für Strassen - ASTRA",
      link: "https://www.astra.admin.ch/astra/de/home.html",
    },
    { imageLink: umwelt,
      name: "Bundesamt für Umwelt - BAFU",
      link: "https://www.bafu.admin.ch/bafu/de/home.html",
    },
    { imageLink: bav,
      name: "Bundesamt für Verkehr - BAV",
      link: "https://www.bav.admin.ch/de/das-bav",
    },
    {imageLink: bazl,
      name: "Bundesamt für Zivilluftfahrt - BAZL",
      link: "https://www.bazl.admin.ch/de",
    },
    {imageLink: uvek,
      name: "Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation - UVEK",
      link: "https://www.uvek.admin.ch/uvek/de/home.html",
    },
    {imageLink: Kogis,
      name: "KOGIS - Koordinationsstelle GIS des Bundes",
      link: "https://www.swisstopo.admin.ch/de/koordination-geo-information-und-services-kogis",
    },
    {
      imageLink: meteoschweiz,
      name: "Meteoschweiz - Bundesamt für Meteorologie und Klimatologie",
      link: "https://www.meteoschweiz.admin.ch/#tab=forecast-map",
    }
    ]

const SDIRefCan = [
      { imageLink: ag,
      name: "Kanton Aargau - Tiefbauamt (TBA)",
      link: "https://www.ag.ch/de/verwaltung/bvu/ueber-uns/organisation/abteilung-tiefbau",
    },
    { imageLink: Bl,
      name: "Kanton Basel-Landschaft - Amt für Geoinformation",
      link: "https://www.baselland.ch/politik-und-behorden/direktionen/volkswirtschafts-und-gesundheitsdirektion/amt-fur-geoinformation",
    },
    { imageLink: bud,
      name: "Kanton Basel-Landschaft - Bau- und Umweltschutzdirektion (BUD)",
      link: "https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion",
    },
    { imageLink: st,
      name: "Kanton St. Gallen - Amt für Geoinformation",
      link: "https://www.sg.ch/bauen/geoinformation.html",
    },
    { imageLink: aln,
      name: "Kanton Zürich - Amt für Landschaft und Natur (ALN)",
      link: "https://www.zh.ch/de/baudirektion/amt-fuer-landschaft-natur.html",
    },
    {
      imageLink: glarus,
      name: "Kt. Glarus, Departement Bau und Umwelt",
      link: "https://www.gl.ch/verwaltung/bau-und-umwelt.html/96",
    },
    { imageLink: Graubünden,
      name: "Kt. Graubünden, Amt für Landwirtschaft und Geoinformation",
      link: "https://www.gr.ch/DE/institutionen/verwaltung/dvs/alg/Seiten/Start.aspx",
    }
  ]
  const SDIRefMun = [
    { imageLink: baden,
      name: "Stadt Baden - Raumplanung",
      link: "https://www.baden.ch/de/leben-wohnen/wohnen-und-bauen/staedtische-bauprojekte/oeffentlicher-raum.html/580",
    },
    { imageLink: regio,
      name: "Baden - Regio Regionalplanungs - verband",
      link: "https://www.baden-regio.ch/",
    },
    { imageLink: chur,
      name: "Stadt Chur - Abteilung Geoinformatik",
      link: "https://www.chur.ch/de/abteilung-geoinformatik",
    },
    { imageLink: langenthal,
      name: "Stadt Langenthal - Bauamt",
      link: "https://www.langenthal.ch/de/bauamt",
    },
    { imageLink: afs,
      name: "Stadt Zürich - Amt für Städtebau (AfS)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/hbd/afs.html",
    },
    { imageLink: zurichVer,
      name: "Stadt Zürich - Geomatik + Vermessung Stadt Zürich (GeoZ)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/ted/geoz.html",
    },
    { imageLink: Gruen_zurich,
      name: "Stadt Zürich - Grün Stadt Zürich (GSZ)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/ted/gsz.html",
    },
    { imageLink: TAZ,
      name: "Stadt Zürich - Tiefbauamt der Stadt Zürich (TAZ)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/ted/taz.html",
    },

  ]
  
  const SDIRefProjects = [
    { imageLink:  seco,
      name: "Staatssekretariat für Wirtschaft (SECO)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/ted.html",
    },
    {imageLink: Aserbaidschan,
      name: "Katasterprojekt Aserbaidschan",
      link: "https://www.gfa-group.de/projects/Cadastre_and_real_estate_registration_3877800.html",

    },
    {imageLink: guatemala,
      name: "Katasterprojekt Guatemala",
      link: "https://www.gob.gt/",
    },
    ,
    {imageLink: budapest,
      name: "Infrastructure Management, Stadt Budapest",
      link: "https://www.budapest.hu/en",
    },
    { imageLink: Nagra,
      name: "NAGRA",
      link: "https://www.nagra.ch/en/home",
    },
    { imageLink: Kirgistan,
      name: "GIS-/Katasterprojekt Kirgistan",
      link: "https://www.eda.admin.ch/dam/countries/countries-content/kyrgyzstan/en/2022/ENG-2022-Brochure-SE-Bishkek.pdf",
    },
    {imageLink: Moldawien ,
      name: "Worldbank – Digital Land registry and cadastral system in Moldova",
      link: "https://www.worldbank.org/en/country/moldova",
    },
    { imageLink: Nakhchivan,
      name: "Digital Land registry and cadastral system in Nakhchivan",
      link: "https://www.esri.com/about/newsroom/blog/azerbaijan-maps-land-environment",
    },
    {
      imageLink: Moldawien,
      name: "Grundbuch- und Katastersystem (I), Moldawien",
      link: "http://revcad.uab.ro/upload/40_527_03Botnarenco.pdf",
    },
    { imageLink: China,
      name: "Chongqing Urban Environment Project (GIS-Komponente), China",
      link: "https://www.chongqing.gov.cn/",
    },



  ];
  const SDIRefInfra = [
    { imageLink: sbb,  

      name: "Schweizerische Bundesbahnen (SBB)",
      link: "https://www.uvek.admin.ch/uvek/de/home/uvek/bundesnahe-betriebe/sbb.html",
    },      
    { imageLink: obb,
      name: "Österreichische Bundesbahnen (ÖBB)",
      link: "https://infrastruktur.oebb.at/de"       
    },
    { imageLink: vbg,
      name: "Verkehrsbetriebe Glattal - Glattalbahn (VBG)",
      link: "https://www.vbg.ch/"        
    },
    { imageLink: Cablecom,
      name: "Cablecom",
      link: "https://cablecomllc.us/about/",         
    },
    { imageLink: saw,
      name: "Schweizer Wanderwege SAW",
      link: "https://www.schweizer-wanderwege.ch/de/",          
    },
    { imageLink: Entsorgungsamt,
      name: "Stadt St.Gallen - Entsorgungsamt",
      link: "https://www.stadt.sg.ch/home/verwaltung-politik/direktionen/technische-betriebe/entsorgung-stgallen.html",          
    },
    { imageLink: sgsw,
      name: "Stadt St.Gallen - Stadtwerke (Abt. Wasser, Erdgas und Elektro)",
      link: "https://www.stadt.sg.ch/home/raum-umwelt/energie/energieversorgung.html",
    },
    { imageLink: erz,
      name: "Stadt Zürich - Entsorgung + Recycling Zürich (ERZ)",
      link: "https://www.stadt-zuerich.ch/de/politik-und-verwaltung/stadtverwaltung/ted/erz.html",          
    },
  ]
  const lazyReveal = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay,
      
    },
  },
  viewport: { once: true, margin: '-80px' },
});

const lazyItem = (delay = 0) => ({
  initial: { opacity: 0, y: 2 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
      
    },
  },
  viewport: { once: true, margin: '-60px' },
});

const References = () => {
  const { t } = useTranslation();

  return (
    <>
      <FourPartPageTemplate/>
        {/* CONTENT */}
      <div className="container col-span-5 pb-20">

        {/* AIM */}
        <motion.h4
          {...lazyReveal(0)}
          className="pt-10 pb-6 text-2xl text-secondary font-semibold text-left"
        >
          {t('Aeronautical Information Management (AIM)')}
        </motion.h4>

        <motion.div
          {...lazyReveal(0.1)}
          className="px-10 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-5"
        >
          {AIMRef.map(({ imageLink, name, link }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={imageLink}
                      alt={name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={imageLink}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SDI */}
        <motion.h4
          {...lazyReveal(0.15)}
          className="pt-16 pb-4 text-2xl text-secondary font-semibold text-left"
        >
          {t('Spatial Data Infrastructure (SDI)')}
        </motion.h4>

        {/* Confederation */}
        <motion.h3
          {...lazyReveal(0.2)}
          className="text-xl font-semibold text-left"
        >
          {t('Confederation')}
        </motion.h3>

        <motion.div
          {...lazyReveal(0.25)}
          className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 mb-10"
        >
          {SDIRefConf.map(({ imageLink, name, link }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageLink}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cantons */}
        <motion.h3
          {...lazyReveal(0.3)}
          className="text-xl font-semibold text-left"
        >
          {t('Cantons')}
        </motion.h3>

        <motion.div
          {...lazyReveal(0.35)}
          className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 mb-10"
        >
          {SDIRefCan.map(({ imageLink, name, link }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageLink}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Municipalities */}
        <motion.h3
          {...lazyReveal(0.4)}
          className="text-xl font-semibold text-left"
        >
          {t('Cities and Municipalities')}
        </motion.h3>

        <motion.div
          {...lazyReveal(0.45)}
          className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 mb-10"
        >
          {SDIRefMun.map(({ imageLink, name, link }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageLink}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects */}
        <motion.h3
          {...lazyReveal(0.5)}
          className="text-xl font-semibold text-left"
        >
          {t('Various and international projects')}
        </motion.h3>

        <motion.div
          {...lazyReveal(0.55)}
          className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 mb-10"
        >
          {SDIRefProjects.map(({ imageLink, name }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                <img
                  src={imageLink}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Infrastructure */}
        <motion.h3
          {...lazyReveal(0.6)}
          className="text-xl font-semibold text-left"
        >
          {t('Infrastructure Management')}
        </motion.h3>

        <motion.div
          {...lazyReveal(0.65)}
          className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 mb-10"
        >
          {SDIRefInfra.map(({ imageLink, name, link }, index) => (
            <motion.div
              key={index}
              {...lazyItem(index * 0.06)}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageLink}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default References;
