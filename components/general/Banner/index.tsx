import React from 'react';
import styles from './styles.module.css';
import AppImage from '@/components/common/AppImage';

export default function Banner({ src = '', className = '', width = 1198 }) {
  return (
    <AppImage
      src={src}
      className={`${styles.container} ${className}`}
      width={width}
      //   objectFit={objectFit}
      //   objectPosition="center center"
      //   layout="fill"
    />
  );
}
