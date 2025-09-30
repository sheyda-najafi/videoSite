import { useTranslations } from 'next-intl';
import React from 'react';
import styles from '../styles.module.css';

export default function View({ text, className = '' }: { text: number; className?: string }) {
  const t = useTranslations('video');
  return (
    <p className={`${styles.view} ${className}`}>
      {text} {t(`view`)}
    </p>
  );
}
