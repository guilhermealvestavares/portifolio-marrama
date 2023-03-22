import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Carrousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://placeimg.com/384/450/any/grayscale" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placeimg.com/384/450/any/grayscale" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placeimg.com/384/450/any/grayscale" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placeimg.com/384/450/any/grayscale" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
