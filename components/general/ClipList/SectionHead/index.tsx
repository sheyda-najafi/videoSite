import React, { ReactNode } from 'react';
import styles from '../styles.module.css';

export default function SectionHead({
  className = '',
  children = null,
  title = '',
}: {
  className: string;
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={`${styles.head} ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
