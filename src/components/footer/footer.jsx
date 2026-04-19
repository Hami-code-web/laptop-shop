import React from 'react';
import footer from '../../data/footerItems.json';
import Enamad from '/images/Enamad/enemad-logo-1.webp';
const Footer = () => {
  return (
    <div dir="rtl" className=" bg-[#f5f7fb] text-black py-10">
      <div className="max-w-[70rem] mx-auto">
        <div className=" items-center">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">لپ‌زون</p>
            <p className="text-sm font-light">
              لپ‌زون مرکز تخصصی فروش قطعات کامپیوتر، لپ‌تاپ، تجهیزات گیمینگ و
              اسمبل سیستم‌های حرفه‌ای ~ ارسال به سراسر کشور
            </p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-4 w-[75%] ">
              {footer.map((f) => (
                <div className="">
                  <p className="my-5 font-bold text-sm">{f.title}</p>
                  <div className="flex flex-col gap-3.5">
                    {f.items.map((i) => (
                      <p className=" cursor-pointer duration-300 transition-colors hover:text-teal-600 font-normal text-gray-900 text-sm">
                        {i}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mx-auto items-center">
              <div className="bg-white py-3 px-10 rounded-2xl shadow-xl border-1 border-gray-200">
                <img src={Enamad} className="w-20 h-20 cursor-pointer" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
