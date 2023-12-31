import React from 'react';

import { useSwiper } from 'swiper/react';

import s from './swipe-button.module.scss';

import VectorRight from '@/assets/icon/vector-right-icon';
type SwipeButtonType = {
  swipeRightHandler: () => void;
  beginning: boolean;
};
export const SwipeButton = ({ swipeRightHandler, beginning }: SwipeButtonType) => {
  const swiper = useSwiper();
  const onSwipeRight = () => {
    swipeRightHandler();
    swiper.slideNext();
  };
  const onSwipeLeft = () => {
    swipeRightHandler();
    swiper.slidePrev();
  };

  return (
    <button className={s.button} onClick={beginning ? onSwipeRight : onSwipeLeft}>
      <VectorRight className={!beginning ? s.icon : ''} />
    </button>
  );
};
