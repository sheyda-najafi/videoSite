import React, { useContext } from 'react';
import styles from './styles.module.css';
import Button from '@/components/common/Button';
import { useTranslations } from 'next-intl';
import { LayoutContext } from '@/context/LayoutContext';
import ToolbarIcons from '@/icons/toolbar';

export default function ChannelButtons({ className = '', page = 'profile' }) {
  const tCommon = useTranslations('common');
  const { dir } = useContext(LayoutContext);
  return (
    <div className={`${styles.container} ${styles[dir]} ${className}`}>
      {page == 'profile' ? (
        <>
          {' '}
          <Button>{tCommon(`uploadVideos`)}</Button>
          <Button className={`secondButton`}>{tCommon(`createPlaylist`)}</Button>
          <Button className={`secondButton iconWrapper`}>
            <ToolbarIcons.shareIcon fill="var(--primary-button)" />
          </Button>
        </>
      ) : (
        <Button>{tCommon(`subscribe`)}</Button>
      )}
    </div>
  );
}
