import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { projectOne } from "../assets/images";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constant";

const Project = () => {
  return (
    <Container id="project" className={"py-10 lg:py-24"}>
      <SectionTitle title={"Some things I have Build"} titleNo={"03"} />
      <div className="mt-10 space-y-10">
        {/* project one */}
        {/* <div className="flex flex-col lg:flex-row gap-8">
          <div className=' w-full lg:w-1/2 max-h-[400x]'>
            <a
              className="w-full lg:w-1/2 h-full object-cover relative group"
              href="https://donation-campain.vercel.app/"
              target="_blank"
            >
              <img
                className="w-full h-full object-cover rounded-lg aspect-video"
                src={projectOne}
                alt="Project"
              />
              <div className="absolute top-0 left-0 bg-designColor/10 w-full h-full rounded-lg group-hover:opacity-0 duration-300" />
            </a>
          </div>

          <div className="w-full lg:w-1/2 text-right lg:-ml-16 flex flex-col items-end gap-4 lg:gap-0 justify-between">
            <p className="text-designColor">
              Feature Project
              <span className="text-2xl font-medium tracking-wide block text-lightText">
                Donation-Campaign
              </span>
            </p>

            <div className="p-6 bg-textBg rounded-lg z-10 text-right">
              Donation Campaign is a simple project. You can search type that you want donate. And you can see donation Statistics.
            </div>
            <ul className="flex gap-4 ">
              <li>ReactJs</li>
              <li>JavaScript</li>
              <li>Tailwind Css</li>
              <li>Vercel Deployment</li>
            </ul>

            <div className="hover:text-designColor cursor-pointer">
              <FaExternalLinkAlt />
            </div>
          </div>
        </div> */}

        {projects.map((item) => (
          <div
            className={`flex flex-col lg:flex-row gap-8 ${
              item?.id % 2 === 0 && "lg:flex-row-reverse"
            }`}
          >
            <div className=" w-full lg:w-1/2 ">
              <a
                className="w-full lg:w-1/2  object-cover relative group"
                href={item?.link}
                target="_blank"
              >
                <img
                  className="w-full  object-cover rounded-lg aspect-video"
                  src={item?.image}
                  alt="Project"
                />
                <div className="absolute top-0 left-0 bg-designColor/10 w-full h-full rounded-lg group-hover:opacity-0 duration-300" />
              </a>
            </div>

            <div
              className={`w-full lg:w-1/2   flex flex-col ${
                item?.rightImage ? "items-start lg:-mr-20" : "items-end text-right lg:-ml-20"
              }  gap-4 lg:gap-0 justify-between`}
            >
              <p className="text-designColor">
                Feature Project
                <span className="text-2xl font-medium tracking-wide block text-lightText">
                  {item?.name}
                </span>
              </p>

              <div className={`p-6 bg-textBg rounded-lg z-10 ${!item?.rightImage? 'text-right': ''}`}>
                {item?.description}
              </div>
              <ul className="flex justify-between items-center flex-wrap gap-4 text-center">
                {item?.library.map((lib) => (
                  <li className="cursor-pointer hover:text-designColor duration-200 ml-auto">
                    {lib}
                  </li>
                ))}
              </ul>

              <a
                href={item?.link}
                target="blank"
                className="hover:text-designColor cursor-pointer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
