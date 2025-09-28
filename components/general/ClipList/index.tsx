import React from 'react';
import styles from './styles.module.css';
import AppLink from '@/components/common/AppLink';
import dynamic from 'next/dynamic';
// const VideoCard = dynamic(() => import('@/components/general/VideoCard'), { ssr: false });
import VideoCard from '@/components/general/VideoCard';
import { TranslationFunction, video } from '@/commonTypes';

interface ClipListType {
  t: TranslationFunction;
  title: string;
  className?: string;
  list?: [];
  type?: string;
}
export default function ClipList({
  t,
  title = 'h',
  className = '',
  list = [],
  type = 'video',
}: ClipListType) {
  const renderItemVideo = (item: video) => <VideoCard key={item.id} item={item} />;
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.head}`}>
        <h2>{title}</h2>
        <AppLink className={`${styles.showAll}`}>{t(`showAll`)}</AppLink>
      </div>
      {type == 'video' && (
        <div className={`${styles.cardSection}`}>{list?.map(renderItemVideo)}</div>
      )}
    </div>
  );
}
