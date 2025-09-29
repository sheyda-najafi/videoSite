import React from 'react';
import styles from './styles.module.css';
import { TranslationFunction } from '@/commonTypes';

export default function Hero({ t }: { t: TranslationFunction }) {
  function getWords(text: string, start: number, end: number) {
    const words = text.trim().split(/\s+/); // split by spaces
    return words.slice(start, end).join(' ');
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.cover}`}>
        <p className={`${styles.text}`}>{t(`welcome`)}</p>
        <h1 className={`${styles.title}`}>
          {getWords(t(`title`), 0, 2)} <br />
          {getWords(t(`title`), 2, 6)} <br />
          {getWords(t(`title`), 6, 9)} <br />
        </h1>
      </div>
    </div>
  );
}
