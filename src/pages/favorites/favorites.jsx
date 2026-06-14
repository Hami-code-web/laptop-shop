import React from 'react';
import { useFavorite } from '../../constants/context/favoriteContext';
import { useCart } from '../../constants/context/cartContext';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import favorite from './empty.svg';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { slugify } from '../../constants/slug/slugify';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorite();
  const { addToCart } = useCart();

  const getProductLink = (product) => {
    switch (product.type) {
      case 'laptop':
        return `/laptop/${product.id}/${slugify(product.name)}`;
      case 'bestsellers':
        return `/bestsellers/${product.id}/${slugify(product.name)}`;
      case 'discountproducts':
        return `/discountproducts/${product.id}/${slugify(product.name)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Nav />

      <main
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full"
        dir="rtl"
      >
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-gray-800">
            لیست علاقه‌مندی‌های شما
          </h1>
          <span className="bg-teal-100 text-teal-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            {favorites.length} کالا
          </span>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm my-8 flex flex-col items-center justify-center">
            <div className="text-gray-300 text-6xl mb-4">
              <img src={favorite} alt="" />
            </div>
            <p className="text-gray-500 font-medium mb-4 text-sm sm:text-base">
              لیست علاقه‌مندی‌های شما در حال حاضر خالی است.
            </p>
            <Link
              to="/"
              className="bg-teal-500 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-teal-600 transition shadow-md shadow-teal-100"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        ) : (
          /* حالت دوم: نمایش کارت‌های محصولات لایک شده */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group overflow-hidden"
              >
                <button
                  onClick={() => toggleFavorite(product)}
                  className="absolute left-3 top-3 text-gray-400 hover:text-red-500 transition-colors z-10 p-1.5 hover:bg-red-50 rounded-lg"
                  title="حذف از علاقه‌مندی‌ها"
                >
                  <FaTrashAlt size={15} />
                </button>

                <div className="h-44 w-full flex items-center justify-center p-2 mt-4 select-none">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-4 flex flex-col flex-grow justify-between">
                  <p className="text-sm font-bold text-gray-800 line-clamp-2  text-right leading-6">
                    {product.name}
                  </p>
                  <p className="text-xs font-bold text-gray-400 line-clamp-2  text-right leading-6">
                    {product.brand}
                  </p>

                  <div className="flex justify-between items-center border-t pt-3 mt-2">
                    <div className="flex flex-col text-right">
                      <span className="text-xs text-gray-400 mb-0.5">
                        قیمت کالا
                      </span>
                      <span className="text-emerald-600 font-extrabold text-sm sm:text-base">
                        {product.price.toLocaleString()}{' '}
                        <span className="text-xs font-normal">تومان</span>
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart({ ...product, quantity: 1 })}
                        className="p-2 bg-teal-50 hover:bg-teal-100 text-teal-600 rounded-xl transition"
                        title="افزودن سریع به سبد خرید"
                      >
                        <FaShoppingCart size={16} />
                      </button>

                      <Link
                        to={getProductLink(product)}
                        className="text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-xl transition flex items-center"
                      >
                        مشاهده
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
