import React, { useState } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import empty from '../../../public/images/empty-cart.svg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useCart } from '../../constants/context/cartContext';
import { useNavigate } from 'react-router-dom';
import { BsArrowReturnRight } from 'react-icons/bs';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleHomePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  const redirectHomePage = () => {
    setLoading(true);

    setTimeout(() => {
      navigate('/');
    }, 800);
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
  const baseClass =
    'flex items-center justify-center gap-2 rounded-xl border md:col-span-3 text-center text-md font-semibold py-4 transition-colors';
  const loadingClass = 'bg-white text-gray-400';
  const normalClass =
    'text-gray-700 hover:bg-[#383d45] hover:text-gray-100 cursor-pointer';
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <Nav />
      <div className="max-w-7xl m-auto px-4 py-8">
        <div className="flex items-center gap-2 py-6 border-b mb-6">
          <MdOutlineShoppingBag size={28} />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            سبد خرید شما
          </h1>
        </div>
        {cart.length === 0 ? (
          <>
            {!isLoading ? (
              <div className="flex flex-col items-center min-h-[70vh] text-center">
                <img
                  src={empty}
                  alt="سبد خالی"
                  className="w-40 sm:w-60 object-contain mb-4"
                />
                <p className="text-lg sm:text-xl text-gray-700 font-medium">
                  سبد خرید شما خالی است!
                </p>

                <p className="text-sm sm:text-md text-gray-600 mt-2">
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
            ) : (
              <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-t-transparent border-[#00ADB5] rounded-full animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 border p-4 rounded-xl overflow-y-auto no-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img || '/unavailable.jpg'}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-gray-600 text-xs">
                        برند: {item.brand}
                      </p>

                      <p className="text-gray-500 text-xs">
                        قیمت واحد: {item.price.toLocaleString()} تومان
                      </p>

                      <p className="text-green-600 text-xs font-semibold">
                        قیمت نهایی:{' '}
                        {(item.finalPrice || item.price).toLocaleString()} تومان
                      </p>

                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="w-6 h-6 text-sm bg-gray-200 rounded-full"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <span className="text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          className="w-6 h-6 text-sm bg-gray-200 rounded-full"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 p-1 rounded-full"
                  >
                    <IoMdClose size={18} />
                  </button>
                </div>
              ))}

              <div className="text-left mt-6">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition text-sm sm:text-base"
                >
                  خالی کردن سبد خرید
                </button>
              </div>
            </div>

            <div className="flex justify-center flex-col border bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
                پرداخت نهایی
              </h2>

              <div className="flex justify-between mb-3 text-gray-700 text-sm sm:text-base">
                <span>جمع قیمت کالاها:</span>
                <span>{totalOriginal.toLocaleString()} تومان</span>
              </div>

              <div className="flex justify-between mb-3 text-red-500 text-sm sm:text-base">
                <span>سود شما از این خرید:</span>
                <span>{totalDiscount.toLocaleString()} تومان</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-green-600 font-semibold text-base sm:text-lg mb-5">
                <span>مبلغ قابل پرداخت:</span>
                <span>{totalPayable.toLocaleString()} تومان</span>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg font-medium text-sm sm:text-base">
                ادامه خرید
              </button>

              <p className="text-gray-500 py-4 text-xs sm:text-sm text-center">
                افزودن کالاها به سبد خرید به معنی رزرو کالا برای شما نیست؛ باید
                مراحل خرید را کامل کنید.
              </p>
            </div>

            <div
              onClick={loading ? undefined : redirectHomePage}
              className={`${baseClass} ${loading ? loadingClass : normalClass}`}
            >
              {loading ? (
                <>
                  <span className="w-7 h-7 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                <>
                  بازگشت به صفحه اصلی و ادامه خرید
                  <BsArrowReturnRight size={20} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
