import React, { useState } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import empty from '../../../public/images/empty-cart.svg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useCart } from '../../constants/context/cartContext';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleHomePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  const totalOriginal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const totalDiscount = cart.reduce(
    (sum, item) =>
      sum +
      ((item.price || 0) - (item.finalPrice || item.price || 0)) *
        (item.quantity || 1),
    0
  );

  const totalPayable = cart.reduce(
    (sum, item) =>
      sum + (item.finalPrice || item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <Nav />
      <div className="max-w-7xl m-auto px-4 py-8">
        <div className="flex items-center gap-2  py-6 border-b mb-6">
          <MdOutlineShoppingBag size={28} />
          <h1 className="text-2xl font-bold text-gray-800">سبد خرید شما</h1>
        </div>

        {cart.length === 0 ? (
          <>
            {!isLoading ? (
              <>
                <div
                  className={`${isLoading ? 'hidden' : 'flex'} flex-col items-center min-h-[70vh] text-center`}
                >
                  <img
                    src={empty}
                    alt="سبد خالی"
                    className="w-60 object-contain mb-4"
                  />
                  <p className="text-xl text-gray-700 font-medium">
                    سبد خرید شما خالی است!
                  </p>
                  <p className="text-md text-gray-600 mt-2">
                    برای مشاهده محصولات بیشتر به{' '}
                    <span
                      onClick={handleHomePage}
                      className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                      صفحه اصلی
                    </span>{' '}
                    بروید.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center h-40">
                  <div className="w-10 h-10 border-4 border-t-transparent border-[#00ADB5] rounded-full animate-spin"></div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="border p-4 rounded-xl w-full md:w-[70%] lg:max-h-95 max-h-80 overflow-y-auto no-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex  items-center justify-between border-b py-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img || '/unavailable.jpg'}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-lg text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        برند: {item.brand}
                      </p>
                      <p className="text-gray-500 text-sm">
                        قیمت واحد: {item.price.toLocaleString()} تومان
                      </p>
                      <p className="text-green-600 font-semibold text-sm">
                        قیمت نهایی:{' '}
                        {item.finalPrice
                          ? item.finalPrice.toLocaleString()
                          : item.price.toLocaleString()}{' '}
                        تومان
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg"
                        >
                          -
                        </button>
                        <span className="font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 md:mt-0 bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-full transition"
                  >
                    <IoMdClose size={22} />
                  </button>
                </div>
              ))}

              <div className="text-left mt-6">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition"
                >
                  خالی کردن سبد خرید
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center border bg-white p-6 rounded-2xl shadow w-full md:w-[30%] h-auto">
              <h2 className="text-xl font-bold mb-6 text-gray-800">
                پرداخت نهایی
              </h2>

              <div className="flex justify-between mb-3 text-gray-700">
                <span>جمع قیمت کالاها:</span>
                <span>{totalOriginal.toLocaleString()} تومان</span>
              </div>

              <div className="flex justify-between mb-3 text-red-500">
                <span>سود شما از این خرید:</span>
                <span>{totalDiscount.toLocaleString()} تومان</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-green-600 font-semibold text-lg mb-5">
                <span>مبلغ قابل پرداخت:</span>
                <span>{totalPayable.toLocaleString()} تومان</span>
              </div>

              <button className="cursor-pointer bg-green-500 hover:bg-green-600 transition text-white w-full py-3 rounded-lg font-medium">
                ادامه خرید
              </button>
              <p className="text-gray-500 py-4 text-sm text-center">
                افزودن کالاها به سبد خرید به معنی رزرو کالا برای شما نیست. برای
                ثبت سفارش باید تمام مراحل خرید را تکمیل نمایید.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
