import { video } from '@/commonTypes';
import React, { useContext } from 'react';
import styles from './styles.module.css';
import VideoCard from '../VideoCard';
import { LayoutContext } from '@/context/LayoutContext';

export default function TopFiveCard({
  item,
  index,
  className = '',
}: {
  item: video;
  index: number;
  className?: string;
}) {
  const { dir } = useContext(LayoutContext);
  const renderItemVideo = (item: video) => (
    <VideoCard key={item.id} item={item} className={className} />
  );
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.number} ${styles[dir]}`}>{index + 1}</p>
      {renderItemVideo(item)}
    </div>
  );
}
