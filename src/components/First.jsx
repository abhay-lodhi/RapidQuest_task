import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const First = () => {
  return (
    <div className="md:py-[40px] py-[60px] md:mt-0 mt-[20px] md:px-[55px] px-[25px] md:w-[90%] w-[100%] md:bg-[#f8f8fa] mx-[5px]">
      <div className="flex flex-row  items-center md:mb-[30px] mb-[45px]">
        <img
          src="/pic.jpg"
          className="rounded-[100%] object-cover w-[70px] h-[70px]"
        ></img>
        <div className="flex flex-col mx-[15px]">
          <span className="text-[28px] font-[600]">Hi Mike,</span>
          <span className="text-[12px] text-slate-700 font-[500] ml-[2px]">
            welcome back
          </span>
        </div>
      </div>
      <div className="flex flex-col md:px-0 px-[28px] md:py-0 py-[32px] rounded-3xl md:bg-inherit bg-[#f8f8fa] md:justify-normal justify-center md:items-start items-center  ">
        <div className="md:text-[17px] text-[22px] font-[500] md:mb-[10px] mb-[0px] w-[100%]">
          Today
        </div>
        <div className="flex flex-col md:mb-[15px] mb-[30px] w-[100%]">
          <span className="md:text-[24px] text-[42px] font-[700] ">
            $ 19,892
          </span>
          <span className="md:text-[12px] text-[16px] text-slate-500 font-[500] ml-[2px]">
            Account Balance
          </span>
        </div>
        <div className="flex md:flex-col flex-row md:justify-normal justify-between w-[80%] self-start md:mb-0 mb-[18px] ">
          <div className="flex flex-col mb-[15px] ">
            <span className="md:text-[14px] text-[20px] md:font-[600] font-[700]">
              $4,000
            </span>
            <span className="flex flex-row md:text-[12px] text-[16px] text-slate-500 font-[500] ml-[2px]">
              Year-to-Date{" "}
              <div className="md:visible invisible md:w-auto w-0 md:h-auto h-0 md:ml-[3px]"> Contribution</div>
            </span>
          </div>

          <div className="flex flex-col mb-[15px]">
            <span className="md:text-[14px] text-[20px] md:font-[600] font-[700]">
              $1,892
            </span>
            <span className="md:text-[12px] text-[16px] text-slate-500 font-[500] ml-[2px]">
              Total Interest
            </span>
          </div>
        </div>

        <button className="md:w-[110px] w-[100%] md:h-[40px] h-[50px] rounded-[10px] md:text-[14px] text-[22px] bg-[#3737cd] text-white flex justify-center items-center">
          I want to <MdArrowDropDown />
        </button>
      </div>
      <div className="my-[40px] md:px-0 px-[28px] md:py-0 py-[32px] rounded-3xl md:bg-inherit bg-[#f8f8fa] md:justify-normal justify-center md:items-start items-center">
        <div className="md:text-[17px] text-[24px]  md:font-[500] font-[600] md:mb-[10px] mb-[20px]">
          Recent Transactions
        </div>
        <div className="flex flex-col md:py-[10px] py-[15px] border-b-2">
          <span className="md:text-[12px] text-[14px] text-slate-500 font-[500] ml-[2px]">
            {" "}
            2020-08-07
          </span>
          <span className="md:text-[12px] text-[16px] font-[500] ml-[2px]">
            Withrawl Transfer to Bank- XXXX
          </span>
        </div>
        <div className="flex flex-col md:py-[10px] py-[15px] border-b-2">
          <span className="md:text-[12px] text-[14px] text-slate-500 font-[500] ml-[2px]">
            {" "}
            2020-08-07
          </span>
          <span className="md:text-[12px] text-[16px] font-[500] ml-[2px]">
            Withrawl Transfer to Bank- XXXX
          </span>
        </div>
        <div className="flex flex-col md:py-[10px] py-[15px] border-b-2">
          <span className="md:text-[12px] text-[14px] text-slate-500 font-[500] ml-[2px]">
            {" "}
            2020-08-07
          </span>
          <span className="md:text-[12px] text-[16px] font-[500] ml-[2px]">
            Withrawl Transfer to Bank- XXXX
          </span>
        </div>
      </div>
    </div>
  );
};

export default First;
