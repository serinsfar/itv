import React from 'react';
import Contact_Us from '../ContactUs/Contact_Us';

const Pop = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleShowAlert}
      >
        Contact
      </button>
      <Contact_Us onContactClick={handleShowAlert} />
      {showAlert ? (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-lightBlue-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">lightBlue!</b> This is a lightBlue alert -
            check it out!
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pop;