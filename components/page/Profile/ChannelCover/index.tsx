import Banner from '@/components/general/Banner';
import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface ChannelCoverType {
  src?: string;
  className?: string;
  bannerClassName?: string;
  children?: ReactNode;
}

export default function ChannelCover({
  src = '',
  className = '',
  bannerClassName = '',
  children = null,
}: ChannelCoverType) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Banner src={src} className={`${bannerClassName}`} />
      {children && children}
    </div>
  );
}
