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
}
export default function MoreBox({
  list = [],
  id = 'moreBox',
  boxClassName = '',
  selected = '',
  icon = null,
}: MoreBoxType) {
  const [showItems, setShowItems] = useState<string | number | null>(null);
  console.log('showItems==', showItems);
  return (
    <div className={`${styles.container}`}>
      <div
        onClick={() => {
          setShowItems(id);
        }}
        className={`${styles.icon}`}
      >
        {icon ? icon : <ToolbarIcons.MoreIcon />}
      </div>
      {showItems == id && (
        <SelectItems
          list={list}
          onClick={(item) => item?.onClick(item)}
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
