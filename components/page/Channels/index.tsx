'use client';
import { useTranslations } from 'next-intl';
import { Fragment, useState } from 'react';
import ClipList from '@/components/general/ClipList';
import { channel } from '@/commonTypes';
import styles from './styles.module.css';

export default function Channels() {
  const t = useTranslations('Page');
  const tCommon = useTranslations('common');

  const [channels, setChannels] = useState<channel[]>(
    [...Array(5)].map((_, i) => ({
      id: i + 1,
      title: 'Turkish series',
      createdAt: new Date(),
      view: 1,
      fileImage: { name: '/imgs/home/cardChannelImage.jpg' },
      fileWideImage: { name: '/imgs/home/channelCardImage.png' },
      uuid: 'hfsdhgjkd',
      subscriber: '2',
      videos: 4,
      verified: true,
    })),
  );

  return (
    <Fragment>
      {[...Array(5)].map((_, i) => (
        <ClipList
          t={t}
          key={i}
          title={tCommon(`channels`)}
          list={channels}
          type="channel"
          className={`${i == 0 && styles.firstSection}`}
        />
      ))}
    </Fragment>
  );
}
