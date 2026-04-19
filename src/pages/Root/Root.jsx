import React from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import HeroSection from '../../components/heroSection/heroSection';
import DiscountProducts from '../../components/discountProducts';
import BestSellersProducts from '../../components/bestSellersProducts';
import GamingLaptop from '../../components/gamingLaptop/gamingLaptop';
import BannerGrid from '../../components/banner/bannerGrid';
import HalfBanner from '../../components/halfBanner/halfBanner';
import Categories from '../../components/categories';
import Magazine from '../../components/magazine/magazine';
import Footer from '../../components/footer/footer';

const Root = () => {
  return (
    <div dir="rtl" className=" font-font text-[#fff] bg-[#eff3fc]">
      <Header />
      <Nav />
      <HeroSection />
      <DiscountProducts />
      <BannerGrid />
      <BestSellersProducts />
      <HalfBanner />
      <GamingLaptop />
      <Categories />
      <Magazine />
      <Footer />
    </div>
  );
};

export default Root;
