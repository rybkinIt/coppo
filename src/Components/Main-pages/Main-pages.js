import Page1 from "./Page1/Page1";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, FreeMode, Mousewheel, Parallax} from 'swiper';

import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";


const MainPages = () =>{
    return(
        <div className="main-pages">
        <Swiper
            parallax={true}
            direction={"horizontal"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            pagination={true}
            modules={[FreeMode, Mousewheel, Parallax]}

            className="mySwiper">
            <SwiperSlide className="slide"><Page1/></SwiperSlide>
            <SwiperSlide className="Page2"><Page2/></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide><Page3/></SwiperSlide>
            <SwiperSlide><Page4/></SwiperSlide>
            <SwiperSlide></SwiperSlide>

        </Swiper>
        </div>
    )
}

export default MainPages