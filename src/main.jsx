import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import router from './constants/router';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './constants/context/authContext';
import { CartProvider } from './constants/context/cartContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer
          toastClassName="rtl-toast"
          bodyClassName="rtl-toast-body"
          hideProgressBar={false}
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
