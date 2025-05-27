import React from 'react';
import organisation from '../../assets/organisation.jpg'
import flughafen from '../../assets/flughafen.jpg'
import euro from '../../assets/eurocontrol.png'
import skye from '../../assets/skyguide.jpg'
import bv from '../../assets/obv.png'
import astro from '../../assets/Austro.jpg'
import hungaro from '../../assets/hungaro.jpg'
import saab from '../../assets/saab.jpg'
import bahrain from '../../assets/Bahrain.png'
import uae from '../../assets/UAE.jpg'
import icao from '../../assets/icao.png'
import iata from '../../assets/IATA.jpg'
import ana from '../../assets/ANA.png'
import caan from '../../assets/CAAN.png'
import ag from '../../assets/AG.png'
import swisstopo from '../../assets/swisstopo.png'
import strassen from '../../assets/Strassen.png'
import umwelt from '../../assets/Umwelt.png'
import bav from '../../assets/Bav.png'
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
import budapest from '../../assets/Budapest.jpg'
import Aserbaidschan from '../../assets/Aserbaidschan.png'
import guatemala from '../../assets/Guatemala.jpg'
import Kirgistan from '../../assets/Kirgistan.jpg'
import Moldawien from '../../assets/Moldawien.png'
import Nakhchivan from '../../assets/Nakhchivan.png'
import China from '../../assets/China.png'
import Nagra from '../../assets/NAGRA.jpg'
import sbb from '../../assets/SBB.png'
import obb from '../../assets/OBB.png'
import vbg from '../../assets/VBG.gif'
import Cablecom from '../../assets/Cablecom.png'
import saw from '../../assets/SAW.png'
import Entsorgungsamt from '../../assets/SG_Entsorgungsamt.png'
import sgsw from '../../assets/sgsw.png'
import erz from '../../assets/ZH_ERZ.jpg'


const AIMRef = [
    { imageLink: bazl,  
      name: "Bundesamt für Zivilluftfahrt (BAZL)",
    },
    { imageLink: flughafen,  
      name: "Flughafen Zürich AG",
    },
    { imageLink: euro,  
      name: "Eurocontrol",
    
    },
    { imageLink: skye,  
      name: "Skyguide - Swiss Air Navigations Services",
    },
    { imageLink: bv,  
      name: "Oberste Zivile Luftfahrtbehörde (OZB), BMVIT (A)",
    },
    { imageLink: astro,  
      name: "Austro Control",
    },
    { imageLink: hungaro,  
      name: "HungaroControl",
    },
    { imageLink: saab,  
      name: "SAAB",
    },
    {imageLink: bahrain,
      name: "Bahrain Civil Aviation Affairs",
    },
    {imageLink: uae,
      name: "UAE General Civil Aviation Authority",
    },
    {imageLink: icao,
      name: "ICAO"
    },
    {imageLink: iata,
      name: "IATA",
    },
    {imageLink: ana,
      name: "ANA Luxembourg",
    },
    {imageLink: caan,
      name: "Civil Aviation Authority of Nepal",
    },
 ];

const SDIRefConf = [
    { imageLink: swisstopo, 
      name: "Bundesamt für Landestopographie - Swisstopo"
    },
    { imageLink: strassen,
      name: "Bundesamt für Strassen - ASTRA"
    },
    { imageLink: umwelt,
      name: "Bundesamt für Umwelt - BAFU"
    },
    { imageLink: bav,
      name: "Bundesamt für Verkehr - BAV"
    },
    {imageLink: bazl,
      name: "Bundesamt für Zivilluftfahrt - BAZL"
    },
    {imageLink: uvek,
      name: "Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation - UVEK"
    },
    {imageLink: Kogis,
      name: "KOGIS - Koordinationsstelle GIS des Bundes"
    }  
    ]

