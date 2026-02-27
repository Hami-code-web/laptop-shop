import React from 'react';
import smallBanner1 from '/images/smallBanner/smallbanner1.jpg';
import smallBanner2 from '/images/smallBanner/smallbanner2.jpg';
import bigBanner1 from '/images/bigBanner/bigbanner1.webp';
import bigBanner2 from '/images/bigBanner/bigbanner2.jpg';

const BannerGrid = () => {
  return (
    <div className="max-w-[80rem] mx-auto my-8 grid grid-cols-3 grid-rows-2 gap-6 h-[35rem] ">
      <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl">
        <img
          src={bigBanner1}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>

      <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl">
        <img
          src={smallBanner1}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>

      <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl">
        <img
          src={smallBanner2}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl">
        <img
          src={bigBanner2}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerGrid;
