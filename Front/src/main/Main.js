import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import main from '../static/game-warrior/css/main.module.css';
import { Divider } from 'antd'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from "../static/game-warrior/img/slider-1.jpg";
export function Main( ) {
    return (
        <>
            <div className={main['header-fixed']}>
                <Header />
            </div>
            <div className={main["body"]}>
                <section className={main['recent-review-wrap']}>
                    <div className={main['recent-review-card-box']}>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><img src={banner1} alt="Banner 1" /></SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            ...
                        </Swiper>
                    </div>

                </section>
                <div className={main['divider-css']}>
                <Divider />
                </div>
                <section className={main['recent-review-wrap']}>
                    <div className={main['title-icon']}>
                        <span className={main['new']}>식단</span>
                    </div>
                    <div className={main['recent-review-card-box']}></div>
                    {/* Add more game cards as needed */}
                </section>
                <div className={main['divider-css']}>
                <Divider/>
                </div>
                <section className={main['recent-review-wrap']}>
                    {/* Hot Games */}
                    <div className={main['title-icon']}>
                        <span className={main['new']}>계획</span>
                    </div>
                    <div className={main['recent-review-card-box']}></div>
                    {/* Add more hot game cards as needed */}
                </section>
                <div className={main['divider-css']}>
                <Divider/>
                </div>
                <section className={main['recent-review-wrap']}>
                    {/* Recent Reviews */}
                    <div className={main['title-icon']}>
                        <span className={main['new']}>운동</span>
                    </div>

                    <div className={main['recent-review-card-box']}></div>
                    {/* Add more recent review cards as needed */}
                </section>
            </div>
            <Footer />
        </>
    );
}
