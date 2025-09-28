import React, { Fragment, useContext } from 'react';
import styles from './styles.module.css';
import Button from '@/components/common/Button';
import { LayoutContext } from '@/context/LayoutContext';
import AppLink from '@/components/common/AppLink';

type tagItemType = {
  id: string | number;
  title: string;
  href?: string;
};
type TagListType = {
  t: any;
  list?: null | tagItemType[];
  onClick?: (x: any) => void;
  active?: number;
};
export default function TagList({ t, list = null, onClick = () => {}, active = 1 }: TagListType) {
  const { dir } = useContext(LayoutContext);
  let tags = [
    { id: 1, title: t(`all`), href: '/' },
    { id: 2, title: t(`music`), href: '/home/music' },
    { id: 3, title: t(`sport`), href: '/home/sport' },
    { id: 4, title: t(`education`), href: 'home/education' },
    { id: 5, title: t(`game`), href: 'home/game' },
    { id: 6, title: t(`news`), href: 'home/news' },
    { id: 7, title: t(`technology`), href: 'home/technology' },
  ];
  const items = list && list.length > 0 ? list : tags;
  return (
    <div className={`${styles.container}`}>
      {items?.map((item, index) => (
        <Fragment key={item?.id}>
          {item?.href ? (
            <AppLink
              href={item?.href}
              className={`${item?.id == active ? styles.activeButton : ''} ${styles.button} ${styles[dir]}`}
              onClick={() => onClick(item)}
            >
              {item?.title}
            </AppLink>
          ) : (
            <Button
              className={`${item?.id == active ? styles.activeButton : ''} ${styles.button} ${styles[dir]}`}
              onClick={() => onClick(item)}
            >
              {item?.title}
            </Button>
          )}
        </Fragment>
      ))}
    </div>
  );
}
