import { useTranslations } from 'next-intl';
import React, { useContext } from 'react';
import styles from './styles.module.css';
import AppImage from '@/components/common/AppImage';
import { LayoutContext } from '@/context/LayoutContext';
import { playlist, video } from '@/commonTypes';
import PlaylistIcons from './PlaylistIcons';

export default function PlaylistCard({
  item,
  className = '',
}: {
  item: playlist;
  className?: string;
}) {
  const t = useTranslations('video');
  const { dir } = useContext(LayoutContext);
  return (
    <div className={`${styles.container} ${className}`}>
      <AppImage
        src={item?.fileImage?.name}
        className={`${styles.image}`}
        width={100}
        height={100}
      />
      <div className={`${styles.contentwrapper}`}>
        <div className={`${styles.content} ${styles[dir]}`}>
          <p className={`${styles.title}`}>{item?.title}</p>
        </div>
        <PlaylistIcons item={item} />
      </div>
    </div>
  );
}
