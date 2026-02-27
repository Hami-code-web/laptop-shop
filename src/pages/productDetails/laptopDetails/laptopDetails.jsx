import { Navigate, useParams } from 'react-router-dom';
import GamingLaptop from '../../../data/gamingLaptops.json';

const LaptopDetails = () => {
  const { id } = useParams();

  const allProducts = GamingLaptop.products;

  const product = allProducts.find((p) => p.id === id);

  // console.log(product);
  if (!product) return <Navigate to="/404" replace />;

  return (
    <div className="">
      <img src={product.images[0]} alt="" />
      <img src={product.images[1]} alt="" />
      <img src={product.images[2]} alt="" />
    </div>
  );
};

export default LaptopDetails;
