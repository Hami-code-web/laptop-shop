import { Navigate, useParams } from 'react-router-dom';
import BestSellersDetail from '../../../data/bestSellersProducts.json';
import Header from '../../../components/header/header';
import Nav from '../../../components/nav/nav';
import Footer from '../../../components/footer/footer';
import { GoHome } from 'react-icons/go';
import { FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../../../constants/context/cartContext';
import { fa } from 'zod/v4/locales';

const BestSellersDetails = () => {
  const { id } = useParams();

  const allProducts = BestSellersDetail.products;
  const product = allProducts.find((p) => p.id === id);
  const { cart, addToCart, removeFromCart } = useCart();

  if (!product) return <Navigate to="/404" replace />;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.hex);
  const [selectedImage, setSelectedImage] = useState(product.img);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Nav />
      <main className="max-w-max mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap justify-end items-center gap-1 sm:gap-2 mt-2 sm:mt-3 mx-1 sm:mx-2 text-gray-500 text-xs sm:text-sm">
          {product.brandName}
          <FaAngleRight className="rotate-180" />
          {product.category}
          <FaAngleRight className="rotate-180" />
          <p>محصولات پرفروش</p>
          <FaAngleRight className="rotate-180" />
          <div className="flex items-center gap-1">
            <p>خانه</p>
            <GoHome size={15} />
          </div>
        </div>

        <section className=" flex items-center justify-center px-10 rounded-2xl shadow-sm border overflow-hidden mt-3 sm:mt-4">
          <div
            dir="rtl"
            className="flex bg-gray-200 rounded-lg border-1 border-gray-400 text-center p-3 justify-center items-center "
          >
            <div className=" w-100 h-100 flex flex-col p-6 rounded-2xl">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                خلاصه سفارش
              </h2>
              <hr className="border-t w-full my-3 border-gray-300" />

              {product.finalPrice < product.price ? (
                <>
                  <div className="flex justify-between mb-3 text-gray-500 line-through text-sm sm:text-base">
                    <span>قیمت قبل از تخفیف</span>
                    <span className="font-bold">
                      {product.price.toLocaleString()} تومان
                    </span>
                  </div>

                  <div className="flex justify-between mb-3 text-gray-500 text-sm sm:text-base">
                    <span>قیمت کل</span>
                    <span className="font-bold">
                      {product.finalPrice.toLocaleString()} تومان
                    </span>
                  </div>

                  <div className="flex justify-between mb-3 text-red-500 text-sm sm:text-base">
                    <span>سود شما از این خرید:</span>
                    <span className="font-bold">
                      {(product.price - product.finalPrice).toLocaleString()}{' '}
                      تومان
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between mb-3 text-gray-700 text-sm sm:text-base">
                  <span>قیمت کل</span>
                  <span className="font-bold">
                    {product.price.toLocaleString()} تومان
                  </span>
                </div>
              )}

              <hr className="my-3" />

              <div className="flex justify-between text-green-600 font-semibold text-base sm:text-lg mb-5">
                <span>مبلغ قابل پرداخت:</span>
                <span>
                  {(product.finalPrice || product.price).toLocaleString()} تومان
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4 text-right">
                <span className="font-bold">رنگ:</span>
                <span className="font-black">
                  {
                    product.colors.find((color) => color.hex === selectedColor)
                      ?.name
                  }
                </span>
              </div>

              <button
                disabled={isLoading}
                onClick={() => {
                  const chosenColor = product.colors.find(
                    (color) => color.hex === selectedColor
                  );

                  addToCart({
                    ...product,
                    selectedColor: chosenColor,
                  });
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 1000);
                }}
                className={`cursor-pointer w-full py-3 rounded-lg font-medium text-sm sm:text-base transition flex items-center justify-center ${
                  isLoading
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'افزودن به سبد خرید'
                )}
              </button>

              <p className="text-gray-500 py-4 text-xs sm:text-sm text-center">
                مرجوع کردن کالا فقط در صورتی امکان پذیر است که کالا در شرایط
                اولیه باشد(در صورت پلمپ بودن، کالا نباید باز شده باشد)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-4 sm:p-6">
              <p
                dir="rtl"
                className="text-gray-800 text-lg sm:text-xl font-bold text-right"
              >
                {product.name}
              </p>

              <p className="text-right text-gray-300 mt-2 sm:mt-3 mb-2 sm:mb-3 text-xs sm:text-sm font-light">
                {product.enName}
              </p>

              <hr className="border-t w-full border-gray-300" />
              <div className=" flex flex-col items-end mt-3 sm:mt-4">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3.5 w-3.5 rounded-full border border-gray-300"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <p className="text-sm sm:text-base md:text-lg font-bold">
                    {`رنگ : ${product.colors.find((color) => color.hex === selectedColor)?.name}`}
                  </p>
                </div>

                <div className="flex flex-wrap justify-end gap-2 sm:gap-3 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => setSelectedColor(color.hex)}
                      className={`size-7 sm:size-8 rounded-full flex items-center justify-center ${
                        selectedColor === color.hex
                          ? 'ring-4 ring-[#19BFD3]'
                          : 'ring-1 ring-gray-300'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="size-6 sm:size-7 rounded-full"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex content-start flex-col my-4 mt-5 sm:mt-6 w-[65%]">
                  <p className="font-bold text-right">ویژگی‌ها</p>
                  <div
                    dir="rtl"
                    className="my-2 grid gap-2 grid-cols-1 text-start sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-lg text-gray-900 text-xs sm:text-sm p-2.5 sm:p-3 flex items-center bg-gray-100"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-start min-h-[260px] sm:min-h-[320px]">
              <div className="relative w-full flex justify-center items-center flex-grow p-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="mix-blend-multiply w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <div className="no-scrollbar mt-4 w-full flex justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-1">
                {product.images.map((image, index) => (
                  <img
                    key={`thumb-${index}`}
                    onClick={() => setSelectedImage(image)}
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 cursor-pointer rounded-xl object-contain bg-gray-50 transition-all duration-200 ${
                      selectedImage === image
                        ? 'border-2 border-teal-500 shadow-sm scale-105'
                        : 'border border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BestSellersDetails;
