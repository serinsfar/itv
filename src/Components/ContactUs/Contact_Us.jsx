import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";

const Contact_Us = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Dorfstrasse+53,+8105+Regensdorf/@47.4394,8.4772,17z';
  const { t } = useTranslation();
  return (
    <div className="container mt-12 mb-16">
    <h1 className=" text-3xl font-bold mb-16">{t('Contact Us')}</h1>
    <div className="container lg:max-w-[1270px] md:max-w-[700px] sm:p-4 2xl:gap-20 lg:gap-16 md:gap-12 sm:gap-8 flex flex-col 2xl:px-20 lg:px-8 sm:items-center
     px-4 gap-16 lg:items-center">
      {/* Contact Info Section */}
      <div className="container grid md:grid-cols-3 sm:grid-cols-1 my-auto items-center border-2 rounded-3xl p-6">
        <div className=" md:pr-4 ">
          <div className="text-lg text-primary pb-4">
          <p className="mt-4">
            <div className='flex items-center gap-2'>
            <FaPhone className="text-lg "/>
            <p><strong>{t("Phone")} :</strong></p>
            </div>
              <p className="text-secondary underline">
                <a href="tel:+41 44 871 21 90">+41 44 871 21 90</a>
              </p>
            </p>
            <p className="mt-4">
              <div className='flex items-center gap-2'>
              <MdMail className="text-lg "/>
              <p><strong>{t("Email")} :</strong></p>
              </div>
              <a href="mailto:info@itv.ch" className="text-secondary underline">
                info@itv.ch
              </a>
            </p>
            <p className="mt-4"></p>
            <div className='flex items-center gap-2'> 
              <FaMapPin className="text-lg "/>
            <p><strong>{t("Address")} :</strong></p>
            </div>
            <p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                Dorfstrasse 53,<br/> 8105 Regensdorf-Watt, <br/> {t("Switzerland")}
              </a>
            </p>
          </div>
         </div>
 
            {/* Google Maps Section */}
          <div className="w-auto h-[400px] rounded-md overflow-hidden shadow md:col-start-2 md:col-end-4 sm:col-start-1 sm:col-end-2">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.137947968757!2d8.474637315583804!3d47.43938477917512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47901d8eb5e4c8b1%3A0xf2b3b0e7ea5ef91e!2sDorfstrasse%2053%2C%208105%20Regensdorf!5e0!3m2!1sen!2sch!4v1718012345678"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Contact_Us;
