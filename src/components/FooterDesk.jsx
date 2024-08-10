import React from 'react'
import myfarsilogo from './../assets/img/digi.farsi.svg'
import { IoMdDoneAll } from "react-icons/io";
import { FaVanShuttle } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaTh } from "react-icons/fa";


export default function FooterDesk({myLeft}) {
  return (
    <div className=' flex-wrap w-full px-10 lg:px-20 *:font-primary h-[300px]  *:w-full '>
      <Part1 />
      <Part2 />
      <Part3 myLeft={myLeft}/>
    </div>
  )
}

function Part1() {
  return (
    <div className=' h-[40%] *:text-slate-700'>
      <div className=" ">
        <div className='  '><img src={myfarsilogo} alt="" className=' ' /></div>
        <p className='mt-8 lg:mt-4'>7 روزه هفته-24 ساعته پاسخگوی شما هستیم</p>
      </div>
    </div>
  )
}

function Part2() {
  return (
    <div className='hidden lg:block h-[60%] *:text-slate-700'>

      <div className="w-full h-full flex flex-wrap *:w-[20%] *:h-full justify-between items-center">

        <div className="hover:scale-105 duration-75 ">
          <div className='flex justify-center flex-wrap h-[50%]  items-center'>
            <IoMdDoneAll className='text-5xl ' />
          </div>
          <p className='w-full h-[50%]  text-center'>ضمانت اصالت کالا</p>
        </div>

        <div className="hover:scale-105 duration-75">
          <div className='flex justify-center flex-wrap h-[50%]  items-center'>
            <FaVanShuttle className='text-5xl ' />
          </div>
          <p className='w-full h-[50%]  text-center'>7 روز ضمانت بازگشت کالا</p>
        </div>

        <div className="hover:scale-105 duration-75">
          <div className='flex justify-center flex-wrap h-[50%]  items-center'>
            <FaHeadset className='text-5xl ' />
          </div>
          <p className='w-full h-[50%]  text-center'>پشتیبانی 24 ساعته</p>
        </div>

        <div className="hover:scale-105 duration-75">
          <div className='flex justify-center flex-wrap h-[50%]  items-center'>
            <FaCreditCard className='text-5xl ' />
          </div>
          <p className='w-full h-[50%]  text-center'>امکان پرداخت درب منزل</p>
        </div>

      </div>
    </div>
  )
}


function Part3({myLeft}) {
  return (
    <div className="*:font-primary flex flex-wrap lg:hidden h-[60%] w-full  *:w-[20%] *:h-full justify-between items-center">

      <div className="*:text-slate-700">
        <div className='flex justify-center flex-wrap h-[50%] items-center'>
          <FaHome className='text-3xl ' />
        </div>
        <p className='w-full h-[50%]  text-center'>خانه</p>
      </div>

      <div className="text-slate-400">
      <div className='flex justify-center flex-wrap h-[50%] items-center'>
          <FaTh  className='text-3xl ' />
        </div>
        <p className='w-full h-[50%]  text-center'>دسته بندی</p>
      </div>

      <div onClick={myLeft} className="text-slate-400 cursor-pointer ">
      <div  className='flex justify-center flex-wrap  h-[50%] items-center  duration-75 hover:text-slate-700'>
          <FaShoppingCart className='text-3xl pointer-events-none' />
        </div>
        <p className='w-full h-[50%]  text-center pointer-events-none'>سبد خرید</p>
      </div>

      <div className="text-slate-400">
      <div className='flex justify-center flex-wrap h-[50%] items-center'>
          <FaUserAlt className='text-3xl ' />
        </div>
        <p className='w-full h-[50%]  text-center'>دیجی کالا</p>
      </div>

    </div>
  )
}