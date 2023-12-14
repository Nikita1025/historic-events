import React from 'react';

import ButtonLeftIcon from 'src/assets/icon/button-left-icon';
import ButtonRightIcon from 'src/assets/icon/button-right-icon';
import { Typography } from 'src/components/ui/typography';

import s from './button-group.module.scss';

type ButtonGroupType = {
  setNextPeriod: () => void;
  setPrevPeriod: () => void;
  currentPeriodId: number;
};
export const ButtonGroup = ({
  setNextPeriod,
  setPrevPeriod,
  currentPeriodId,
}: ButtonGroupType) => {
  return (
    <div className={s.container}>
      <Typography
        variant={'regular14'}
        className={s.period}
      >{`0${currentPeriodId}/06`}</Typography>
      <div className={s.button_group}>
        <ButtonLeftIcon
          onClick={setPrevPeriod}
          className={currentPeriodId === 1 ? s.button_disabled : s.button}
        />
        <ButtonRightIcon
          onClick={setNextPeriod}
          className={currentPeriodId === 6 ? s.button_disabled : s.button}
        />
      </div>
    </div>
  );
};
