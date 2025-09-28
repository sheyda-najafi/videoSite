import { useEffect } from 'react';
import TimeFunction from '@/functions/TimeFunction';
import { TranslationFunction } from '@/commonTypes';

const DateComponent = ({ createdAt, t }: { createdAt: string; t: TranslationFunction }) => {
  useEffect(() => {}, [createdAt]);
  return <>{TimeFunction(createdAt, t) < '0' ? t(`secondsago`) : TimeFunction(createdAt, t)}</>;
};

export default DateComponent;
