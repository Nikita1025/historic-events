import React from 'react';

import { TimeInterval } from 'src/components/time-interval';
import { Typography } from 'src/components/ui/typography';

import s from './historic-events.module.scss';
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
