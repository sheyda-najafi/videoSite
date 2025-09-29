import React, { Fragment, ReactNode, useContext, useState } from 'react';
import styles from './styles.module.css';
import { useTranslations } from 'next-intl';
import ToolbarIcons from '@/icons/toolbar';
import AppLink from '@/components/common/AppLink';
import Divider from '@/components/common/Divider';
import { LayoutContext } from '@/context/LayoutContext';
import Button from '@/components/common/Button';
import { usePathname } from 'next/navigation';
import AbsolueBox from '../../general/AbsoluteBox';
import CategoriesBox from './CategoriesBox';

type MenuItem = {
  id: number | string;
  title: string;
  icon: ReactNode;
  href: string;
  slug: string;
  children?: ReactNode;
  childId?: number | string | null;
};
export default function Menu({ className = '', collapsed = false }) {
  const t = useTranslations('Structure');
  const pathname = usePathname();
  const [active, setActive] = useState<number | string | null>(null);
  const { dir, loginFunction } = useContext(LayoutContext);
  const menuTop = [
    { id: 1, title: t('home'), icon: <ToolbarIcons.HomeIcon />, href: '/', slug: '/' },
    {
      id: 2,
      title: t('channels'),
      icon: <ToolbarIcons.HomeIcon />,
      href: '/channels',
      slug: 'channels',
    },
    {
      id: 3,
      title: t('playlists'),
      icon: <ToolbarIcons.PlaylistIcon />,
      href: '/playlists',
      slug: 'playlists',
    },
    {
      id: 4,
      title: t('categories'),
      icon: <ToolbarIcons.HomeIcon />,
      href: '',
      slug: 'category',
      children: (
        <AbsolueBox showItems={active} setShowItems={setActive}>
          <CategoriesBox />
        </AbsolueBox>
      ),
      childId: 'categoryBox',
    },
  ];
  const menuMiddle = [
    {
      id: 5,
      title: t('channelManagement'),
      icon: <ToolbarIcons.HomeIcon />,
      href: '/profile-management',
      slug: 'profile-management',
    },
  ];
  console.log('active==', active);
  const renderItem = (item: MenuItem) => (
    <Fragment key={item?.id}>
      {item?.href?.length != 0 ? (
        <AppLink
          className={`${styles.menuItem} ${((pathname?.includes(item?.slug) && item?.slug != '/') || pathname == item?.href) && styles.activeMenu} ${styles[dir]}`}
          href={item.href}
        >
          {item.icon}
          {!collapsed && <span>{item.title}</span>}
        </AppLink>
      ) : (
        <div
          className={`${styles.menuItem} 
          ${
            (active == item?.id || (pathname?.includes(item?.slug) && item?.slug != '/')) &&
            styles.activeMenu
          } ${styles[dir]}`}
          onClick={(e) => {
            e.stopPropagation();

            if (active == null) {
              item.childId && setActive(item.childId);
            } else if (active == item?.childId) {
              setActive(null);
            } else {
              setActive(item.childId ?? null);
            }
          }}
        >
          {item.icon}
          {!collapsed && <span>{item.title}</span>}
          {item?.children && active == item?.childId && item?.children}
        </div>
      )}
    </Fragment>
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
