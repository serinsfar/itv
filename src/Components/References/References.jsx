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

const AIMRef = [
    { imageLink: bazl,  
      name: "Bundesamt für Zivilluftfahrt (BAZL)",
      link: "https://www.bazl.admin.ch/bazl/de/home.html",
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
      name: "Soudan Civil Aviation Authority",
      link: "https://scaa.gov.sd/",
    },
 ];

const SDIRefConf = [
    { imageLink: swisstopo, 
      name: "Bundesamt für Landestopographie - Swisstopo",
      link: "https://www.swisstopo.admin.ch/home.html",
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
      link: "https://www.bav.admin.ch/bav/de/home.html",
    },
    {imageLink: bazl,
      name: "Bundesamt für Zivilluftfahrt - BAZL",
      link: "https://www.bazl.admin.ch/bazl/de/home.html",
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

const References = () => {
  const { t } = useTranslation();

  return (
    <div className='container col-span-5 pb-10'>
      <div className='flex flex-col justify-center md:py-0 sm:z-20'>
        <h2 className=' pt-20 pb-10 text-3xl font-bold text-left'>{t('References')}</h2>

        <h4 className=' text-2xl text-secondary font-semibold text-left'>
          {t('Aeronautical Information Management (AIM)')}
        </h4>

        <div className="px-10 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5">
          {AIMRef.map(({ imageLink, name, link }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>

        <h4 className='pt-16 pb-5 text-2xl text-secondary font-semibold text-left'>
          {t('Spatial Data Infrastructure (SDI)')}
        </h4>
        <h3 className='text-2xl text-primary font-semibold text-left'><li>{t('Confederation')}</li></h3>
        <div className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 mb-10">
          {SDIRefConf.map(({ imageLink, name, link }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
        <h3 className='text-2xl text-primary font-semibold text-left'><li>{t('Cantons')}</li></h3>
        <div className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 mb-10">
          {SDIRefCan.map(({ imageLink, name, link }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>

        <h3 className='text-2xl text-primary font-semibold text-left'><li>{t('Cities and Municipalities')}</li></h3>
        <div className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 mb-10">
          {SDIRefMun.map(({ imageLink, name, link }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>

        <h3 className='text-2xl text-primary font-semibold text-left'>
          <li>{t('Various and international projects')}</li>
        </h3>
        <div className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 mb-10">
          {SDIRefProjects.map(({ imageLink, name }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>

        <h3 className='text-2xl text-primary font-semibold text-left'>
          <li>{t('Infrastructure Management (Utilities, Public Transportation, ... )')}</li>
        </h3>
        <div className="px-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 mb-10">
          {SDIRefInfra.map(({ imageLink, name, link }, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
            >
              {/* Image Container */}
              <div className="w-full h-48 relative">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <img loading="lazy" src={imageLink} alt={name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Always-visible name under image */}
              <div className="mt-2 text-center text-black text-sm font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>  
    </div>
  )
}
export default References
