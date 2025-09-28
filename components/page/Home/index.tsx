'use client';
import { useTranslations } from 'next-intl';
import Hero from './Hero';
import { Fragment, useState } from 'react';
import TagList from './TagList';
import ClipList from '@/components/general/ClipList';
import styles from './styles.module.css';
import { video } from '@/commonTypes';

export default function Home() {
  const t = useTranslations('HomePage');

  const [latest, setLatest] = useState<video[]>(
    [...Array(8)].map((_, i) => ({
      id: i + 1,
      title:
        'New attack targets U.S. base in Syria following American airstrikes over con  following American airstrikes over con  following American airstrikes over con',
      channel: {
        name: 'CBS News',
        fileImage: { name: '/imgs/home/cardChannelImage.jpg' },
        uuid: 'channel-uuid',
        verified: true,
      },
      createdAt: new Date(),
      views: 1,
      fileImage: { name: '/imgs/home/cardImage.jpg' },
      uuid: 'hfsdhgjkd',
    })),
  );

  return (
    <Fragment>
      <Hero t={t} />
      <TagList t={t} />
      <ClipList
        t={t}
        title={t(`latest`)}
        className={`${styles.latestSection}`}
        list={latest}
      ></ClipList>
    </Fragment>
  );
}
