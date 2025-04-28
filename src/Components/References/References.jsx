import React from 'react';
import organisation from '../../assets/organisation.jpg'
import bazl from '../../assets/bazl.jpg'
import flughafen from '../../assets/Flughafen.jpg'
import euro from '../../assets/eurocontrol.png'
import skye from '../../assets/Skyguide.jpg'
import bv from '../../assets/obv.png'
import astro from '../../assets/austro.jpg'
import hungaro from '../../assets/hungaro.jpg'
import saab from '../../assets/saab.jpg'

const data = [
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
    { imageLink: hungaro,  
      name: "HungaroControl",
    },
    { imageLink: hungaro,  
      name: "HungaroControl",
    },
    { imageLink: saab,  
      name: "SAAB",
    },


  ]

const References = () => {
  return (
    <div className='container col-span-5 pb-10'>
    <div className='flex flex-col justify-center py-14 md:py-0 sm:z-20'>
    <h2 className=' pt-20 text-3xl font-bold text-left'>References</h2>
    <h4 className='pt-8 sm:text-[1.875rem] text-[1.5rem] mb-2 text-secondary font-normal text-left'>Aeronautical Information Management (AIM)</h4>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-3 py-20">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
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
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-black font-normal text-left'>Confederation:</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6 py-10">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-black font-normal text-left'>Cantons:</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6 py-10">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-black font-normal text-left'>Cities and Municipalities:</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6 py-10">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-black font-normal text-left'>Various and international projects:</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6 py-10">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
<h3 className='pt-7 sm:text-[1.875rem] text-[1.5rem] mb-2 text-black font-normal text-left'>Infrastructure Management (Utilities, Public Transportation, ... ):</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6 py-10">
  {data.map(({ imageLink, name }, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
    >
      <div className="w-full h-full">
        <img src={imageLink} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        </div>
      </div>
    </div>
  ))}
</div>



  </div>  
  </div>
  
  
  )
}

export default References