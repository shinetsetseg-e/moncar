"use client";

import { brands } from "@/data/brands";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function BrandGrid() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
      className="brand-swiper"
    >
      {brands.map((brand) => (
        <SwiperSlide key={brand.id} className="h-auto">
          <div className="flex h-full cursor-pointer flex-col items-center gap-2 rounded-xl border-[1.5px] border-gray-200 bg-white px-4 py-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600">
              {brand.icon}
            </div>

            <div className="text-center text-[13px] font-semibold text-gray-700">{brand.name}</div>

            <div className="text-xs text-gray-400">{brand.count}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
