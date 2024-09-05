import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollBtn = () => {
  const [ShowScrollBtn, setShowScrollBtn] = useState(false);

  const handleScrollTop = (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollBtnAppearance = () => {
      scrollY > 300 ? setShowScrollBtn(true) : setShowScrollBtn(false);
    };

    addEventListener('scroll', handleScrollBtnAppearance);

    return () => {
      removeEventListener('scroll', handleScrollBtnAppearance);
    };
  }, []);

  return (
    
    <div
      onClick={handleScrollTop}
      className={`fixed right-20 bottom-10 w-12 h-12 bg-gray-800 rounded-full flex justify-center z-50 items-center text-lightText/80 hover:text-designColor hover:bg-black duration-300 cursor-pointer border border-designColor ${
        ShowScrollBtn ? 'block' : 'hidden'
      }`}
    >
      <FiArrowUp size={24} />
    </div>
  );
};

export default ScrollBtn;
