import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const arrayString = ['I am a JS developer.'];


  return (
    <Container id={'home'} className={'my-10 md:my-24'}>
      <div>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-designColor "
        >
          Hi, My name is
        </motion.h1>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl lg:text-6xl font-bold  flex flex-col space-y-4 mt-4 "
        >
          <span>Joynta Kumar Barman</span>
          <span className={'text-darkText'}>
            <Typewriter
              options={{
                strings: arrayString,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="my-8 lg:w-1/2 md:w-2/3 font-medium leading-7 text-base"
        >
          I am a MERN stack developer with 1+ year experience. I also have
          fundamental knowledge about MySQL Database. I create user-friendly,
          responsive, pixel-perfect web application with MERN. I love to take
          challenges, opportunities and learn from there.
        </motion.p>

        <motion.a
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          target="_blank"
          href="https://github.com/JoyntaBarman"
          className="px-4 py-2 border border-designColor rounded-lg hover:bg-hoverColor duration-200 text-designColor"
        >
          Check out my project!
        </motion.a>
      </div>


    </Container>
  );
};

export default Banner;
