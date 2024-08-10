import React from 'react'
import { FaPercent } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";



export default function Menu() {
    return (
        <div className='*:h-full *:flex *:items-center w-[60%] *:text-sm flex flex-wrap *:w-[25%] *:font-primary *:cursor-pointer'>
            <div >
                <FaPercent className='ml-2' />
                <p className='text-xs 2xl:text-sm'>شگفت انگیز</p>
            </div>
            <div >
            <FaCreditCard className='ml-2'/>
            <p className='text-xs 2xl:text-sm'>کارت هدیه</p>
            </div>
            <div >       
            <FaFireFlameCurved className='ml-2'  />
            <p className='text-xs 2xl:text-sm'>پرفروش‌ها</p>
            </div>
            <div>
            <FaShopify className='ml-2' />    
            <p className='text-xs 2xl:text-sm'>تخفیفات و پیشنهادات</p>
            </div>
        </div>
    )
}
