import React, { useRef } from 'react';
import magazines from '../../data/magazine.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineArticle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

const Magazine = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-[80rem] mx-auto text-black ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <MdOutlineArticle size={30} />
          <p className="font-bold text-xl">مجله تکنولوژی</p>
        </div>
        <div className="cursor-pointer font-medium rounded-lg transition-all duration-300 bg-teal-600 hover:bg-teal-700 text-white border px-4 py-2">
          مشاهده تمام مطالب
        </div>
      </div>
      <div className=" flex py-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={false}
        >
          {magazines.news.map((magazine) => (
            <SwiperSlide key={magazine.id}>
              <div className="hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-white p-4 rounded-3xl">
                <div className="overflow-hidden rounded-xl group">
                  <img
                    src={magazine.img}
                    className=" group-hover:scale-105 transition-transform duration-300 object-cover w-full h-[10rem]"
                    alt=""
                  />
                </div>
                <div className=" items-center mt-2 flex justify-between font-light text-[.7rem]">
                  <p className="">{magazine.content}</p>
                  {magazine.tag ? (
                    <p className="bg-teal-600 rounded-2xl text-white px-2 py-1">
                      {magazine.tag}
                    </p>
                  ) : (
                    <p className=" invisible bg-teal-600 rounded-2xl text-white p-1">
                      {magazine.author}
                    </p>
                  )}
                </div>
                <div className="leading-9 line-clamp-2">{magazine.title}</div>
                <div className="leading-7 line-clamp-2 my-4 text-gray-500 text-[.8rem] ">
                  {magazine.description}
                </div>
                <div className="flex justify-between text-gray-500 text-[.8rem] ">
                  <p>{magazine.author}</p>
                  <p>{magazine.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Magazine;
