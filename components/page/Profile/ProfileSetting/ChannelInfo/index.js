import VerifiedIcon from '@/components/general/VerifiedIcon';
import React, { useContext } from 'react';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';
import SubsciberVideos from '@/components/general/ChannelCard/SubscriberVideos';
import View from '@/components/general/VideoCard/View';

export default function ChannelInfo({ data }) {
  const { dir } = useContext(LayoutContext);
  return (
    <div className={`${styles.container} ${styles[dir]}`}>
      <div className={`${styles.nameContainer}`}>
        <h1 className={`${styles.name}`}>{data?.name}</h1>
        {data?.verified && <VerifiedIcon className={`${styles.verified}`} />}
      </div>
      <SubsciberVideos
        item={{ subscriber: data?.subscriber, videos: data?.videos }}
        className={`${styles.text}`}
      />
      <View text={data?.views} className={`${styles.view}`} />
    </div>
  );
}
