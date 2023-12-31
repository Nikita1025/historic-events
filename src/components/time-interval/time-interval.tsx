import React, { useState } from 'react';

import s from './time-interval.module.scss';

import { data } from '@/common/constants/data';
import { ButtonGroup } from '@/components/button-group';
import { Slider } from '@/components/slider';
import { Years } from '@/components/years';

const shift = 30;
const fullRound = 360;

export const TimeInterval = () => {
  const countPeriod = data.length;
  const [currentPeriodId, setCurrentPeriodId] = useState(1);
  const [onMouseOverId, setOnMouseOverId] = useState<null | number>(null);
  const [rotateRound, setRotateRound] = useState(0);

  const currentPeriod = data.find(el => el.id === currentPeriodId);
  const events = currentPeriod?.events!;

  const startDate = currentPeriod?.startDate!;
  const endDate = currentPeriod?.endDate!;

  const onMouseOverHandler = (id: number) => {
    if (!onMouseOverId && id !== currentPeriodId) {
      setOnMouseOverId(id);
    }
  };

  const setNextPeriod = () => {
    if (currentPeriodId < countPeriod) {
      setRotateRound((-fullRound / countPeriod) * currentPeriodId);
      setCurrentPeriodId(prevState => prevState + 1);
    }
  };

  const setPrevPeriod = () => {
    if (1 < currentPeriodId) {
      setRotateRound((-fullRound / countPeriod) * (currentPeriodId - 2));
      setCurrentPeriodId(prevState => prevState - 1);
    }
  };

  const onClickHandler = (id: number) => {
    setRotateRound((-fullRound / countPeriod) * (id - currentPeriodId) + rotateRound);
    setCurrentPeriodId(id);
  };
  const styleRotateContainer = {
    transform: `rotate(${rotateRound}deg)`,
    transition: 'all 600ms linear',
  };
  const periodForRender = data.map((p, index) => {
    const delta = fullRound / countPeriod;

    const rotate = index * delta + shift;

    const styleBlock = { transform: `rotate(${rotate}deg)` };

    const styleActiveBlockText = {
      transform: `rotate(-${shift}deg)`,
    };

    const styleBlockText = {
      transform: `rotate(${-(shift + delta * (p.id - 1) + rotateRound)}deg)`,
    };

    return (
      <div
        onClick={() => onClickHandler(p.id)}
        onMouseLeave={() => setOnMouseOverId(null)}
        onMouseOver={() => onMouseOverHandler(p.id)}
        key={p.id}
        className={s.block}
        style={styleBlock}
      >
        {currentPeriodId === p.id ? (
          <p className={s.active_text} style={styleActiveBlockText}>
            {p.id}
            <span className={s.title}>{p.title}</span>
          </p>
        ) : p.id === onMouseOverId ? (
          <p className={s.anime_hover} style={styleBlockText}>
            {p.id}
          </p>
        ) : (
          <div className={s.empty_block}></div>
        )}
      </div>
    );
  });

  return (
    <div className={s.round}>
      <div className={s.wrapper_date}>
        <Years startData={startDate} endData={endDate} />
        <div className={s.container} style={styleRotateContainer}>
          {periodForRender}
        </div>
      </div>
      <div className={s.line}></div>
      <ButtonGroup
        currentPeriodId={currentPeriodId}
        setNextPeriod={setNextPeriod}
        setPrevPeriod={setPrevPeriod}
      />
      <Slider id={currentPeriodId} data={events} />
    </div>
  );
};
