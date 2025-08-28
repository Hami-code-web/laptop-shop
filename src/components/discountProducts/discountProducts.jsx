import React from 'react';
import DiscountProductsData from '../../data/discountProducts.json';
import { IoIosArrowDown } from 'react-icons/io';

const DiscountProducts = () => {
  return (
    <div className="bg-teal-100 text-teal-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-bold">محصولات فروش ویژه</p>
          <div className="cursor-pointer flex items-center gap-1 hover:text-teal-600 transition-colors">
            <p className="text-sm font-semibold">مشاهده همه</p>
            <IoIosArrowDown className="rotate-90" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DiscountProductsData.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <img src={product.img} alt="" />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-teal-700">
                    {product.finalPrice.toLocaleString()} تومان
                  </span>
                  {product.discount > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {product.discount}% تخفیف
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {product.inStock ? 'موجود' : 'ناموجود'}
                  </span>
                  <span className="text-yellow-600">★ {product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
