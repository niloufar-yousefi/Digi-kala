import React from 'react'
import { FaShareNodes } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Share() {
  return (
    <div className='flex lg:hidden w-[15%]  items-center text-slate-800'>
        <div className='w-[50%]'><FaShareNodes className='text-2xl ' /></div>
        <div className='w-[50%]  flex justify-end'><FaSearch className='text-2xl '/></div>     
    
    </div>
  )
}
