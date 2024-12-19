import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter = ({ end, suffix, title }) => {
  return (
    <div className="bg-light shadow-md rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 ">
    <div className="text-center space-y-5">
      <h2 className="text-4xl font-bold text-secondary">
        <CountUp start={end - 10} end={end} duration={2} suffix={suffix} />
      </h2>
      <p className="text-lg font-medium">{title}</p>
    </div>
    </div>
  );
};

export default AchievementCounter;
