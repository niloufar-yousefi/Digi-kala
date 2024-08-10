import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Basket({ left, show, cart,myPlus,myMinus,myDel,myClose }) {
 
  
  return (
    <div className={`fixed top-0 md:top-[70px] duration-300 z-[800] w-full md:w-[400px]  bg-white shadow-2xl rounded-md ${left ? 'left-[-100%]' : 'left-[20px]'}`}>
      <div className='w-full h-[70px] cursor-pointer  pt-3 pr-5'><FaX onClick={myClose} className='text-slate-400 duration-75 hover:text-slate-700' /></div>
      
      <BasketEmpty show={show} />
      <Content show={show} cart={cart} myPlus={myPlus} myMinus={myMinus} myDel={myDel}/>
    </div>
  )
}



function BasketEmpty({ show }) {
  return (
    <div className={`${show ? 'flex' : 'hidden'} w-full h-[350px]  flex-wrap justify-center content-between  *:w-full *:h-[50%] *:pt-8 *:flex  *:justify-center`}>
      <div className="items-center justify-center">
        <FaShoppingBasket className='text-slate-300 text-9xl ' />
      </div>
      <div className="">
        <p className='font-primary text-2xl text-slate-500   '>سبد خرید شما خالی ست!</p>
      </div>

    </div>
  )
}

function Content({ show, cart,myPlus,myMinus,myDel }) {
 
  return (
    <div className={`${show ? 'hidden' : 'flex'} w-full h-[350px] overflow-y-scroll flex flex-wrap px-2 py-5 *:my-1 *:w-full *:h-[80px] *:font-primary`}>
      {
        cart.map((item, index) => {
        

          return (

            <div key={index} className="flex flew-wrap h-full  shadow-md justify-between">

              <div className="w-[68%] h-full *:h-full  flex flew-wrap">
                <div className='w-[30%]  '>
                  <img src={item.image} alt="" className='w-full h-full object-contain' />
                </div>
                <p className='w-[70%] text-xs  flex items-center'>{item.title}</p>
              </div>

              <div className="w-[28%] h-full flex *:flex *:items-center  *:h-full *:text-slate-500 px-2 *:cursor-pointer  *:duration-75" >
                <div className="w-[30%]  text-lg hover:text-slate-800"><FaRegTrashAlt onClick={(event)=>myDel(item.title,event)}/></div>
                <div onClick={(event)=>myPlus(item.title,event)} className="w-[20%] hover:text-slate-800">+</div>
                <div className="w-[20%] hover:text-slate-800">{item.count}</div>
                <div onClick={(event)=>myMinus(item.title,event)} className="w-[20%] hover:text-slate-800">-</div>
              </div>

            </div>

          )

        })

      }

    </div>
  )
}

