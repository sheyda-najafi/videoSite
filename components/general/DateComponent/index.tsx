import { useEffect } from 'react';
import TimeFunction from '@/functions/TimeFunction';
import { TranslationFunction } from '@/commonTypes';
interface DateComponentProps {
  createdAt: string | Date; // allow both
  t: TranslationFunction;
}
const DateComponent = ({ createdAt, t }: DateComponentProps) => {
  useEffect(() => {}, [createdAt]);
  return <>{TimeFunction(createdAt, t) < '0' ? t(`secondsago`) : TimeFunction(createdAt, t)}</>;
};

export default DateComponent;
