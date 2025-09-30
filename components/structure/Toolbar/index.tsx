import React, { useContext } from 'react';
import styles from './styles.module.scss';
import ToolbarIcons from '@/icons/toolbar';
import { useTranslations } from 'next-intl';
import AppSearch from '@/components/general/AppSearch';
import AppImage from '@/components/common/AppImage';
import Button from '@/components/common/Button';
import { LayoutContext } from '@/context/LayoutContext';
import CookieFunction from '@/functions/cookieFunction';
import config from '@/api/global';
import AppLink from '@/components/common/AppLink';
import MoreBox from '@/components/general/MoreBox';

type ToolbarType = {
  toggleMenuFunction?: () => void;
};

export default function Toolbar({ toggleMenuFunction }: ToolbarType) {
  const t = useTranslations('Structure');
  const { setTrigger, dir, setMode, mode, loginFunction } = useContext(LayoutContext);
  const modeList = [
    { ...config.modes?.[0], onClick: (item: any) => changeMode(item) },
    { ...config.modes?.[1], onClick: (item: any) => changeMode(item) },
  ];
  const toolbarIconList = [
    {
      id: 'more',
      icon: <ToolbarIcons.MoreIcon className={styles.icon} />,
      title: t('more'),
    },
    {
      id: 'modeBox',
      title: t('theme'),
      icon: (
        <MoreBox
          className={`${styles.icon}`}
          icon={config?.modes?.find((x) => x.id === mode)?.icon}
          id={'modeBox'}
          selected={mode}
          list={modeList}
        />
      ),
    },
    {
      id: 'notification',
      icon: (
        <ToolbarIcons.NotificationIconFill
          className={styles.icon}
          onClick={() => {
            setTrigger('sampleModal');
          }}
        />
      ),
      title: t('notification'),
    },
  ];

  const changeMode = (item: { id: string }) => {
    console.log('item==', item);
    setMode(item?.id);
    CookieFunction('set', config.modeName, item?.id, 365);
  };
  console.log('mode==', mode);
  const callbackSearch = () => {};

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sideContainer}`}>
        <ToolbarIcons.BurgerIcon onClick={toggleMenuFunction} />
        <AppLink href="/">
          <AppImage src="/imgs/logo.svg" className={`${styles.logo}`} width={90} height={20} />
        </AppLink>
      </div>
      <AppSearch callbackSearch={callbackSearch} />
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.iconContainer} ${styles[dir]}`}>
          {toolbarIconList?.map((item, index) => (
            <div key={index} className={`${styles.changeModeIcon}`}>
              {item?.icon}
            </div>
          ))}
        </div>
        <Button
          className={`${styles.button} ${styles[dir]}`}
          icon={<ToolbarIcons.SigninIcon onClick={loginFunction} />}
        >
          {t('signin')}
        </Button>
      </div>
    </div>
  );
}
