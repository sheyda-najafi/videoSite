import React, { ReactNode, useContext } from 'react';
import styles from './styles.module.css';
import { useTranslations } from 'next-intl';
import ToolbarIcons from '@/icons/toolbar';
import AppLink from '@/components/common/AppLink';
import Divider from '@/components/common/Divider';
import { LayoutContext } from '@/context/LayoutContext';
import Button from '@/components/common/Button';

type MenuItem = {
  id: number | string;
  title: string;
  icon: ReactNode;
  href: string;
};
export default function Menu({ className = '', collapsed = false }) {
  const t = useTranslations('Structure'); // Incorrect namespace
  const { dir, loginFunction } = useContext(LayoutContext);
  const menuTop = [
    { id: 1, title: t('home'), icon: <ToolbarIcons.HomeIcon />, href: '/' },
    { id: 2, title: t('channels'), icon: <ToolbarIcons.HomeIcon />, href: '/channels' },
    { id: 3, title: t('playlists'), icon: <ToolbarIcons.PlaylistIcon />, href: '/playlists' },
    { id: 4, title: t('categories'), icon: <ToolbarIcons.HomeIcon />, href: '/categories' },
  ];
  const menuMiddle = [
    {
      id: 5,
      title: t('channelManagement'),
      icon: <ToolbarIcons.HomeIcon />,
      href: '/channel-management',
    },
  ];
  const renderItem = (item: MenuItem) => (
    <AppLink key={item.id} className={`${styles.menuItem} ${styles[dir]}`} href={item.href}>
      {item.icon}
      {!collapsed && <span>{item.title}</span>}
    </AppLink>
  );
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.itemsContainer}`}>{menuTop?.map(renderItem)}</div>
      <Divider />
      <div className={`${styles.itemsContainer}`}>{menuMiddle?.map(renderItem)}</div>
      <Divider />
      {!collapsed && (
        <>
          <p className={`${styles.menuMessage}`}>{t('menuMessage')}</p>
          <div className={`${styles.buttonContainer}`}>
            <Button onClick={loginFunction}>{t(`signup-login`)}</Button>
            <Button onClick={loginFunction} className={`secondButton`}>
              {t(`getPro`)}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
