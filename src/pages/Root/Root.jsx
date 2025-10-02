import React from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import HeroSection from '../../components/heroSection/heroSection';
import DiscountProducts from '../../components/discountProducts';

const Root = () => {
  return (
    <div dir="rtl" className="h-[200rem] font-font text-[#DCD7C9]">
      <Header />
      <Nav />
      <HeroSection />
      <DiscountProducts />
    </div>
  );
};

export default Root;
