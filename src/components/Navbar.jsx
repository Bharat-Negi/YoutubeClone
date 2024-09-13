import React from "react";
import Avatar from 'react-avatar';

import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/image/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center sticky top-0 w-[100%] px-6 py-2 bg-white">
      <div className="flex items-center space-x-2">
        <FiMenu className="cursor-pointer" />
        <img src={logo} alt="logo" className="w-16 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="search" className="" />
        </div>
        <button className="px-4 py-2 border rounded-r-full bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <IoMic
          size={"40px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar alt="profile" size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
