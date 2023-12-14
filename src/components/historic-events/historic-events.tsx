import React from 'react';

import { TimeInterval } from 'src/components/time-interval';
import { Typography } from 'src/components/ui/typography';

import s from './historic-events.module.scss';
export const HistoricEvents = () => {
  return (
    <div className={s.container}>
      <div className={s.line_gradient}></div>
      <div className={s.title}>
        <Typography variant={'large'}>Исторические даты</Typography>
      </div>
      <TimeInterval />
    </div>
  );
};
