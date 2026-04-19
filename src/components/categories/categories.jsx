import React from 'react';

import laptop from '../../../public/icons/categoryIcons/laptop.webp';
import motherboard from '../../../public/icons/categoryIcons/motherboard.webp';
import cpu from '../../../public/icons/categoryIcons/cpu1.webp';
import monitor from '../../../public/icons/categoryIcons/monitor.webp';
import gpu from '../../../public/icons/categoryIcons/graphic.webp';
import hard from '../../../public/icons/categoryIcons/hard.webp';
import ram from '../../../public/icons/categoryIcons/ram.webp';

const Categories = () => {
  return (
    <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-18 overflow-x-hidden place-items-center my-10 py-4 max-w-[80rem] mx-auto text-black">
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col gap-2">
          <img
            src={laptop}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">لپ‌تاپ</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col gap-2">
          <img
            src={cpu}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">پردازنده</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col gap-2">
          <img
            src={motherboard}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">مادربرد</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col gap-2">
          <img
            src={monitor}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">مانیتور</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col items-center gap-2">
          <img
            src={gpu}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">کارت گرافیک</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex flex-col gap-2">
          <img
            src={ram}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">رم</span>
        </div>
      </div>
      <div className="group flex items-center justify-center rounded-2xl shadow-md w-30 h-28 text-center bg-white cursor-pointer">
        <div className=" flex items-center flex-col gap-2">
          <img
            src={hard}
            className=" group-hover:scale-110 duration-700 transition-transform w-12 h-12"
            alt=""
          />
          <span className="text-sm font-semibold">انواع حافظه</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
