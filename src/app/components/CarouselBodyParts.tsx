'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import Cookies from 'js-cookie';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useStore } from '@/store';

const images = [
  { src: '/head.png', info: 'Cabeza' },
  { src: '/chest.png', info: 'Pecho' },
  { src: '/stomach.png', info: 'Panza' },
  { src: '/shoulder.png', info: 'Hombro' },
  { src: '/bicep.png', info: 'Bicep' },
  { src: '/forearm.png', info: 'Antebrazo' },
  { src: '/hand.png', info: 'Mano' },
  { src: '/thigh.png', info: 'Muslo' },
  { src: '/calf.png', info: 'Gemelo' },
  { src: '/foot.png', info: 'Pie' },
];

const CarouselBodyParts = () => {
  const { setTattooPlace, setAllowSize } = useStore();

  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleClick = (bodyPart: string) => {
    setTattooPlace(bodyPart);
    setAllowSize(true);
    Cookies.set('allow-size', '1');
    router.push('/dashboard/size');
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="w-[400px] max-w-4xl mx-auto">
        <p className="mb-2 text-xl text-center">{images[activeIndex].info}</p>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={handleSlideChange}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <Image
                src={image.src}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto object-cover"
                width={150}
                height={24}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className="w-full mt-6 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => handleClick(images[activeIndex].info)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CarouselBodyParts;
