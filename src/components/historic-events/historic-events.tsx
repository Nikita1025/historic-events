import React from 'react';

import s from './historic-events.module.scss';

import { TimeInterval } from '@/components/time-interval';
import { Typography } from '@/components/ui/typography';

export const HistoricEvents = () => {
  return (
    <div className={s.container}>
      <div className={s.line_gradient}></div>
      <div className={s.vertical_line}></div>
      <div className={s.horizontal_line}></div>
      <Typography variant={'large'} className={s.title}>
        Исторические даты
      </Typography>
      <TimeInterval />
    </div>
  );
};
