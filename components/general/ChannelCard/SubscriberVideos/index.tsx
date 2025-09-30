import React from 'react';
import styles from '../styles.module.css';
import Dot from '@/components/common/Dot';
import { useTranslations } from 'next-intl';

export default function SubsciberVideos({
  item,
  className = '',
}: {
  item: { subscriber: string | number | undefined; videos: string | number | undefined };
  className?: string;
}) {
  const t = useTranslations('channel');
  return (
    <div className={`${styles.details} ${className}`}>
      <p>
        {item?.subscriber} {t(`subscribers`)}
      </p>
      <Dot />
      <p>
        {item?.videos} {t(`videos`)}
      </p>
    </div>
  );
}
