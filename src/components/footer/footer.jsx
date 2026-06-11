import React from 'react';
import footer from '../../data/footerItems.json';
import Enamad from '/images/Enamad/enemad-logo-1.webp';

const Footer = () => {
  return (
    <div dir="rtl" className="bg-[#f5f7fb] text-black py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-2xl sm:text-3xl font-bold text-center md:text-right">
            لپ‌زون
          </p>

          <p className="text-xs sm:text-sm font-light text-gray-700 text-center md:text-left md:max-w-md">
            لپ‌زون مرکز تخصصی فروش قطعات کامپیوتر، لپ‌تاپ، تجهیزات گیمینگ و
            اسمبل سیستم‌های حرفه‌ای ~ ارسال به سراسر کشور
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 flex-1">
            {footer.map((f, index) => (
              <div key={index}>
                <p className="mb-4 font-bold text-sm">{f.title}</p>

                <div className="flex flex-col gap-3">
                  {f.items.map((i, idx) => (
                    <p
                      key={idx}
                      className="cursor-pointer text-gray-700 hover:text-teal-600 transition text-xs sm:text-sm"
                    >
                      {i}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end items-start">
            <div className="bg-white p-4 sm:px-8 rounded-2xl shadow-md border border-gray-200">
              <img
                src={Enamad}
                className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
                alt="Enamad"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
