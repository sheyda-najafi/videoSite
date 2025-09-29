'use client';
import { useTranslations } from 'next-intl';
import { Fragment, useContext, useState } from 'react';
import styles from './styles.module.css';
import ChannelCover from './ChannelCover';
import MoreBox from '@/components/general/MoreBox';
import Uploader from '@/components/common/Uploader';
import { LayoutContext } from '@/context/LayoutContext';

export default function Profile({ slug, profileInfo }: { slug: string; profileInfo: {} }) {
  const t = useTranslations('Page');
  const tCommon = useTranslations('common');
  const { dir } = useContext(LayoutContext);
  const imageChangeList = [
    {
      id: 1,
      title: null,
      onclick: () => {},
      icon: <Uploader uploadButton={tCommon(`upload`)} />,
    },
  ];

  return (
    <Fragment>
      <ChannelCover
        src={`/imgs/profile/profile-cover.svg`}
        bannerClassName={`${styles.coverImage}`}
      >
        <MoreBox list={imageChangeList} boxClassName={`${styles.boxClassName} ${styles[dir]}`} />
      </ChannelCover>
      {/* <Uploader uploadButton={tCommon(`upload`)} /> */}
    </Fragment>
  );
}
