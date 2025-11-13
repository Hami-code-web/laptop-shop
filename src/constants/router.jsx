import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import SignUp from '../pages/signUp/signUp';
import Login from '../pages/login/login';
import Cart from '../pages/cart/cart';
import ProductDetails from '../pages/productDetails/productDetails';

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
    path: '/product/:id',
    element: <ProductDetails />,
  },
]);

export default router;
