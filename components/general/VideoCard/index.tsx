import { useTranslations } from 'next-intl';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
const DateComponent = dynamic(() => import('@/components/general/DateComponent'), { ssr: false });
import styles from './styles.module.css';
import AppImage from '@/components/common/AppImage';
import { LayoutContext } from '@/context/LayoutContext';
import AppLink from '@/components/common/AppLink';
import Dot from '@/components/common/Dot';
import { video } from '@/commonTypes';
import VerifiedIcon from '../VerifiedIcon';
import View from './View';

export default function VideoCard({ item, className = '' }: { item: video; className?: string }) {
  const t = useTranslations('video');
  const { dir } = useContext(LayoutContext);
  return (
    <div className={`${styles.container} ${className}`}>
      <AppImage
        src={item?.fileImage?.name}
        // className={`${styles.imageContainer}`}
        className={`${styles.image}`}
        width={100}
        height={100}
      />
      <div className={`${styles.content} ${styles[dir]}`}>
        <AppLink href={`/channel/${item?.uuid}`}>
          <AppImage
            src={item?.channel?.fileImage?.name}
            width={36}
            height={36}
            className={`${styles.channelImage}`}
          />
        </AppLink>
        <div className={`${styles.textContainer}`}>
          <AppLink href={`/video/play/${item?.uuid}`}>
            <h3 className={`${styles.title}`} title={item?.title}>
              {item?.title}
            </h3>
          </AppLink>
          <div className={`${styles.details}`}>
            <AppLink href={`/channel/${item?.uuid}`}>{item?.channel?.name}</AppLink>
            {item?.channel?.verified && <VerifiedIcon className={`${styles.verfied}`} />}
          </div>
          <div className={`${styles.details}`}>
            <View text={item?.view} />
            <Dot />
            <p>
              <DateComponent createdAt={item?.createdAt} t={t} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
