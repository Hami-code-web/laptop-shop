import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from 'react-icons/io';
import { MdPercent } from 'react-icons/md';
import categories from '../../data/categories.json';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <nav
<<<<<<< HEAD
      className=" relative bg-[#393E46] mt-20 px-4 md:px-10 lg:px-20 h-14 flex justify-between items-center shadow-md shadow-stone-500 z-40 text-white"
=======
      className="relative bg-[#393E46] mt-20 px-4 md:px-10 lg:px-20 h-14 flex justify-between items-center shadow-md shadow-stone-500 z-40 text-white"
>>>>>>> 34abc3a00fa12276e2be7f50f78302dc58208691
      dir="rtl"
    >
      <div className="lg:hidden text-sm flex justify-between">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>
      <div className=" flex lg:hidden gap-2 text-[.8rem] font-light">
        <p className="hover:text-white cursor-pointer">فروش ویژه</p>
        <p className="hover:text-white cursor-pointer">شرایط اقساط</p>
      </div>

<<<<<<< HEAD
      <div className=" hidden lg:flex justify-between w-full">
        <div className="flex gap-5 text-[.9rem]">
          <div
            className=" relative flex gap-2 items-center group cursor-pointer"
=======
      <div className="hidden lg:flex justify-between w-full">
        <div className="flex gap-5 text-[.9rem]">
          <div
            className="relative flex gap-2 items-center group cursor-pointer"
>>>>>>> 34abc3a00fa12276e2be7f50f78302dc58208691
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="font-normal text-white">دسته بندی‌ها</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
            <span className="h-full bg-gray-400 w-[1px]" />
            {isOpen && (
<<<<<<< HEAD
              <div className=" absolute rounded top-full right-0 w-[800px] bg-white text-black shadow-xl p-6 flex gap-10 rtl z-50">
=======
              <div className="absolute top-full right-0 w-[800px] bg-white text-black shadow-xl p-6 flex gap-10 rtl z-50">
>>>>>>> 34abc3a00fa12276e2be7f50f78302dc58208691
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-[#222831] mb-2">
                      {category.title}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {category.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center font-light text-sm text-gray-400">
            <Link className="hover:text-white transition-colors duration-200">
              راهنمای خرید
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              خرید کالای کارکرده
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              سوالات متداول
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              شرایط گارانتی
            </Link>
          </div>
        </div>
        <div className="flex gap-5 text-sm font-light text-gray-400">
          <div className="flex gap-1 items-center cursor-pointer hover:text-white">
            <MdPercent />
            <span>فروش ویژه</span>
          </div>
          <div className="flex gap-1 items-center cursor-pointer hover:text-white">
            <MdPercent />
            <span>شرایط اقساط</span>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-full bg-[#222831] text-sm font-light text-gray-300 py-4 space-y-3 z-50 px-6">
          <div className="space-y-2 ">
            <p className="text-white font-medium ">دسته بندی‌ها</p>
            {categories.map((category, i) => (
              <div key={i} className="transition-all duration-300">
                <div
                  onClick={() => toggleCategory(i)}
                  className="flex justify-between items-center cursor-pointer text-white"
                >
                  <span className="text-md font-medium">{category.title}</span>
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      openCategory === i ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <ul
                  className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${
                    openCategory === i ? 'max-h-40 px-2' : 'max-h-0'
                  }`}
                >
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-gray-300 text-sm font-light hover:text-white py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="border-gray-600 my-3" />

          <div className="space-y-2">
            <Link className="block hover:text-white">راهنمای خرید</Link>
            <Link className="block hover:text-white">خرید کالای کارکرده</Link>
            <Link className="block hover:text-white">سوالات متداول</Link>
            <Link className="block hover:text-white">شرایط گارانتی</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
