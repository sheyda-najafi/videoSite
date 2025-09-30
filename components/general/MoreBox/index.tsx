import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css';
import ToolbarIcons from '@/icons/toolbar';
import SelectItems from '../SelectItems';

interface MoreBoxType {
  children?: ReactNode;
  id?: string;
  list?: any;
  boxClassName?: string;
  selected?: string;
  icon?: ReactNode;
  iconStyle?: string;
  className?: string;
}
export default function MoreBox({
  list = [],
  id = 'moreBox',
  boxClassName = '',
  selected = '',
  icon = null,
  iconStyle = '',
  className = '',
}: MoreBoxType) {
  const [showItems, setShowItems] = useState<string | number | null>(null);
  console.log('showItems==', showItems);
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        onClick={() => {
          setShowItems(id);
        }}
        className={`${styles.icon} ${iconStyle}`}
      >
        {icon ? icon : <ToolbarIcons.MoreIcon className={`${styles.moreIcon}`} />}
      </div>
      {showItems == id && (
        <SelectItems
          list={list}
          // onClick={(x) => item?.onClick(x)}
          showItems={showItems}
          setShowItems={setShowItems}
          id={id}
          className={boxClassName}
          selected={selected}
        />
      )}
    </div>
  );
}
