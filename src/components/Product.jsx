import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRepeat } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Logo from './header/Logo';
import BasketSub from './BasketSub';

export default function Product({ products, myABasketProduct,myABasketProduct2,setVisibility,visibility }) {

    
    const [data, setData] = useState({})

    function mySubCart(image, title, price,count,id) {
        setVisibility(false)      
        setData({...data,image,title,price,count,id})      
        
    }

    function myClose(e) {
        setVisibility(true)          
     }
     
  
    return (
        <div className='w-full px-10 lg:px-20 '>
            <div className=' py-10 flex flex-wrap justify-between'>
                {products.map((product, index) => {
                    // console.log(product)                   

                    return (
                        <div key={index} className="group relative mb-10 w-full md:w-[48%] lg:w-[32%] shadow-md rounded-md h-[350px]  flex flex-wrap content-around *:font-primary overflow-x-hidden text-slate-800 bg-white">
                            <div className='w-full h-full'>
                                <div className='w-full h-[50%] flex justify-center items-end '><img src={product.images.main} className='w-ful h-[90%] object-cover' alt="" /></div>
                                <div className="px-10 md:px-20 w-full h-[35%] md:text-md flex items-center justify-center md:justify-start overflow-y-hidden "><p className=''>{product.title_fa}</p></div>
                                <div className="px-10 md:px-20 w-full h-[15%] flex justify-center md:justify-end  md:text-xs"><p><span className='ml-2'>{product.price.rrp_price}</span>ریال</p></div>
                                <div className='absolute w-[12%] h-[30%] duration-75 left-[100%] top-[50%] -translate-y-[50%]  group-hover:left-[88%] flex flex-wrap  justify-end content-around *:w-[80%] *:bg-slate-100 *:py-3 *:flex *:justify-center *:cursor-pointer *:text-slate-800 *:rounded-xl '>
                                    <div id={product.id}  data-status='on' onClick={(event) => { myABasketProduct(product.images.main, product.title_fa, product.price.rrp_price, event, 1, product.id) }} className='hover:bg-slate-300  duration-75'><FaCartShopping className='group-hover:left-[88%] pointer-events-none' /></div>
                                    <div onClick={(event) => mySubCart(product.images.main, product.title_fa, product.price.rrp_price,1, product.id)} className='hover:bg-slate-300 duration-75 '><FaRepeat className='pointer-events-none' /></div>
                                </div>
                            </div>

                            <BasketSub data={data} visibility={visibility} myClose={myClose} myABasketProduct2 ={myABasketProduct2 }/>
                           
                        </div>
                    )
                })}

            </div>

        </div>
    )
}


