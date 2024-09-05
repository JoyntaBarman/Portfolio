import React from 'react';
import { motion } from 'framer-motion';

const RightSide = () => {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="hidden lg:inline-flex w-10 fixed right-5 bottom-0 flex-col items-center justify-center gap-4 z-50"
      >
        <div className="flex flex-col items-center w-full">
          <a href="mailto:joyntabarman00001@gmail.com">
            <p className="text-designColor/80 hover:text-designColor duration-300 cursor-pointer transform rotate-90 w-96 tracking-wide">
              joyntabarman00001@gmail.com
            </p>
          </a>
        </div>
        <div className="h-32 w-[1px] bg-lightText"></div>
      </motion.div>
    </>
  );
};

export default RightSide;
