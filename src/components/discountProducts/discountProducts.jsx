import React, { useRef, useState } from 'react';
import { useCart } from '../../constants/context/cartContext';
import { useAuth } from '../../constants/context/authContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from 'react-icons/io';
import { slugify } from '../../constants/slug/slugify';
import 'swiper/css';

import discountProducts from '../../data/discountProducts.json';
import { useNavigate } from 'react-router-dom';

const BestSellersProducts = ({ product }) => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <div className=" select-none relative bg-teal-100 text-teal-800 py-8">
      <div className="absolute bottom-[72px] flex gap-2">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="cursor-pointer hidden lg:flex relative bg-white rounded-full shadow-md p-2 hover:bg-gray-200 z-10"
        >
          <IoIosArrowForward size={22} />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="cursor-pointer hidden lg:flex relative rotate-180 bg-white rounded-full shadow-md p-2 hover:bg-gray-200 z-10"
        >
          <IoIosArrowForward size={22} />
        </button>
      </div>
      <div className="max-w-[80rem] mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-bold">محصولات فروش ویژه</p>
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
          className="!pb-10"
        >
          {discountProducts.products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => {
                  setTimeout(() => {
                    navigate(
                      `/discountproducts/${product.id}/${slugify(product.name)}`
                    );
                  }, 800);
                }}
                className=" cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-4">
                  <div className="relative top-5 flex justify-end">
                    {product.finalPrice < product.price && (
                      <span className="flex items-center justify-center bg-red-100 text-red-800 text-sm font-medium p-2 rounded-xl">
                        {((product.price - product.finalPrice) /
                          product.price) *
                          100}
                        %
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellersProducts;
