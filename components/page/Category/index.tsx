'use client';
import { useTranslations } from 'next-intl';
import { Fragment, useState } from 'react';
import ClipList from '@/components/general/ClipList';
import { video } from '@/commonTypes';
import styles from './styles.module.css';
import Banner from '@/components/general/Banner';

export default function Category({ slug, categoryInfo }: { slug: string; categoryInfo: {} }) {
  const t = useTranslations('Page');
  const tCommon = useTranslations('common');

  const [data, setData] = useState<video[]>(
    [...Array(4)].map((_, i) => ({
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

  return (
    <Fragment>
      <Banner src={`/imgs/category/cover.png`} />
      {[...Array(2)].map((_, i) => (
        <ClipList
          t={t}
          key={i}
          title={tCommon(`latest`)}
          list={data}
          type="video"
          // className={`${i == 0 && styles.firstSection}`}
          cardSection={`${styles.cardSection}`}
          cardStyle={`${styles.videoCard}`}
        />
      ))}
    </Fragment>
  );
}
