import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../constants/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../../constants/context/cartContext';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      console.log('Doc data:', docSnap.data());

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        toast.error('محصول یافت نشد');
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-600 mt-20">در حال بارگذاری...</p>
    );
  }

  return (
    <div dir="rtl">
      <Header />
      <Nav />

      <div className="max-w-6xl m-auto py-12 px-4 flex flex-col md:flex-row gap-10">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-[40%] h-[400px] object-cover rounded-xl shadow-md"
        />

        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-lg">برند: {product.brand}</p>
          <p className="text-gray-600 leading-7">{product.description}</p>
          <p className="text-2xl font-semibold">
            قیمت: {product.finalPrice.toLocaleString()} تومان
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium transition"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
