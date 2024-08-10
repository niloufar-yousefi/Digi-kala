import React from 'react'
import { IoIosLaptop } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";
import { IoMdHeadset } from "react-icons/io";
import { FaCompress } from "react-icons/fa";

export default function Fillter({myFilter,myData}) {
 
  return (
    <div className='my-10 hidden lg:flex w-full px-10 lg:px-20 h-[200px] *:font-primary  flex-wrap *:w-[15%] *:h-full justify-between *:text-slate-600 *:rounded-lg'>

      <div data-h = 'لپ تاپ و الترابوک' onClick={myFilter} className="bg-[#CCE0EC] flex flex-wrap *:w-full cursor-pointer hover:scale-105 duration-75">
        <div className='h-[70%] flex justify-center items-center pointer-events-none'><IoIosLaptop className='text-5xl' /></div>
        <p className='h-[30%] text-center text-md pointer-events-none'>لپ تاپ</p>
      </div>

      <div data-h = 'گوشی موبایل' onClick={myFilter} className="bg-[#D5EBDD] flex flex-wrap *:w-full cursor-pointer hover:scale-105 duration-75">
        <div className='h-[70%] flex justify-center  items-center pointer-events-none'><IoIosPhonePortrait className='text-5xl' /></div>
        <p className='h-[30%] text-center text-md pointer-events-none'>موبایل</p>
      </div>

      <div data-h = 'ساعت هوشمند' onClick={myFilter} className="bg-[#F0DBD5] flex flex-wrap *:w-full cursor-pointer hover:scale-105 duration-75">
        <div className='h-[70%] flex justify-center items-center pointer-events-none'><IoMdWatch className='text-5xl' /></div>
        <p className='h-[30%] text-center text-md pointer-events-none'>ساعت هوشمند</p>
      </div>

      <div data-h = 'کیف و کاور گوشی' onClick={myFilter} className="bg-[#D8D8F4] flex flex-wrap *:w-full cursor-pointer hover:scale-105 duration-75">
        <div className='h-[70%] flex justify-center items-center pointer-events-none'><IoMdHeadset className='text-5xl' /></div>
        <p className='h-[30%] text-center text-md pointer-events-none'>لوازم جانبی</p>
      </div>

      <div data-h = ' ' onClick={myData} className="bg-[rgb(234,225,184)] flex flex-wrap *:w-full cursor-pointer hover:scale-105 duration-75">
        <div className='h-[70%] flex justify-center items-center pointer-events-none'><FaCompress className='text-5xl' /></div>
        <p className='h-[30%] text-center text-md pointer-events-none'>همه موارد</p>
      </div>

    </div>
  )
}

