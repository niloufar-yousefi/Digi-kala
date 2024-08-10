import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
export default function Cart({myCart,cart}) {
 
  
  return (
    <div className='hidden lg:flex w-[5%] relative  '>   
      <FaCartShopping onClick={myCart} className='text-slate-800 text-[40px]  re cursor-pointer absolute left-0 top-[30%] hover:text-slate-900 duration-75' />
      <span className='absolute w-[25px] h-[25px] rounded-full bg-red-700  left-[-10px] top-[17%] flex justify-center items-center'>
        <span className='text-slate-50'>{cart.length}</span>       
      </span>
    </div>
  )
}

