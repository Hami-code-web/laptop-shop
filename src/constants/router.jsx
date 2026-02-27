import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import SignUp from '../pages/signUp/signUp';
import Login from '../pages/login/login';
import Cart from '../pages/cart/cart';
import LaptopDetails from '../pages/productDetails/laptopDetails/laptopDetails';
import BestSellersDetails from '../pages/productDetails/bestSellersDetails/bestSellersDetails';
import DiscountProductDetails from '../pages/productDetails/discountProductDetails/discountProductDetails';
import NotFound from '../pages/notFound/notFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/laptop/:id/:slug',
    element: <LaptopDetails />,
  },
  {
    path: '/bestsellers/:id/:slug',
    element: <BestSellersDetails />,
  },
  {
    path: '/discountproducts/:id/:slug',
    element: <DiscountProductDetails />,
  },
  // notfound page should be in the last
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
