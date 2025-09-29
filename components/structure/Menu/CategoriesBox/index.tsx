import AppLink from '@/components/common/AppLink';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styles from './styles.module.css';
import AppImage from '@/components/common/AppImage';

export default function CategoriesBox() {
  const tCommon = useTranslations('common');
  const [categoryList, setCategoryList] = useState([
    { id: 2, title: tCommon(`music`), href: '/home/music', slug: 'music' },
    { id: 3, title: tCommon(`sport`), href: '/home/sport', slug: 'sport' },
    { id: 4, title: tCommon(`education`), href: 'home/education', slug: 'education' },
    { id: 5, title: tCommon(`game`), href: 'home/game', slug: 'game' },
    { id: 6, title: tCommon(`news`), href: 'home/news', slug: 'news' },
    { id: 7, title: tCommon(`technology`), href: 'home/technology', slug: 'technology' },
  ]);
  return (
    <div className={`${styles.container}`}>
      {categoryList?.map((item, index) => (
        <AppLink key={index} href={`/category/${item?.slug}`} className={`${styles.singleItem}`}>
          <AppImage width={37} height={37} src={'/imgs/home/cardChannelImage.jpg'} />
          <p>{item?.title}</p>
        </AppLink>
      ))}
    </div>
  );
}
