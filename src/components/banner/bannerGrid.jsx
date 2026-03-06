import React from 'react';
import smallBanner1 from '/images/smallBanner/smallbanner1.jpg';
import smallBanner2 from '/images/smallBanner/smallbanner2.jpg';
import bigBanner1 from '/images/bigBanner/bigbanner1.webp';
import bigBanner2 from '/images/bigBanner/bigbanner2.jpg';

const BannerGrid = () => {
  return (
    <div
      className="
      max-w-[80rem] mx-auto my-8 px-4
      
      grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3
      
      grid-rows-none lg:grid-rows-2
      
      gap-4 sm:gap-6
      
      h-auto lg:h-[35rem]
      "
    >
      <div className="sm:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-3xl group">
        <img
          src={bigBanner1}
          className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          alt=""
        />
      </div>

      <div className="sm:col-span-1 lg:col-span-1 overflow-hidden rounded-3xl group">
        <img
          src={smallBanner1}
          className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          alt=""
        />
      </div>

      <div className="sm:col-span-1 lg:col-span-1 overflow-hidden rounded-3xl group">
        <img
          src={smallBanner2}
          className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          alt=""
        />
      </div>

      <div className="sm:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-3xl group">
        <img
          src={bigBanner2}
          className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerGrid;
