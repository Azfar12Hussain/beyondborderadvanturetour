"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop
        className="h-full"
      >
        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 1 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/asset/hero11.jpeg" alt="Slide 1" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Floating Circles */}
            <div className="absolute top-20 left-20 w-34 h-34 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/circle1.jpg" alt="circle" fill className="object-cover" />
            </div>
            <div className="absolute bottom-20 right-20 w-34 h-34 rounded-full overflow-hidden border-4 border-white animate-float delay-300 shadow-xl">
              <Image src="/circle2.jpg" alt="circle" fill className="object-cover" />
            </div>

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-xl">
                EXPLORE <br />
                <span className="text-blue-400">Experience</span> <br />
                ESCAPE
              </h1>

              <p className="text-white text-xl md:text-2xl max-w-xl mt-4">
                We hold the world for you to explore.
              </p>

              <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-orange-400">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 2 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/p3.jpeg" alt="Slide 2" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Polaroids */}
            <div className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 flex gap-6">
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/p1.jpeg" fill alt="" className="object-cover" />
              </div>
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/p2.jpeg" fill alt="" className="object-cover" />
              </div>
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/p3.jpeg" fill alt="" className="object-cover" />
              </div>
            </div>

            {/* TEXT */}
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white max-w-xl">
              <h1 className="text-5xl md:text-6xl font-extrabold">
                REAL LIFE EXPERIENCES <br />
                <span className="text-red-400 italic">with us!</span>
              </h1>

              <p className="text-xl mt-4">Immerse yourself in traditional lifestyles.</p>

              <button className="mt-6 bg-orange-500 px-8 py-3 rounded-lg hover:bg-orange-400">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 3 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/asset/pic14.jpeg" alt="Slide 3" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

          

            {/* Polaroids */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/asset/pic3.jpeg" fill alt="" className="object-cover" />
              </div>
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/asset/pic1.jpeg" fill alt="" className="object-cover" />
              </div>
              <div className="polaroid w-40 md:w-56 h-52 relative">
                <Image src="/asset/pic2.jpeg" fill alt="" className="object-cover" />
              </div>
            </div>

            {/* TEXT */}
            <div className="absolute top-20 left-10 md:left-20 max-w-xl">
              <h1 className="text-black text-5xl md:text-6xl font-extrabold">
                Discover the <br /> Wilderness of Pakistan
              </h1>

              <p className="text-white mt-4 text-xl">Explore breathtaking landscapes with us.</p>

              <button className="mt-6 bg-orange-600 px-8 py-3 rounded-lg text-white hover:bg-orange-500">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 4 (NEW / Custom) */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/asset/pic6.jpeg" fill alt="Slide 4" className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Blue Wave */}
           

            {/* Floating Circles */}
            <div className="absolute top-24 right-24 w-40 h-40 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/asset/pic14.jpeg" fill alt="" className="object-cover" />
            </div>

            {/* TEXT */}
            <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 text-right max-w-xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold">
                Explore Hidden Trails
              </h1>

              <p className="text-white mt-4 text-xl">
                Secret paths, breathtaking views & exclusive adventures.
              </p>

              <button className="mt-6 bg-orange-500 px-8 py-3 rounded-lg text-white hover:bg-orange-400">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 5 (NEW / Custom) */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/asset/pic7.jpeg" fill alt="Slide 5" className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute top-16 left-16 w-33 h-50 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/asset/pic2.jpeg" alt="circle" fill className="object-cover" />
            </div>
            <div className="absolute bottom-20 right-16 w-33 h-50 rounded-full overflow-hidden border-4 border-white animate-float delay-300 shadow-xl">
              <Image src="/asset/pic5.jpeg" alt="circle" fill className="object-cover" />
            </div>

            {/* Green Ribbon */}
            

            {/* Centered Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl">
                Ultimate Adventure
              </h1>

              <p className="text-white mt-4 text-xl drop-shadow">
                From mountains to valleys — we cover it all.
              </p>

              <button className="mt-6 bg-orange-500 px-8 py-3 rounded-lg text-white hover:bg-orange-400">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
