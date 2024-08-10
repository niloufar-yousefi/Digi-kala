import React from 'react'
import Menu from './category/Menu'
import List from './category/List'
import Location from './category/Location'

export default function Category() {
  return (
    <div className='w-full mt-[80px] shadow-lg fixed z-10 top-0 bg-white  left-0 px-10 lg:px-20 hidden lg:flex flex-wrap justify-between items-center h-[80px]  *:h-full *:flex *:items-center *:text-slate-600'>
      <List/>
      <Menu/>
      <Location/>
    </div>
  )
}
