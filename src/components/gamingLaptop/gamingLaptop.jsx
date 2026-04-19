import React, { useRef, useState } from 'react';
import { useCart } from '../../constants/context/cartContext';
import { useAuth } from '../../constants/context/authContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import 'swiper/css';

import gamingLaptops from '../../data/gamingLaptops.json';
import { useNavigate } from 'react-router-dom';
import { slugify } from '../../constants/slug/slugify';

const GamingLaptop = ({ product }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const swiperRef = useRef(null);

  return (
    <div className=" rounded-2xl select-none relative max-w-[80rem] mx-auto mt-5 shadow-xl bg-white text-teal-800 py-8 z-10 overflow-hidden">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="cursor-pointer hidden lg:flex absolute rounded-l-2xl -right-3 top-[229.4px] bg-teal-800 shadow-md p-3 z-1"
      >
        <IoIosArrowForward
          color="white"
          className="flex justify-center relative right-1"
          size={22}
        />
      </button>

      <button
        onClick={() => swiperRef.current.slideNext()}
        className="cursor-pointer rounded-l-2xl hidden lg:flex absolute -left-3 top-[229.4px] rotate-180 bg-teal-800 shadow-md p-3 z-1"
      >
        <IoIosArrowForward color="white" size={22} />
      </button>

      <div className=" px-10 relative">
        <div className="flex justify-between items-center mb-6">
          <p className="text-md font-semibold flex items-center gap-2">
            <span className="bg-teal-600 rounded-full w-1.5 h-1.5 text-xl"></span>
            جدیدترین گیمینگ ها
          </p>{' '}
          <div className="cursor-pointer flex items-center gap-1 hover:text-teal-600 transition-colors">
            <p className="text-sm font-semibold">مشاهده همه</p>
            <IoIosArrowForward className="rotate-180" />
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={false}
          className="!pb-1"
        >
          {gamingLaptops.products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => {
                  setTimeout(() => {
                    navigate(`/laptop/${product.id}/${slugify(product.name)}`);
                  }, 800);
                }}
                className="bg-white cursor-pointer transition-all rounded-2xl duration-300 hover:-translate-y-3 hover:shadow"
              >
                <div className="p-4">
                  <div className="relative top-5 flex justify-end">
                    {product.discount > 0 && (
                      <span className="flex items-center justify-center bg-red-100 text-red-800 text-sm font-medium p-2 rounded-xl">
                        {product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {product.img ? (
                      <img
                        src={product.img}
                        className="object-cover w-[20rem] rounded-md"
                        alt={product.name}
                        loading="lazy"
                      />
                    ) : (
                      <p className="text-gray-500">عکسی موجود نیست</p>
                    )}
                  </div>
                  <h2 className="text-md font-semibold mt-2 truncate">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{product.brand}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-col">
                      <span className="text-md line-through font-light text-gray-300">
                        {product.price.toLocaleString()} تومان
                      </span>
                      <span className="text-lg font-bold text-teal-700">
                        {product.finalPrice.toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        product.inStock
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.inStock ? 'موجود' : 'ناموجود'}
                    </span>
                    <span className="text-yellow-600">★ {product.rating}</span>
                  </div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-40 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GamingLaptop;
