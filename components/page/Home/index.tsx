'use client';
import { useTranslations } from 'next-intl';
import Hero from './Hero';
import { Fragment, useState } from 'react';
import TagList from './TagList';
import ClipList from '@/components/general/ClipList';
import styles from './styles.module.css';
import { channel, video } from '@/commonTypes';

export default function Home() {
  const t = useTranslations('HomePage');
  const tCommon = useTranslations('common');

  const [latest, setLatest] = useState<video[]>(
    [...Array(8)].map((_, i) => ({
      id: i + 1,
      title: 'New attack targets U.S. base in Syria following American airstrikes over con',
      channel: {
        name: 'CBS News',
        fileImage: { name: '/imgs/home/cardChannelImage.jpg' },
        uuid: 'channel-uuid',
        verified: true,
      },
      createdAt: new Date(),
      view: 1,
      fileImage: { name: '/imgs/home/cardImage.jpg' },
      uuid: 'hfsdhgjkd',
    })),
  );
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
      <Hero t={t} />
      <TagList t={tCommon} />
      <ClipList
        t={t}
        title={tCommon(`latest`)}
        className={`${styles.latestSection}`}
        list={latest}
      ></ClipList>
      <ClipList t={t} title={t(`topfive`)} list={latest?.slice(0, 3)} type="topfive"></ClipList>
      <ClipList
        t={t}
        title={tCommon(`channels`)}
        list={channels?.slice(0, 5)}
        type="channel"
      ></ClipList>
      <ClipList
        t={t}
        title={t(`Suggest`)}
        className={`${styles.latestSection}`}
        list={latest}
      ></ClipList>
    </Fragment>
  );
}
