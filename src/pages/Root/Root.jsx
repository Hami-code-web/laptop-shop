import React from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import HeroSection from '../../components/heroSection/heroSection';
import DiscountProducts from '../../components/discountProducts';
import BestSellersProducts from '../../components/bestSellersProducts';
import GamingLaptop from '../../components/gamingLaptop/gamingLaptop';
import BannerGrid from '../../components/banner/bannerGrid';
const Root = () => {
  return (
    <div dir="rtl" className=" font-font text-[#DCD7C9]">
      <Header />
      <Nav />
      <HeroSection />
      <DiscountProducts />
      <BannerGrid />
      <BestSellersProducts />
      <GamingLaptop />
    </div>
  );
};

export default Root;
