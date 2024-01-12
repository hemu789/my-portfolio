import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {/* time period */}
          {experiences.map((experience, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectItemIndex(index);
              }}
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                    : "text-white"
                }
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-5">
            {/* content */}
            <h1 className="text-secondary text-2xl">
              {experiences[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {experiences[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences
