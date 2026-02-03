import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from './authContext';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setCart([]);
        return;
      }

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setCart(userData.cart || []);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [user]);

  useEffect(() => {
    const saveCart = async () => {
      if (!user) return;

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const existingData = userSnap.exists() ? userSnap.data() : {};

        await setDoc(
          userRef,
          {
            ...existingData,
            cart: cart,
            lastUpdated: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    };

    saveCart();
  }, [cart, user]);

  useEffect(() => {
    if (toastMessage) {
      toast[toastMessage.includes('وجود دارد') ? 'success' : 'warn'](
        toastMessage
      );
      setToastMessage(null);
    } else if (toastMessage) {
      toast[toastMessage.includes('موفقیت آمیز') ? 'warn' : 'succes'](
        toastMessage
      );
    }
  }, [toastMessage]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast.warn('این محصول در سبد خرید شما وجود دارد.');
        return prev;
      }
      toast.success('محصول با موفقیت به سبد خرید اضافه شد!');
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity >= 3) {
            setToastMessage('حداکثر ۳ عدد از هر محصول قابل افزودن است.');
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
