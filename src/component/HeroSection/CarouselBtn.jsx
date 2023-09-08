import { useSwiper } from 'swiper/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

 const CarouselBtn = () => {
    const swiper = useSwiper();

    return (
        <div className="absolute z-40 items-center hidden gap-3 md:grid bottom-10 right-10">
            <div
                className="w-8 h-8 p-1 text-black bg-white rounded-md "
                onClick={() => swiper.slidePrev()}>
                <ChevronLeftIcon  />
            </div>
            <div
                className="w-8 h-8 p-1 text-black bg-white rounded-md "
                onClick={() => swiper.slideNext()}>
                <ChevronRightIcon />
            </div>
        </div>
    );
};

export default CarouselBtn