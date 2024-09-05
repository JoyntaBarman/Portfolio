import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const LeftSide = () => {




  return (
    <>
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{delay: .6}}
      className="hidden lg:inline-flex fixed left-5 bottom-0 flex-col items-center justify-center gap-4">
        <SocialLinks/>
        <div className="h-32 w-[1px] bg-lightText"></div>
      </motion.div>
    </>
  );
};

export default LeftSide;
