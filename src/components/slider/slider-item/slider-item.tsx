import React from 'react';

import s from './slider-item.module.scss';

import { Typography } from '@/components/ui/typography';

type SliderItemType = {
  year: number;
  event: string;
};
export const SliderItem = ({ event, year }: SliderItemType) => {
  return (
    <div className={s.container}>
      <Typography variant={'regular25'} className={s.year}>
        {year}
      </Typography>
      <Typography variant={'regular20'} className={s.event}>
        {event}
      </Typography>
    </div>
  );
};
