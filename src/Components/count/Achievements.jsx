import React from 'react';
import AchievementCounter from './AchievementCounter';
import { useTranslation } from "react-i18next";

const Achievements = () => {
   const { t } = useTranslation();
  return (
    
    <section className="bg-white pt-20 pb-16">
      <h1 className="container text-3xl font-bold text-left pb-16 ">{t('Our Achievements')}</h1>
      <div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
       
        <AchievementCounter end={250} title="Organizations Served" />
        <AchievementCounter end={5000} suffix="+" title="Hours of Training Delivered" />
        <AchievementCounter end={50} suffix="+" title="Successful Projects in 20+ Countries" />
      </div>
      </div>
    </section>
  );
};

export default Achievements;
