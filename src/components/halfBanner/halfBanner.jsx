import React from 'react';
import firstHalfBanner from '/images/halfBanner/graphicCard.jpg';
import secondHalfBanner from '/images/halfBanner/processor.jpg';

const HalfBanner = () => {
  return (
    <div className="max-w-[80rem] mx-auto p-2 md:p-0 flex flex-col md:flex-row my-10 gap-7 justify-around">
      <div className="overflow-hidden w-full rounded-3xl">
        <img
          src={secondHalfBanner}
          className="w-full md:h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
          alt="second banner"
        />
      </div>

      <div className="overflow-hidden w-full rounded-3xl">
        <img
          src={firstHalfBanner}
          className="w-full md:h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
          alt="first banner"
        />
      </div>
    </div>
  );
};

export default HalfBanner;
