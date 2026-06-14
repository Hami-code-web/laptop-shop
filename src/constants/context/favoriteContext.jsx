import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from './authContext';

const favoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setFavorites([]);
        return;
      }
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setFavorites(userData.favorites || []);
        } else {
          setFavorites([]);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [user]);

  useEffect(() => {
    const saveFavorites = async () => {
      if (!user) return;
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const existingData = userSnap.exists() ? userSnap.data() : {};

        await setDoc(
          userRef,
          {
            ...existingData,
            favorites: favorites,
            lastUpdated: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    };

    saveFavorites();
  }, [favorites, user]);

  const isProductLiked = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  const toggleFavorite = (product) => {
    if (!user) {
      toast.warn('برای افزودن به علاقه‌مندی‌ها ابتدا باید وارد حساب خود شوید.');
      return;
    }

    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        toast.info('این کالا از لیست علاقه‌مندی‌ها حذف شد.');
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast.success('این کالا به لیست علاقه‌مندی‌ها اضافه شد!');
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.finalPrice || product.price,
            img: product.img,
          },
        ];
      }
    });
  };

  const clearFavorites = () => setFavorites([]);

  return (
    <favoriteContext.Provider
      value={{ favorites, isProductLiked, toggleFavorite, clearFavorites }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(favoriteContext);
