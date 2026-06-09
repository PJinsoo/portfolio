'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Projects from './projects';



const SwiperLib = () => {
    return(
        <div>
           <Swiper
                className=""
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
            >
                <SwiperSlide className=''>
                    1
                </SwiperSlide>
                <SwiperSlide className=''>
                    2
                </SwiperSlide>
                <SwiperSlide className=''>
                    3
                </SwiperSlide>
            </Swiper>
        </div>
      )
}

export default SwiperLib