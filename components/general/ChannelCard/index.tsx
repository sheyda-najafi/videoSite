import { useTranslations } from 'next-intl';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
const DateComponent = dynamic(() => import('@/components/general/DateComponent'), { ssr: false });
import styles from './styles.module.css';
import AppImage from '@/components/common/AppImage';
import { LayoutContext } from '@/context/LayoutContext';
import AppLink from '@/components/common/AppLink';
import Dot from '@/components/common/Dot';
import ToolbarIcons from '@/icons/toolbar';
import { channel } from '@/commonTypes';
import VerifiedIcon from '../VerifiedIcon';
import SubsciberVideos from './SubscriberVideos';

export default function ChannelCard({
  item,
  className = '',
}: {
  item: channel;
  className?: string;
}) {
  const t = useTranslations('channel');
  const { dir } = useContext(LayoutContext);
  return (
    <div className={`${styles.container} ${className}`}>
      <AppImage
        src={item?.fileWideImage?.name}
        className={`${styles.image}`}
        width={100}
        height={100}
      />
      <AppImage
        src={item?.fileImage?.name}
        className={`${styles.channelImage}`}
        width={80}
        height={80}
      />

      <div className={`${styles.content} ${styles[dir]}`}>
        <div className={`${styles.textContainer}`}>
          <AppLink href={`/video/play/${item?.uuid}`} className={`${styles.titleContainer}`}>
            <h3 className={`${styles.title}`}>{item?.title}</h3>
            {item?.verified && <VerifiedIcon className={`${styles.verfied}`} />}
          </AppLink>
          <SubsciberVideos item={{ subscriber: item?.subscriber, videos: item?.videos }} />
        </div>
      </div>
    </div>
  );
}
