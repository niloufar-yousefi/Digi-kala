import React, { useState } from 'react'
import { FaX } from "react-icons/fa6";

export default function BasketSub({ data, visibility, myABasketProduct2, myClose }) {



  return (
    <div className={`duration-[1s] w-full h-[100vh] z-[999]  bg-[#00000009]   top-0 left-0  ${visibility ? 'hidden' : 'fixed'}`}>
      <div className="w-full h-full flex justify-center items-center ">
        <div className='w-[600px] h-[400px] bg-white rounded-lg shadow-sm flex flex-wrap *:w-full *:py-5 *:px-5'>

          <section className="h-[10%]  ">
            <span onClick={myClose} className='cursor-pointer'><FaX className='text-slate-500 duration-75 hover:text-slate-700 pointer-events-none' /></span>
          </section>

          <section className="h-[90%] flex *:w-[50%] *:h-full">
            <div className='p-5 '>
              <img className='w-full h-full object-contain' src={data.image} alt="" />
            </div>

            <div className=" *:w-full flex flex-wrap content-around p-5">
              <p className='text-slate-500 text-center'>{data.title}</p>
              <p className='text-slate-500 text-center'>قیمت: {data.price} به ریال  </p>
              <div data-num= {1}  data-status='on' onClick={(event) => { myABasketProduct2(data.image, data.title, data.price, event, 1, data.id) }} className='flex justify-center test cursor-pointer'>
                <button className='w-[110px] rounded-md h-[40px] bg-red-700 text-slate-50 duration-75 hover:bg-red-800 pointer-events-none' type="button">سبد خرید</button>
              </div>
            </div>

          </section>


        </div>
      </div>

    </div>
  )
}
