import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import myimg1 from './../assets/img/1.256a7bd274477c3b8162.gif'
import myimg2 from './../assets/img/2.e31514e20e83da3cfa5b.gif'
import myimg3 from './../assets/img/3.0ebfeb3c59fab20359a6.gif'
import myimg4 from './../assets/img/4.bc40fd82bd2ec4c98e78.gif'
import myimg5 from './../assets/img/5.93b237c84f47993458d1.jpeg'
import myimg6 from './../assets/img/7.00c4fca64361f545d140.jpeg'


export default function Slider() {
  return (
    <div className='h-[300px] hidden lg:flex mt-[80px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={myimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={myimg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={myimg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={myimg4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={myimg5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={myimg6} alt="" /></SwiperSlide>   
      </Swiper>
    </div>
  );
}
