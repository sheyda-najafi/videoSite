import Divider from '@/components/common/Divider';
import React from 'react';
import styles from './styles.module.scss';

export default function NavigationMenu({
  list,
  onClick = (x) => {},
  className = '',
  activeMenu,
  containerItems,
  titleClass,
}) {
  console.log('active==', activeMenu);
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {list?.map((item, index) => (
        <div className={`${styles.container} `} key={index}>
          <div
            className={`${containerItems} ${
              styles.titleContainer
            } buttonHover ${activeMenu == item?.id && styles.active}`}
          >
            <img src={item.icon} alt={item.alt} style={{ marginLeft: '8.5px' }} />
            <p
              onClick={() => {
                onClick(item?.id);
              }}
              className={`${titleClass} ${styles.title} ${
                activeMenu == item?.id ? 'activeTextColor' : 'aunActiveTextColor'
              } `}
            >
              {item?.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
