import React from 'react'
import Cart from './components/header/Cart'
import Singin from './components/header/Singin'
import Search from './components/header/Search1'
import Logo from './components/header/Logo'
import Share from './components/header/Share'



export default function Header({myCart,cart}) {
 
   
    return (
        <div className='w-full fixed bg-white z-10 top-0 px-10 lg:px-20 flex flex-wrap h-[80px] border-b-2 border-slate-100 *:h-full justify-between'>
           
            <Logo/>           
            <Share/>
            <Search/>            
            <Singin />
            <Cart  myCart = {myCart} cart={cart} />
            
        </div>
    )
}







