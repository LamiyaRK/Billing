import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Slides from './Slides';

const Carsoul = () => {
    const data=[{
        id:1,
        details:'Pay Your Utility Bills Anytime, Anywhere',
        img:'/utilitybill.jpg'

    },
    {
        id:2,
        details:'100% Safe & Secure Transactions .SSL Encrypted Payments',
        img:'/security.jpg'

    },
    {
        id:3,
        details:'Pay Electricity, Gas, Water & Internet Bills Instantly .Get Instant Confirmation',
        img:'/fastpayment.jpg'

    },
    {
        id:4,
        details:'Get 25% Cashback on First Bill Payment!',
        img:'/discount.jpg'

    }
]
  return (
    
    <div className='w-[300px] md:w-[500px]   mx-auto my-10'>
     <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,     
         
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='rounded-lg'
      >
      {data.map(da=>
        <SwiperSlide>
         <Slides  alt={`Slide ${da.id}`} da={da} className='rounded-lg ' />
         
        </SwiperSlide>
    )}
      </Swiper>
    </div>
  );
};

export default Carsoul;