import React, { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import slider1 from '../../assets/sliderImages/slider1.webp';
import slider2 from '../../assets/sliderImages/slider2.webp';
import slider3 from '../../assets/sliderImages/slider3.webp';
import slider4 from '../../assets/sliderImages/slider4.webp';
import slider5 from '../../assets/sliderImages/slider5.webp';
import slider6 from '../../assets/sliderImages/slider6.webp';
import slider7 from '../../assets/sliderImages/slider7.webp';
import banner1 from '../../assets/sliderImages/bannerImages/banner1.webp';
import banner2 from '../../assets/sliderImages/bannerImages/banner2.webp';

const ResposiveHeroSection = () => {
  const sliderImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mx-3 select-none max-w-7xl lg:mx-auto my-6 flex flex-col lg:flex-row gap-4 relative">
      <div className="w-full lg:w-3/4 h-60 lg:h-100 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="h-full rounded-xl overflow-hidden"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black"
        >
          <IoIosArrowForward size={20} />
        </div>
        <div
          ref={nextRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black"
        >
          <IoIosArrowBack size={20} />
        </div>
      </div>

      <div className="w-full lg:w-1/4 flex lg:flex-col gap-4 h-40 lg:h-100">
        <div className="flex-1 rounded-xl overflow-hidden">
          <img
            src={banner1}
            className="w-full h-full object-cover"
            alt="banner1"
          />
        </div>
        <div className="flex-1 rounded-xl overflow-hidden">
          <img
            src={banner2}
            className="w-full h-full object-cover"
            alt="banner2"
          />
        </div>
      </div>
    </div>
  );
};

export default ResposiveHeroSection;
