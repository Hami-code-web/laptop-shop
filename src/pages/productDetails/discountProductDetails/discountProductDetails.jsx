import { Navigate, useParams } from 'react-router-dom';
import DiscountProductDetail from '../../../data/discountProducts.json';
import Header from '../../../components/header/header';
import Nav from '../../../components/nav/nav';
import Footer from '../../../components/footer/footer';
import { GoHome } from 'react-icons/go';
import { FaAngleRight } from 'react-icons/fa';

const DiscountProductDetails = () => {
  const { id } = useParams();

  const allProducts = DiscountProductDetail.products;
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen">
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
                <p className="text-gray-800 text-xl tracking-wide font-bold">
                  {product.name}
                </p>
                <p className="text-gray-300 mt-3 text-sm font-light">
                  {product.enName}
                </p>
              </div>
              <hr class="border-t border-gray-200"></hr>
              <p>{product.colors}</p>
            </div>
            {/* Image Side */}
            <div className="relative col-span-1 p-6 md:p-10 flex flex-col items-center justify-center min-h-[320px]">
              <img
                src={product.img}
                alt={product.brand}
                className="relative z-10 w-full max-w-[300px] md:max-w-[360px] object-contain "
              />
              {/* more images */}
              <div className=" flex justify-center gap-3 rounded-4xl w-20 mt-3 ">
                <img
                  src={product.images[0]}
                  className="rounded-2xl border-2 border-gray-300"
                  alt={product.name}
                />
                <img
                  src={product.images[1]}
                  className="rounded-2xl border-2 border-gray-300"
                  alt={product.name}
                />
                <img
                  src={product.images[2]}
                  className="rounded-2xl border-2 border-gray-300"
                  alt={product.name}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiscountProductDetails;
