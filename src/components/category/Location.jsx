import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

export default function Location() {
  return (
    <div className='w-[20%] *:h-full *:flex *:items-center flex justify-end' >    
      <FaLocationDot className='ml-1'/>
      <p className='font-primary text-xs '>لطفاً شهر  خود را انتخاب کنید</p>
    </div>
  )
}
