import React from 'react';

import { Typography } from 'src/components/ui/typography';

import s from './slider-item.module.scss';
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
