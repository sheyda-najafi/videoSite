import React from 'react';
import styles from './styles.module.css';
import AppLink from '@/components/common/AppLink';
import dynamic from 'next/dynamic';
// const VideoCard = dynamic(() => import('@/components/general/VideoCard'), { ssr: false });
import VideoCard from '@/components/general/VideoCard';
import ChannelCard from '@/components/general/ChannelCard';
import { TranslationFunction, video, channel } from '@/commonTypes';
import TopFiveCard from '../TopFiveCard';
import { useTranslations } from 'next-intl';

type ClipListType<T> = {
  t: TranslationFunction;
  title: string;
  className?: string;
  list?: T[];
  type?: 'video' | 'channel' | 'topfive'; // extend with more later
  cardSection?: string;
  cardStyle?: string;
};

export default function ClipList<T>({
  t,
  title = '',
  className = '',
  list = [],
  type = 'video',
  cardSection = '',
  cardStyle = '',
}: ClipListType<T>) {
  const tCommon = useTranslations('common');
  const renderItemVideo = (item: video) => (
    <VideoCard key={item.id} item={item} className={`${styles.videoCard} ${cardStyle}`} />
  );
  const renderItemTopFive = (item: video, index: number) => (
    <TopFiveCard
      key={item.id}
      item={item}
      index={index}
      className={`${styles.topfiveCard}  ${cardStyle}`}
    />
  );
  const renderItemChannel = (item: channel) => (
    <ChannelCard key={item.id} item={item} className={`${styles.channelCard}  ${cardStyle}`} />
  );

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.head} ${type === 'channel' && styles.channelsHead}`}>
        <h2>{title}</h2>
        <AppLink className={styles.showAll}>{tCommon('showAll')}</AppLink>
      </div>

      <div className={`${styles.wrapper}`}>
        {type === 'video' && (
          <div className={`${styles.cardSection} ${cardSection}`}>
            {(list as unknown as video[])?.map(renderItemVideo)}
          </div>
        )}

        {type === 'topfive' && (
          <div className={`${styles.cardSection} ${styles.topFive} ${cardSection}`}>
            {(list as unknown as video[])?.map(renderItemTopFive)}
          </div>
        )}

        {type === 'channel' && (
          <div className={`${styles.cardSection} ${styles.channel} ${cardSection}`}>
            {(list as unknown as channel[])?.map(renderItemChannel)}
          </div>
        )}
      </div>
    </div>
  );
}
