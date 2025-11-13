import React from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import HeroSection from '../../components/heroSection/heroSection';
import DiscountProducts from '../../components/discountProducts';
import BestSellersProducts from '../../components/bestSellersProducts';
import GamingLaptop from '../../components/gamingLaptop/gamingLaptop';

const Root = () => {
  return (
    <div dir="rtl" className="h-[200rem] font-font text-[#DCD7C9]">
      <Header />
      <Nav />
      <HeroSection />
      <DiscountProducts />
      <BestSellersProducts />
      <GamingLaptop />
    </div>
  );
};

export default Root;
