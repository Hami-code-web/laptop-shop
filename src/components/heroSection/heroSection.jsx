import React, { useState, useEffect } from 'react';
import slider1 from '../../assets/sliderImages/slider1.webp';
import slider2 from '../../assets/sliderImages/slider2.webp';
import slider3 from '../../assets/sliderImages/slider3.webp';
import slider4 from '../../assets/sliderImages/slider4.webp';
import slider5 from '../../assets/sliderImages/slider5.webp';
import slider6 from '../../assets/sliderImages/slider5.webp';
import slider7 from '../../assets/sliderImages/slider7.webp';
import banner1 from '../../assets/sliderImages/bannerImages/banner1.webp';
import banner2 from '../../assets/sliderImages/bannerImages/banner2.webp';

import { IoIosArrowDown } from 'react-icons/io';

const heroSection = () => {
  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
  }, []);
  return (
    <div className="h-[600px] flex justify-center items-center gap-6">
      <div className="relative">
        <img
          src={images[currentSlide]}
          className="shadow-xl cursor-pointer h-[500px] object-cover rounded-xl"
          alt=""
        />

        <button
          onClick={nextSlide}
          className="absolute rotate-90 left-2 top-1/2 text-black rounded-full"
        >
          <IoIosArrowDown size={20} />
        </button>

        <button
          onClick={prevSlide}
          className="absolute rotate-[-90deg] text-black right-2 top-1/2 rounded-full"
        >
          <IoIosArrowDown size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <img
            src={banner1}
            className="shadow-xl cursor-pointer h-[240px] object-cover rounded-xl"
            alt=""
          />
        </div>
        <div>
          <img
            src={banner2}
            className="shadow-xl cursor-pointer h-[240px] object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default heroSection;
