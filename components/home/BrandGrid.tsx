"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cars = [
  {
    id: 1,
    name: "BMW X5",
  },
  {
    id: 2,
    name: "Mercedes GLE",
  },
  {
    id: 3,
    name: "Toyota Land Cruiser",
  },
  {
    id: 4,
    name: "Lexus LX600",
  },
  {
    id: 5,
    name: "Porsche Cayenne",
  },
];

export default function BrandGrid() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides
          loop
          speed={800}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={car.id}>
              {({ isActive }) => (
                <div
                  onClick={() => {
                    if (!isActive) {
                      swiperRef.current?.slideToLoop(index);
                    }
                  }}
                  className={`flex cursor-pointer flex-col items-center transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-75 opacity-50 hover:opacity-80"
                  }`}
                >
                  <h3
                    className={`mb-6 text-center font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive ? "text-5xl text-gray-900" : "text-3xl text-gray-500"
                    }`}
                  >
                    {car.name}
                  </h3>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination mt-16 flex justify-center cursor-pointer" />

        <button
          className="
            custom-prev
            absolute
            left-8
            top-1/2
            z-20
            flex
            h-14
            w-14
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition-all
            hover:scale-110
          "
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="
            custom-next
            absolute
            right-8
            top-1/2
            z-20
            flex
            h-14
            w-14
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition-all
            hover:scale-110
          "
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
