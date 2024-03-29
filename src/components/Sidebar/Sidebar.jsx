import React from 'react'
import logo from "../../assets/images/logo-removebg-preview.png"
import { RxDashboard } from "react-icons/rx";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";
import { LuMusic } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

function Sidebar() {
  return (
    <div className='text-center min-h-screen bg-[#1A2232] text-white'>
        <div className='p-3'>
            <img className='w-16 h-14 mt-2' src={logo} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center mt-12'>
        <RxDashboard size={25} className='m-3 my-4 cursor-pointer'/>
        <FaArrowTrendUp size={25} className='m-3 my-4 cursor-pointer'/>
        <FiMessageSquare size={25} className='m-3 my-4 cursor-pointer'/>
        <CiImageOn size={25} className='m-3 my-4 cursor-pointer'/>
        <LuMusic size={25} className='m-3 my-4 cursor-pointer'/>
        <CiBookmark size={25} className='m-3 my-4 cursor-pointer'/>
        <MdOutlineLogout size={25} className='m-3 my-4 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sidebar