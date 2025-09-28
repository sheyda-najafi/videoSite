import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

const Divider = ({ className = '', children }: { className?: string; children?: ReactNode }) => {
  return <div className={`${styles.divider}${` `}${className} `}>{children}</div>;
};

export default Divider;
