import React, { useRef, useState } from "react";
import { logo } from "../assets/images";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  const navigation = [
    { title: "Home", link: "home", delay: 0 },
    { title: "About", link: "about", delay: 0.1 },
    { title: "Experience", link: "experience", delay: 0.2 },
    { title: "Project", link: "project", delay: 0.3 },
    { title: "Contact", link: "contact", delay: 0.4 },
  ];

  const handleShowMenu = () => {
    setShowMenu((pre) => !pre);
  };

  const handleOutsideCloseClick = (e) => {
    if (e?.target?.contains(ref?.current)) {
      handleShowMenu();
    }
  };

  return (
    <div className="shadow-lg shadow-designColor/10 sticky top-0 z-50">
      <div className="h-20  max-w-screen-xl mx-auto flex items-center justify-between px-4 sticky top-0 bg-primaryColor z-50">
        <img
          src={logo}
          alt="Logo"
          className="w-14 opacity-75 hover:opacity-100 duration-200 cursor-pointer"
        />
        <div className="hidden md:inline-flex items-center gap-4">
          <div className="flex justify-end gap-6">
            {navigation.map((item) => (
              <motion.p
                key={item?.title}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item?.delay, duration: 0.5 }}
              >
                <Link
                  smooth={true}
                  duration={500}
                  to={item.link}
                  offset={-80}
                  className="hover:text-designColor cursor-pointer duration-300"
                >
                  <button>{item?.title}</button>
                </Link>
              </motion.p>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            href="#"
            target="_blank"
            className="ml-4 px-4 py-2 rounded-lg border border-designColor hover:bg-hoverColor duration-300 hover:text-designColor"
          >
            Resume
          </motion.a>
        </div>
        <div className="md:hidden inline-flex items-center gap-4 group">
          <div
            onClick={handleShowMenu}
            className=" w-6 h-5 flex flex-col justify-between items-center overflow-hidden cursor-pointer"
          >
            <span className="w-full h-[2px] bg-designColor/80 inline-flex rounded-full duration-300 translate-x-0 group-hover:translate-x-2"></span>

            <span className="w-full h-[2px] bg-designColor/80 inline-flex rounded-full duration-300 translate-x-3 group-hover:translate-x-0"></span>

            <span className="w-full h-[2px] bg-designColor/80 inline-flex rounded-full duration-300 translate-x-1 group-hover:translate-x-2"></span>
          </div>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleOutsideCloseClick}
            className="absolute top-0 right-0 bg-black/50 w-full h-screen flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="bg-textBg w-3/5 h-screen p-4 relative flex flex-col items-center"
            >
              <IoClose
                onClick={handleShowMenu}
                className="text-3xl absolute cursor-pointer top-5 right-5 text-designColor/80 hover:text-designColor duration-300"
              />
              <ul className="flex flex-col items-center gap-2 mt-16">
                {navigation.map((item) => (
                  <motion.li
                    key={item?.title}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: item?.delay, duration: 0.5 }}
                  >
                    <Link
                      to={item?.link}
                      smooth={true}
                      delay={0.1}
                      offset={-80}
                      // duration={500}
                      className="cursor-pointer w-1/2 text-center hover:text-designColor/80 duration-300 py-2 tracking-wide"
                    >
                      {item?.title}
                    </Link>
                  </motion.li>
                ))}

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="px-4 py-2 border border-designColor rounded-lg mt-5 hover:bg-hoverColor duration-300 text-designColor"
                  href="../assets/pdf/resume.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </motion.a>
              </ul>
              <SocialLinks className="flex flex-row-reverse gap-4 justify-center items-center mt-8" />

              <motion.a
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center text-sm mt-5 text-lightText/60 hover:text-lightText duration-300 cursor-pointer tracking-wide"
                href="mailto:joyntabarman00001@gmail.com"
              >
                joyntabarman00001@gmail.com
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
