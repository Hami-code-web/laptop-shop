import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-[#fff] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