const SDIRefCan = [
      { imageLink: ag,
      name: "Kanton Aargau - Tiefbauamt (TBA)"
    },
    { imageLink: Bl,
      name: "Kanton Basel-Landschaft - Amt für Geoinformation"
    },
    { imageLink: bud,
      name: "Kanton Basel-Landschaft - Bau- und Umweltschutzdirektion (BUD)"
    },
    { imageLink: st,
      name: "Kanton St. Gallen - Amt für Geoinformation"
    },
    { imageLink: aln,
      name: "Kanton Zürich - Amt für Landschaft und Natur (ALN)"
    }
  ]
  const SDIRefMun = [
    { imageLink: baden,
      name: "Stadt Baden - Raumplanung"
    },
    { imageLink: regio,
      name: "Baden - Regio Regionalplanungsverband"
    },
    { imageLink: chur,
      name: "Stadt Chur - Abteilung Geoinformatik"
    },
    { imageLink: langenthal,
      name: "Stadt Langenthal - Bauamt"
    },
    { imageLink: afs,
      name: "Stadt Zürich - Amt für Städtebau (AfS)"
    },
    { imageLink: zurichVer,
      name: "Stadt Zürich - Geomatik + Vermessung Stadt Zürich (GeoZ)"
    },
    { imageLink: Gruen_zurich,
      name: "Stadt Zürich - Grün Stadt Zürich (GSZ)"
    },
    { imageLink: TAZ,
      name: "Stadt Zürich - Tiefbauamt der Stadt Zürich (TAZ)"
    },

  ]
  
  const SDIRefProjects = [
    { imageLink:  seco,
      name: "Stadt Zürich - SECO - Tiefbau- und Entsorgungsdepartement"
    },
    {imageLink: budapest,
      name: "Ministerium für Landwirtschaft und regionale Entwicklung, Budapest"
    },
    {imageLink: Aserbaidschan,
      name: "Katasterprojekt Aserbaidschan"

    },
    {imageLink: guatemala,
      name: "Katasterprojekt Guatemala"
    },
    { imageLink: Kirgistan,
      name: "GIS-/Katasterprojekt Kirgistan"
    },
    {imageLink: Moldawien ,
      name: "Aufbau der digitalen Katasterkarten- und Orthophotoproduktion (II), Moldawien Worldbank"
    },
    { imageLink: Nakhchivan,
      name: "Pilot 'Vereintes Kataster- und Grundbuch-System', Autonome Republik Nakhchivan, Aserbaidschan"
    },
    {
      imageLink: Moldawien,
      name: "Grundbuch- und Katastersystem (I), Moldawien"
    },
    { imageLink: China,
      name: "Chongqing Urban Environment Project (GIS-Komponente), China"
    },
    {imageLink: budapest,
      name: "Bodenamt (DLO), Stadt Budapest"
    },
    { imageLink: Nagra,
      name: "NAGRA"
    }

  ];
  const SDIRefInfra = [
    { imageLink: sbb,  

      name: "Schweizerische Bundesbahnen (SBB)"
    },      
    { imageLink: obb,
      name: "Österreichische Bundesbahnen (ÖBB)"          
    },
        { imageLink: vbg,
      name: "Verkehrsbetriebe Glattal - Glattalbahn (VBG)"          
    },
        { imageLink: Cablecom,
      name: "Cablecom "         
    },
        { imageLink: saw,
      name: "Schweizer Wanderwege SAW"          
    },
        { imageLink: Entsorgungsamt,
      name: "Stadt St.Gallen - Entsorgungsamt"          
    },
    { imageLink: sgsw,
      name: "Stadt St.Gallen - Stadtwerke (Abt. Wasser, Erdgas und Elektro)"
    },
        { imageLink: erz,
      name: "Stadt Zürich - Entsorgung + Recycling Zürich (ERZ)"          
    },
  ]

const References = () => {
  return (
    <div className='container col-span-5 pb-10'>
    <div className='flex flex-col justify-center py-14 md:py-0 sm:z-20'>
    <h2 className=' pt-20 text-3xl font-bold text-left'>References</h2>
    <h4 className='pt-8 sm:text-[1.875rem] text-[1.5rem] mb-2 text-secondary font-normal text-left'>Aeronautical Information Management (AIM)</h4>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
{AIMRef.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black text-sm font-semibold">
      {name}
    </div>
  </div>
))}

</div>
{/*<p>
  more references: <br/>
Oberste Zivile Luftfahrtbehörde (OZB), BMVIT (A) <br/>
Austro Control<br/>
HungaroControl<br/>
SAAB<br/>
Bahrain Civil Aviation Affairs<br/>
UAE General Civil Aviation Authority<br/>
ICAO<br/>
IATA<br/>
ANA Luxembourg<br/>
Civil Aviation Authority of Nepal
</p>*/}

<h4 className='pt-8 sm:text-[1.875rem] text-[1.5rem] mb-2 text-secondary font-normal text-left'>Spatial Data Infrastructure (SDI)</h4>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-primary font-normal text-left'><li>Confederation:</li></h3>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
{SDIRefConf.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black text-sm font-semibold">
      {name}
    </div>
  </div>
))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-primary font-normal text-left'><li>Cantons:</li></h3>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
{SDIRefCan.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black text-sm font-semibold">
      {name}
    </div>
  </div>
))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-primary font-normal text-left'><li>Cities and Municipalities:</li></h3>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
  {SDIRefMun.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black text-sm font-semibold">
      {name}
    </div>
  </div>
))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-primary font-normal text-left'><li>Various and international projects:</li></h3>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
  {SDIRefProjects.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black text-sm font-semibold">
      {name}
    </div>
  </div>
))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-decoration-line text-primary font-normal text-left'><li>Infrastructure Management (Utilities, Public Transportation, ... ):</li></h3>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-5 py-20">
  {SDIRefInfra.map(({ imageLink, name }, index) => (
  <div
    key={index}
    className="col-span-1 flex flex-col items-center group overflow-hidden cursor-pointer transition duration-300 ease-in-out rounded-lg"
  >
    {/* Image Container */}
    <div className="w-full h-48 relative">
      <img src={imageLink} alt={name} className="w-full h-full object-contain" />
    </div>

    {/* Always-visible name under image */}
    <div className="mt-2 text-center text-black  font-semibold text-sm">
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