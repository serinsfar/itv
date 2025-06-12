import React from 'react';

const Contact_Us = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Dorfstrasse+53,+8105+Regensdorf/@47.4394,8.4772,17z';

  return (
    <div className="container mx-auto mt-36
     px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Google Maps Section */}
      <div className="w-full h-[500px] rounded-md overflow-hidden shadow">
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

      {/* Contact Info Section */}
      <div className="space-y-6 my-auto items-center border-2 rounded-3xl p-6">
        <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
        <div className="text-lg text-primary">
         <p className="mt-4">
          <p><strong>Telefon :</strong></p>
            <p className="text-secondary underline">
              +41 44 871 21 90
            </p>
          </p>
          <p className="mt-4">
            <p><strong>Email :</strong></p>
            <a href="mailto:Info@itv.ch" className="text-secondary underline">
              Info@itv.ch
            </a>
          </p>
          <p className="mt-4"></p>
          <p><strong>Adresse :</strong></p>
          <p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              Dorfstrasse 53, 8105 Regensdorf-Watt, Switzerland
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
