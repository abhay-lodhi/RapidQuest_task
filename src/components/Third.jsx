import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const Third = () => {
  return (
    <div className=" py-[40px] md:px-[30px] px-0 md:w-[23%] w-[100%] md:mb-0 mb-[100px]">
      <div className="w-[100%] mb-[30px] bg-[#f8f8fa] md:rounded-xl rounded-t-[60px] md:py-[20px] py-[35px] md:px-[20px] px-[35px]">
        <span className="font-[500] md:text-[18px] text-[22px]">Retirement Strategy</span>
        <div className="mt-[20px] w-[100%]">
          <span className="font-[500] md:text-[14px] text-[15px]">Employee Contribution</span>
          <div className="mt-[10px] flex flex-row items-center justify-between  w-[90%]">
            <Slider
              defaultValue={12}
              min={0}
              max={100}
              trackStyle={{ backgroundColor: "#3737cd" }}
              handleStyle={{
                borderColor: "#ffffff",
                backgroundColor: "#ffffff",
                opacity: "1",
                boxShadow: "0 0 0 1px #000000",
              }}
            />

            <span className="text-[14px] w-fit p-[4px] bg-white rounded-sm ml-[5px]">12%</span>
          </div>
        </div>

        <div className="mt-[18px] w-[100%] mb-[25px]">
          <span className="font-[500] text-[12px]">Retirement Age</span>
          <div className="mt-[10px] flex flex-row items-center justify-between w-[90%]">
            <Slider
              defaultValue={65}
              min={0}
              max={100}
              trackStyle={{ backgroundColor: "#3737cd" }}
              handleStyle={{
                borderColor: "#ffffff",
                backgroundColor: "#ffffff",
                opacity: "1",
                boxShadow: "0 0 0 1px #000000",
              }}
            />

            <span className="text-[14px] w-fit p-[4px] bg-white rounded-sm ml-[5px]">65</span>
          </div>
        </div>

        <div className="w-[100%] flex flex-row justify-between mb-[15px] pt-[25px] border-t-2 border-t-slate-300">
          <div className="font-[500] text-[14px]">Employer Contribution</div>
          <div className="font-[500] text-[14px]">8.4%</div>
        </div>

        <div className="w-[100%] flex flex-row justify-between mb-[20px]">
          <div className="font-[500] text-[14px]">Interest Rate</div>
          <div className="font-[500] text-[14px]">5%</div>
        </div>

        <button className="w-[100%] h-[40px] rounded-[10px] text-[14px] bg-[#3737cd] text-white flex justify-center items-center mb-[30px]">
          Update
        </button>
        <div className="text-[#3737cd] font-[500] text-[14px] w-[100%] text-center">
          View Help Docs {">"}
        </div>
      </div>

      <div className="flex flex-col px-[15px] border-l-2 border-l-slate-600">
        <span className="text-[14px] text-slate-800 font-[500]">
          Are You considering
        </span>
        <span className="text-[16px] font-[600] mb-[3px]">
          {" "}
          Housing Advance?
        </span>
        <span className="text-slate-600 text-[12px] mb-[8px]">
          Limited time reduced interest
        </span>
        <span className="text-[#3737cd] font-[500] text-[14px]">
          Learn more {">"}
        </span>
      </div>
    </div>
  );
};

export default Third;
