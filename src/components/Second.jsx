import React from "react";
import StackedBarChart from "./StackedBarChar";
import { MdArrowDropDown } from "react-icons/md";
import PercentageChart from "./PercentageChart";

const Second = () => {
  return (
    <div className=" md:w-[40%] w-[100%] flex flex-col md:pt-[40px] md:pb-[40px] pt-0 pb-0 md:px-0 px-[35px]">
      <div className=" w-[100%] mb-[47px]">
        <div className="flex flex-col mb-[30px]">
          <span className="text-[#3737cd] font-[600] md:text-[14px] text-[16px]">
            Retirement Income
          </span>
          <span className="md:text-[22px] text-[24px] font-[600]">Starting year 2056</span>
        </div>
        <div className="w-[100%] flex flex-row flex-wrap justify-between">
          <div className="md:w-[30%] w-[100%] md:mb-0 mb-[20px]">
            <span className="md:text-[21px] text-[32px] font-[600]"> $300,000</span>
            <div className="w-[100%] border-b-[#3737cd] border-b-2 text-[12px] text-slate-500 font-[500] pb-[10px] pt-[5px]">
              My Goal
            </div>
          </div>

          <div className="md:w-[30%] w-[45%]">
            <span className="md:text-[21px] text-[26px] font-[600]">59%</span>
            <div className="w-[100%] border-b-[#3737cd] border-b-2 text-[12px] text-slate-500 font-[500] pb-[10px] pt-[5px]">
              My Goal
            </div>
          </div>

          <div className="md:w-[30%] w-[45%]">
            <span className="md:text-[21px] text-[26px] font-[600]"> K 300</span>
            <div className="w-[100%] border-b-[#3737cd] border-b-2 text-[12px] text-slate-500 font-[500] pb-[10px] pt-[5px]">
              My Goal
            </div>
          </div>
        </div>
      </div>

      <div className="md:mb-[30px] mb-[40px]">
        <div className="font-[500] text-[18px] mb-[12px]">
          Contributions Overtime
        </div>
        <StackedBarChart />
      </div>
      <div className="flex flex-col">
        <div className="font-[500] text-[20px]">
          How do I compare to my peers?{" "}
        </div>
        <div className="font-[400] text-[12px] md:mb-[10px] mb-[20px]">
          These numbers represent current goal achievement
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col md:mb-0 mb-[30px]">
            <div className="py-[10px] border-b-slate-200 border-b-2 font-[400] flex flex-row items-center text-[15px]">
              <span className="font-[500] mr-2 text-[15px]">Age:</span> Under 30{" "}
              <MdArrowDropDown />
            </div>
            <div className="py-[10px] border-b-slate-200 border-b-2 font-[400] flex flex-row items-center text-[15px]">
              <span className="font-[500] mr-2 text-[15px]">Salary:</span>{" "}
              K20-K30 <MdArrowDropDown />
            </div>
            <div className="py-[10px] border-b-slate-200 border-b-2 font-[400] flex flex-row  items-center text-[15px]">
              <span className="font-[500] mr-2 text-[15px]">Gender:</span> Male
              <MdArrowDropDown />
            </div>
          </div>
          <div className="flex flex-row justify-around md:w-[75%] w-[100%]">
            <PercentageChart percentage={78} title={"Average"}/>
            <PercentageChart percentage={95} title={"Top"}/>
            <PercentageChart percentage={59} title={"Me"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
