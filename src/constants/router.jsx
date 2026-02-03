import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import SignUp from '../pages/signUp/signUp';
import Login from '../pages/login/login';
import Cart from '../pages/cart/cart';

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
]);

export default router;
