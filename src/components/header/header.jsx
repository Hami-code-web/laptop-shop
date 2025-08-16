import React, { useRef, useState, useEffect } from 'react';
import logo from '../../assets/logo/logo.png';
import { LuSearch } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Spinner from '../loading/spinner';
import { CiLogin } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { useAuth } from '../../constants/context/authContext';
import { MdOutlineShoppingBag, MdLogout } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdClose, IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  const { user, userData, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirectToLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleProfile = () => {
    setProfile((prev) => !prev);
  };

  const handleConfirmLogout = () => {
    logout();
    setOpenPopUp(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setProfile(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  console.log(first);
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 bg-[#222831] h-20 px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between gap-4"
      dir="rtl"
    >
      {openPopUp && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-gray-50 rounded-lg p-6 w-200 shadow-gray-500 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg text-black font-semibold text-right">
                آیا از خروج از حساب خود مطمئن هستید؟
              </h2>
              <IoMdClose
                onClick={() => setOpenPopUp(false)}
                className="text-black cursor-pointer"
                size={22}
              />
            </div>
            <hr className="mt-2.5 mb-2.5 h-[1px] w-[100%] bg-gray-300" />

            <div className="flex justify-between items-center gap-2">
              <p className="text-black">
                با خروج از حساب خود نمی توانید خرید کنید و نیاز به ساخت حساب
                کاربری دارید
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleConfirmLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  خروج از حساب
                </button>
                <button
                  onClick={() => setOpenPopUp(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <img
        src={logo}
        className="hidden lg:block h-8 object-contain"
        alt="LapZone logo"
      />

      <div className="sm:block relative w-[100%] md:w-[40%]">
        <input
          type="search"
          placeholder="جستجوی محصول"
          className="bg-[#393E46] text-sm text-white w-full rounded-full py-2 pr-10 pl-4 outline-none"
        />
        <LuSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium">
        {!user ? (
          <button
            disabled={isLoading}
            onClick={handleRedirectToLogin}
            className="px-3 sm:px-6 h-10 border border-white text-white rounded-xl hover:bg-white hover:text-[#222831] transition duration-300 disabled:bg-white disabled:text-[#222831] disabled:cursor-not-allowed"
          >
            {!isLoading ? (
              <div className="cursor-pointer flex gap-1 items-center">
                <CiLogin className="lg:block text-xl sm:text-2xl rotate-180" />
                <span className="lg:block">ورود</span>
              </div>
            ) : (
              <Spinner className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        ) : (
          <>
            <button
              ref={buttonRef}
              disabled={isLoading}
              className="px-3 sm:px-2 h-10 border border-white text-white rounded-xl"
            >
              {!isLoading ? (
                <div
                  onClick={handleProfile}
                  className="cursor-pointer flex gap-1 items-center"
                >
                  <FaRegUser className="lg:block text-xl sm:text-2xl " />
                  <IoIosArrowDown />
                </div>
              ) : (
                <Spinner className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            <div
              ref={menuRef}
              className={`${profile ? 'flex' : 'hidden'} absolute flex-col left-36 top-16 rounded-2xl bg-white py-4 space-y-3 text-[1.2rem] font-semibold shadow-gray-400 shadow-md w-[15%] h-min`}
            >
              <div className="px-3 text-gray-600">
                {userData
                  ? `${userData.firstName} ${userData.lastName}`
                  : 'کاربر'}
              </div>
              <hr className="h-[1px] w-[90%] mx-auto bg-gray-500" />

              <div className="cursor-pointer flex gap-2 items-center px-7 text-[1.1rem] text-gray-800 font-medium">
                <MdOutlineShoppingBag size={22} /> سفارش ها
              </div>
              <hr className="h-[1px] w-[90%] mx-auto bg-gray-500" />

              <div className="cursor-pointer flex gap-2 items-center px-7 text-[1.1rem] text-gray-800 font-medium">
                <FaRegHeart size={22} /> علاقه مندی ها
              </div>
              <hr className="h-[1px] w-[90%] mx-auto bg-gray-800" />

              <div
                onClick={() => setOpenPopUp(true)}
                className="cursor-pointer flex gap-2 items-center px-7 text-[1.1rem] text-gray-800 font-medium"
              >
                <MdLogout size={22} /> خروج از حساب کاربری
              </div>
            </div>
          </>
        )}

        <span className="hidden sm:block h-10 w-[1px] bg-[#DCD7C9]"></span>

        <button className="cursor-pointer">
          <IoCartOutline className="h-6 w-6 sm:h-8 sm:w-8 transform scale-x-[-1] text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
