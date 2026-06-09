import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Projects from './projects';

SwiperCore.use([Navigation, Pagination])

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