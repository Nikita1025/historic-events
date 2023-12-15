import React from 'react';

import './App.scss';
import { HistoricEvents } from '@/components/historic-events';
export const App = () => {
  return (
    <div className={'container'}>
      <HistoricEvents />
    </div>
  );
};
