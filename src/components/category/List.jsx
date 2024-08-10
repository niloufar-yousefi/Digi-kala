import React from 'react'
import { FaAlignJustify } from "react-icons/fa6";

export default function List() {
  return (
    <div className='*:h-full *:flex *:items-center w-[15%]  cursor-pointer'>
      <FaAlignJustify className='text-xl' />
      <p className='text-xs 2xl:text-sm mr-2 font-primary '>دسته بندی کالاها</p>
    </div>
  )
}
