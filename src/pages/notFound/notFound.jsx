import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.jpg';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#222831] text-[#DCD7C9] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-right">
          <h1 className="text-8xl font-extrabold text-blue-500 tracking-widest">
            404
          </h1>

          <h2 className="text-2xl font-semibold">صفحه مورد نظر پیدا نشد</h2>

          <p className="text-gray-400 leading-relaxed">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است
          </p>

          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src={notfound}
            alt="Not Found"
            className="max-w-sm md:max-w-md rounded-2xl shadow-2xl opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
