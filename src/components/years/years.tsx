import React, { useEffect, useState } from 'react';

import { Typography } from 'src/components/ui/typography';

import s from './years.module.scss';
type YearsType = {
  startData: number;
  endData: number;
};

export const Years = ({ startData, endData }: YearsType) => {
  const [currentStartDate, setCurrentStartDate] = useState(startData);
  const [currentEndDate, setCurrentEndDate] = useState(endData);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setInterval>;

    if (currentStartDate === startData) {
      return;
    }
    if (currentStartDate < startData) {
      timeoutId = setTimeout(() => {
        setCurrentStartDate(prevState => prevState + 1);
      }, 50);
    }

    if (startData < currentStartDate) {
      timeoutId = setTimeout(() => {
        setCurrentStartDate(prevState => prevState - 1);
      }, 50);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentStartDate, startData]);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setInterval>;

    if (currentEndDate === endData) {
      return;
    }
    if (currentEndDate < endData) {
      timeoutId = setTimeout(() => {
        setCurrentEndDate(prevState => prevState + 1);
      }, 50);
    }

    if (endData < currentEndDate) {
      timeoutId = setTimeout(() => {
        setCurrentEndDate(prevState => prevState - 1);
      }, 50);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentEndDate, endData]);

  return (
    <div className={s.container}>
      <Typography variant={'h1'} className={s.start_data}>
        {currentStartDate}
      </Typography>
      <Typography variant={'h1'} className={s.end_data}>
        {currentEndDate}
      </Typography>
    </div>
  );
};
