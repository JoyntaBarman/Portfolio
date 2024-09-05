import React from 'react';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const SocialLinks = ({className}) => {
  const socialLinks = [
    {
      title: 'github',
      link: 'https://github.com/JoyntaBarman',
      icon: <FiGithub size={20} />,
      delay: 0.8,
    },
    {
      title: 'facebook',
      link: 'https://www.facebook.com/',
      icon: <FiFacebook size={20} />,
      delay: 0.7,
    },
  ];

  return (
    <div className={twMerge('flex flex-col gap-4 items-center', className)}>
      {socialLinks.map((item, index) => (
        <motion.a
        key={item?.title +'link'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: item?.delay }}
          className="w-10 h-10 flex justify-center items-center border border-designColor/10 rounded-full bg-textBg hover:bg-hoverColor duration-300 hover:border-zinc-500"
          href={item.link}
          target="_blank"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
