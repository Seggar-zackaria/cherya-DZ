import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../buttons/Btn.jsx";

import { product } from "../../data/Data.js";
import { getImageUrl } from "../../data/utils.js";

import "swiper/css";
import "swiper/css/bundle";
import CarouselBtn from "./CarouselBtn.jsx";

export default function Carousel() {
  return (
    <>
      <Swiper>
        {product.map((shoe) => (
          <SwiperSlide key={shoe.id}>
            <div>
              <div
                className={`relative group before:w-full before:z-10 before:absolute before:h-full before:bg-gradient-to-t before:mix-blend-multiply-overlay before:from-neutral-950/90 before:to-neutral-900/30`}
              >
                <div
                  className={`relative w-full overflow-hidde h-96 lg:h-[600px] sm:aspect-h-1 lg:aspect-h-1  lg:aspect-w-1 sm:h-96`}
                >
                  <img
                    src={getImageUrl(shoe)}
                    alt={shoe.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="absolute w-full z-20 px-6 text-start text-white top-1/2 md:top3/4 -translate-y-[50%]">
                  <div className="px-2 py-1 mb-2 text-[10px] md:text-[12px] font-bold rounded-md md:rounded-lg bg-fuchsia-800  w-fit">
                    {shoe.badge}
                  </div>
                  <h3 className="text-xl font-extrabold md:text-5xl">
                    {shoe.name}
                  </h3>
                  <p className="w-full mt-5 text-sm lowercase text-neutral-300 lg:w-3/5">
                    {shoe.description}
                  </p>
                  <Button title="Buy Shoe" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CarouselBtn />
      </Swiper>
    </>
  );
}
