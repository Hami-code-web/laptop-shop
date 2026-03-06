import { Navigate, useParams } from 'react-router-dom';
import DiscountProductDetail from '../../../data/discountProducts.json';

const DiscountProductDetails = () => {
  const { id } = useParams();

  const allProducts = DiscountProductDetail.products;

  const product = allProducts.find((p) => p.id === id);

  if (!product) return <Navigate to="/404" replace />;

  return (
    <div className="">
      {product.name}
      <img src={product.images[0]} alt="" />
      <img src={product.images[1]} alt="" />
      <img src={product.images[2]} alt="" />
    </div>
  );
};

export default DiscountProductDetails;
