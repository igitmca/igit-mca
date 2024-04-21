'use client'
import profile from '@/assets/profile.svg';
import Image from "next/image";
import { useRef } from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const OurCoordinator = () => {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className="py-5 h-[30rem] px-6 md:px-12 our__coordinator">
             <h1 className='text-4xl font-bold mb-8'>Our Co-ordinator</h1>
            <div className="relative">
                <Swiper
                 slidesPerView={1}
                 spaceBetween={10}
                 breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    modules={[ Navigation, Pagination, Autoplay]}
                    className="md:w-11/12 mx-auto w-[90%] px-4 h-80"
                >
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(list=><SwiperSlide className="flex justify-center items-center" key={list} style={{display:'flex'}} >
                            <div className="bg-[#38384F] border-2 border-[#ffffff33] rounded-3xl  shadow-2xl shadow-[#00000080] w-48">
                                <div className="flex justify-center pt-2">
                                    <Image src={profile} alt="profile" width={100} height={100} className="w-11/12"/>
                                </div>
                                <div className="text-center py-2">
                                    <h4>{list} Jones</h4>
                                    <h6>CR</h6>
                                </div>
                            </div>
                    </SwiperSlide>)
                    }

                </Swiper>

                <div
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-white text-black absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
                    left-0 md:left-0 rounded-full shadow-md shadow-slate-200 hidden md:flex"
                >
                    <IoIosArrowBack className="text-2xl" />
                </div>

                <div onClick={() => {
                    swiperRef.current?.slideNext()
                }}
                    className="bg-[#FFC27A] absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
                    right-0 md:right-0 rounded-full shadow-lg shadow-[#ffc17a81] hidden md:flex"
                >
                    <IoIosArrowBack className="rotate-180 text-2xl" />
                </div>

            </div>
        </div>
    )
}

export default OurCoordinator