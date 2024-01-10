import React from "react";
import { IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaRegListAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TfiLayoutListLargeImage } from "react-icons/tfi";
import { VscBellDot } from "react-icons/vsc";
import { TbDeviceMobileShare } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="md:w-fit w-[100%]  md:h-[100%]  h-fit justify-between flex md:flex-col flex-row md:px-[5px] px-[20px] py-[10px] bg-white">
      <div className="md:h-[48%] h-fit md:w-auto w-[100%] flex md:flex-col flex-row md:justify-between justify-normal">
        <div className=" flex flex-col  md:visible invisible md:h-auto h-0 md:w-auto w-0">
          <div className=" my-[15px] rounded-md text-gray-500 cursor-pointer">
            <img src="/logo.jpg" width={25}></img>
          </div>

          <div className="p-[5px] text-gray-500 h-auto cursor-pointer text-[20px]">
            <IoSearch />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:w-auto w-[100%]  md:my-0 my-[3px] md:justify-normal justify-around">
          <div className="p-[6px] my-[10px] rounded-md bg-[#3737cd]  text-white cursor-pointer md:text-[20px] text-[24px]">
            <GoHome />
          </div>

          <div className="p-[5px] my-[10px] text-gray-500 cursor-pointer md:text-[20px] text-[24px]">
            <TfiLayoutListLargeImage />
          </div>
          <div className="p-[5px] my-[10px] text-gray-500 cursor-pointer md:text-[20px] text-[24px]">
            <FaRegListAlt />
          </div>
          <div className="p-[5px] my-[10px] text-gray-500 font-[1000] cursor-pointer md:text-[20px] text-[24px]">
            <IoPersonOutline />
          </div>
          <div className="md:p-[0] p-[5px] md:my-[0] my-[10px] text-gray-500 cursor-pointer visible md:invisible h-auto md:h-0 w-auto md:w-0 md:text-[20px] text-[24px]">
            <IoSearch />
          </div>
        </div>
      </div>
      <div className="md:visible invisible md:h-auto h-0 md:w-auto w-0">
        <div className="p-[5px] my-[15px] text-gray-500 cursor-pointer text-[20px]">
          <VscBellDot />
        </div>

        <div className="p-[5px] my-[15px] text-gray-500 cursor-pointer text-[20px]">
          <TbDeviceMobileShare />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
