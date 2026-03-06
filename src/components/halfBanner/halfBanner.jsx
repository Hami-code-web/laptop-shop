import React from 'react';
import firstHalfBanner from '/images/halfBanner/graphicCard.jpg';
import secondHalfBanner from '/images/halfBanner/processor.jpg';

const HalfBanner = () => {
  return (
    <div className="max-w-[80rem] mx-auto my-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="overflow-hidden rounded-3xl ">
        <img
          src={secondHalfBanner}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
          alt=""
        />
      </div>

      <div className="overflow-hidden rounded-3xl ">
        <img
          src={firstHalfBanner}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default HalfBanner;
