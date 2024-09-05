import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { bannerImg } from '../assets/images';
import { FaCode } from 'react-icons/fa';

const About = () => {
  const technologis = [
    { title: 'JavaScript(ES6)', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { title: 'nodeJS', link: 'https://nodejs.org/en' },
    { title: 'TailwindCSS', link: 'https://tailwindcss.com/' },
    { title: 'ReactJS', link: 'https://react.dev/' },
    { title: 'MongoDB', link: 'https://www.mongodb.com/' },
    { title: 'ExpressJS', link: 'https://expressjs.com/' },
    { title: 'MySQL', link: 'https://www.mysql.com/' },
  ];

  return (
    <Container id={'about'} className={'py-10 md:py-24'}>
      <SectionTitle titleNo={'01'} title={'About me'} />
      <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20">
        <div className="flex flex-col gap-4 max-w-[650px]">
          <p>
            Hello! My name is Joynta Kumar Barman. I enjoy creating web
            application. My interest in web development since 2022 when i learn
            about HTML, CSS and JavaScript.{' '}
          </p>

          <p>
            I passed Diploma in Engineering in Computer science and
            technology(CST) this year.
          </p>
          <p>Here are some technology I have been working with recently: </p>
          <div className="max-w-[450px] grid grid-cols-2 gap-2">
            {technologis.map((item) => (
              <a
              key={item?.title}
                className="opacity-80 hover:opacity-100 group flex gap-1 items-center duration-200"
                href={item.link}
                target="_blank"
              >
                <FaCode
                  className="
                text-designColor/80 opacity-80 group-hover:opacity-100 duration-200 "
                />
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 group">
          <div className="relative w-2/3 lg:w-full mx-auto">
            <div className=" w-full h-full absolute top-4 left-4 border-2 border-designColor rounded-lg z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500" />
            <div className="relative z-10 bg-white rounded-lg ">
              <img
                className="w-full object-cover opacity-95 group-hover:opacity-100 duration-500"
                src={bannerImg}
                alt="ProfileImage"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
