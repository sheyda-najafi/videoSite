import React from 'react';
import styles from './styles.module.css';

export default function Hero({ t }) {
  function getWords(text, start, end) {
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
