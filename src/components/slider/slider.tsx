import React, { useState } from 'react';

// eslint-disable-next-line import/order
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// eslint-disable-next-line import/order
import { EventType } from 'src/common/constants/data';

import { SliderItem } from './slider-item';
import s from './slider.module.scss';
import { SwipeButton } from './swipe-button';

type SliderType = {
  id: number;
  data: EventType[];
};
export const Slider = ({ id, data }: SliderType) => {
  const [swipeRight, setSwipeRight] = useState<boolean>(true);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);

  const swipeRightHandler = () => {
    setSwipeRight(false);
  };
  const swipeLeftHandler = () => {
    setSwipeLeft(false);
  };
  const onReachEndHandler = () => {
    setSwipeRight(false);
    setSwipeLeft(true);
  };
  const onReachBeginningHandler = () => {
    setSwipeRight(true);
    setSwipeLeft(false);
  };
  const slide = data.map(ev => {
    return (
      <SwiperSlide key={ev.id}>
        <SliderItem event={ev.description} year={ev.date} />
      </SwiperSlide>
    );
  });

  return (
    <div className={s.container} key={id}>
      <Swiper
        speed={1000}
        spaceBetween={20}
        mousewheel={true}
        keyboard={true}
        onReachBeginning={onReachBeginningHandler}
        onReachEnd={onReachEndHandler}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        className={s.swiper_pagination}
        breakpoints={{
          400: {
            spaceBetween: 25,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 40,
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {!swipeRight && (
          <div className={s.swiper_button_left}>
            <SwipeButton swipeRightHandler={swipeLeftHandler} beginning={false} />
          </div>
        )}
        {slide}
        {!swipeLeft && (
          <div className={s.swiper_button_right}>
            <SwipeButton beginning={true} swipeRightHandler={swipeRightHandler} />
          </div>
        )}
      </Swiper>
    </div>
  );
};
