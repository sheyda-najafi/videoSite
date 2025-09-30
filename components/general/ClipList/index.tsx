import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import AppLink from '@/components/common/AppLink';
import VideoCard from '@/components/general/VideoCard';
import ChannelCard from '@/components/general/ChannelCard';
import { TranslationFunction, video, channel, playlist } from '@/commonTypes';
import TopFiveCard from '../TopFiveCard';
import { useTranslations } from 'next-intl';
import SectionHead from './SectionHead';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/common/Loader';
import PlaylistCard from '../PlaylistCard';

type ClipListType =
  | {
      t: TranslationFunction;
      title: string;
      className?: string;
      list?: video[];
      type?: 'video' | 'topfive';
      cardSection?: string;
      cardStyle?: string;
      infiniteContent?: boolean;
      getMorePosts?: () => void | Promise<void>;
      hasMore?: boolean;
      headerChildren?: ReactNode;
    }
  | {
      t: TranslationFunction;
      title: string;
      className?: string;
      list?: channel[];
      type: 'channel';
      cardSection?: string;
      cardStyle?: string;
      infiniteContent?: boolean;
      getMorePosts?: () => void | Promise<void>;
      hasMore?: boolean;
      headerChildren?: ReactNode;
    }
  | {
      t: TranslationFunction;
      title: string;
      className?: string;
      list?: playlist[];
      type: 'playlist';
      cardSection?: string;
      cardStyle?: string;
      infiniteContent?: boolean;
      getMorePosts?: () => void | Promise<void>;
      hasMore?: boolean;
      headerChildren?: ReactNode;
    };

export default function ClipList({
  t,
  title = '',
  className = '',
  list = [],
  type = 'video',
  cardSection = '',
  cardStyle = '',
  infiniteContent = false,
  getMorePosts,
  hasMore,
  headerChildren = null,
}: ClipListType) {
  const tCommon = useTranslations('common');

  const renderItemVideo = (item: video) => (
    <VideoCard key={item.id} item={item} className={`${styles.videoCard} ${cardStyle}`} />
  );

  const renderItemTopFive = (item: video, index: number) => (
    <TopFiveCard
      key={item.id}
      item={item}
      index={index}
      className={`${styles.topfiveCard} ${cardStyle}`}
    />
  );

  const renderItemChannel = (item: channel) => (
    <ChannelCard key={item.id} item={item} className={`${styles.channelCard} ${cardStyle}`} />
  );

  const renderItemPlaylist = (item: playlist) => (
    <PlaylistCard key={item.id} item={item} className={`${styles.playlistCard} ${cardStyle}`} />
  );

  const content = (
    <>
      {type === 'video' && (
        <div className={`${styles.cardSection} ${cardSection}`}>
          {(list as video[])?.map(renderItemVideo)}
        </div>
      )}

      {type === 'topfive' && (
        <div className={`${styles.cardSection} ${styles.topFive} ${cardSection}`}>
          {(list as video[])?.map(renderItemTopFive)}
        </div>
      )}

      {type === 'channel' && (
        <div className={`${styles.cardSection} ${styles.channel} ${cardSection}`}>
          {(list as channel[])?.map(renderItemChannel)}
        </div>
      )}
      {type === 'playlist' && (
        <div className={`${styles.cardSection} ${styles.playlist} ${cardSection}`}>
          {(list as playlist[])?.map(renderItemPlaylist)}
        </div>
      )}
    </>
  );

  return (
    <div className={`${styles.container} ${className}`}>
      <SectionHead className={type === 'channel' ? styles.channelsHead : ''} title={title}>
        {headerChildren ? (
          headerChildren
        ) : (
          <AppLink className={styles.showAll}>{tCommon('showAll')}</AppLink>
        )}
      </SectionHead>

      {!infiniteContent ? (
        <div className={styles.wrapper}>{content}</div>
      ) : (
        <InfiniteScroll
          dataLength={hasMore ? (list?.length ?? 0) : 0}
          next={() => getMorePosts?.()}
          hasMore={hasMore ?? false}
          scrollThreshold={'150px'}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
        >
          <div className={styles.wrapperInfinite}>{content}</div>
        </InfiniteScroll>
      )}
    </div>
  );
}
