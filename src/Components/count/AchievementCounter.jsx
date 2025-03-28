import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";

const AchievementCounter = ({ end, suffix, title }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-light shadow-md rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 ">
    <div className="text-center space-y-5">
      <h2 className="text-4xl font-bold text-secondary">
        <CountUp start={end - 10} end={end} duration={2} suffix={suffix} />
      </h2>
      <p className="text-lg font-medium">{t(title)}</p>
    </div>
    </div>
  );
};

export default AchievementCounter;
