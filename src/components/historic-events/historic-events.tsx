import React from 'react';

import { Slider } from 'src/components/slider';

import s from './historic-events.module.scss';
export const HistoricEvents = () => {
  return (
    <div className={s.container}>
      <div className={s.line_gradient}></div>
      <div className={s.content}>
        <Slider />
      </div>
    </div>
  );
};
