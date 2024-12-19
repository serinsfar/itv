import React from 'react';
import AchievementCounter from './AchievementCounter';


const Achievements = () => {
  return (
    <section className="bg-white pt-20 pb-16">
      <h1 className="container text-3xl font-bold text-left pb-16 ">Our Achievements</h1>
      <div className='pl-24'>
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
