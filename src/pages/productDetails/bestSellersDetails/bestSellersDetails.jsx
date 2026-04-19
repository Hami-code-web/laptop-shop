import { Navigate, useParams } from 'react-router-dom';
import BestSellersDetail from '../../../data/bestSellersProducts.json';
import Header from '../../../components/header/header';
import Nav from '../../../components/nav/nav';
import Footer from '../../../components/footer/footer';
import { GoHome } from 'react-icons/go';
import { FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { color } from 'framer-motion';
import { Omega } from 'lucide-react';

const BestSellersDetails = () => {
  const { id } = useParams();

  const allProducts = BestSellersDetail.products;
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <Navigate to="/404" replace />;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.hex);
  const [selectedImage, setSelectedImage] = useState(product.img);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Nav />

      <main className="max-w-[110rem] mx-auto px-4 md:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex justify-end items-center mt-3 mx-2 font-normal text-gray-500 text-[.9rem]">
          {product.brandName}
          <FaAngleRight className="rotate-180 m-2" />
          {product.category}
          <FaAngleRight className="rotate-180 m-2" />
          <p>محصولات پرفروش</p>
          <FaAngleRight className="rotate-180 m-2" />
          <div className="flex items-center gap-1">
            <p>خانه</p>
            <GoHome className="items-center" size={16} />
          </div>
        </div>
        {/* Product Details Card */}
        <section className=" rounded-2xl shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid col-span-2">
              <div className=" flex items-end my-4 flex-col ">
                <p
                  dir="rtl"
                  className="text-gray-800 text-xl tracking-wide font-bold"
                >
                  {product.name}
                </p>
                <p className="text-gray-300 mt-3 mb-3 text-sm font-light">
                  {product.enName}
                </p>
                <hr class="border-t w-full border-gray-300"></hr>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <div
                      className="h-3.5 w-3.5 rounded-full border-gray-300 border-1"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                    <p className="my-4 text-lg font-bold">{`رنگ : ${product.colors.find((color) => color.hex === selectedColor)?.name}`}</p>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <div
                        key={color.hex}
                        onClick={() => setSelectedColor(color.hex)}
                        className={`size-8 rounded-full flex items-center justify-center cursor-pointer ${
                          selectedColor === color.hex
                            ? 'ring-4 ring-[#19BFD3]'
                            : 'ring-1 ring-gray-300'
                        }`}
                        title={color.name}
                      >
                        <div
                          className="size-7 rounded-full"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="my-4 mt-6">
                    <p className="font-bold">ویژگی‌ها</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Side */}
            <div className="relative col-span-1 p-6 md:p-10 flex flex-col items-center justify-center min-h-[320px]">
              <img
                src={selectedImage}
                alt={product.brand}
                className="mix-blend-multiply relative z-10 w-full max-w-[300px] md:max-w-[360px] object-contain "
              />
              {/* more images */}
              <div className=" flex justify-center gap-3 rounded-4xl w-20 mt-3 ">
                {product.images.map((image) => (
                  <>
                    <img
                      onClick={() => setSelectedImage(image)}
                      key={image}
                      src={image}
                      className={`${selectedImage == image ? 'border-teal-600' : 'border-gray-300'} cursor-pointer rounded-2xl border-2`}
                      alt={product.name}
                    />
                  </>
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
