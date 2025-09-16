import React, { ChangeEvent, Fragment, KeyboardEvent, useState } from 'react';
import styles from './styles.module.scss';
import ToolbarIcons from '@/icons/toolbar';
import { useTranslations } from 'next-intl';
import AppSearch from '@/components/general/AppSearch';
import AppImage from '@/components/common/AppImage';
import Button from '@/components/common/Button';
import { Link } from '@/i18n/navigation';

type ToolbarType = {
  toggleMenuFunction?: () => void;
};

export default function Toolbar({ toggleMenuFunction }: ToolbarType) {
  const t = useTranslations('Structure');
  const toolbarIconList = [
    { id: 1, icon: <ToolbarIcons.BurgerIcon onClick={() => {}} />, title: t('notification') },
    {
      id: 2,
      icon: <ToolbarIcons.BurgerIcon onClick={() => {}} />,
      title: t('theme'),
      onClick: () => {},
    },
    {
      id: 3,
      icon: <ToolbarIcons.CloseIcon onClick={() => {}} />,
      title: t('more'),
      onClick: () => {},
    },
  ];
  const callbackSearch = () => {};
  const loginFunction = () => {};
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sideContainer}`}>
        <ToolbarIcons.BurgerIcon onClick={toggleMenuFunction} />
        <Link href="/">
          {' '}
          <AppImage src="/imgs/logo.svg" className={`${styles.logo}`} width={90} height={20} />
        </Link>
      </div>
      <AppSearch callbackSearch={callbackSearch} />
      <div className={`${styles.sideContainer}`}>
        {toolbarIconList?.map((item, index) => (
          <Fragment key={index}>{item?.icon}</Fragment>
        ))}
        <Button icon={<ToolbarIcons.SigninIcon onClick={loginFunction} />}>{t('signin')}</Button>
      </div>
    </div>
  );
}
