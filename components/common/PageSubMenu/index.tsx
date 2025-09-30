import React, { Fragment, useState } from 'react';
import styles from './styles.module.css';
import { usePathname, useRouter } from 'next/navigation';
import NavigationMenu from '@/components/structure/NavigationMenu';

interface PageSubMenuType {
  menu: { id: number | string; title: string; onClick: any }[];
  containerItems?: string;
  titleClass?: string;
  wrapperClassName?: string;
  active?: null | undefined | number | string;
  className?: string;
}
export default function PageSubMenu({
  menu = [],
  containerItems = '',
  titleClass = '',
  wrapperClassName = '',
  active = null,
  className = '',
}: PageSubMenuType) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={`${styles.container} ${className}`}>
      <NavigationMenu
        containerItems={containerItems}
        titleClass={titleClass}
        list={menu}
        onClick={(id: number | string) => {
          // router.push(menu.filter((x) => x?.id == id)?.[0]?.link);
          let thisItem = menu?.filter((x) => x.id == id)?.[0];
          thisItem?.onClick();
        }}
        className={`
        ${styles.menu} ${wrapperClassName}
        `}
        activeMenu={active}
      />
    </div>
  );
}
