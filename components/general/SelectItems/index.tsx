import React, { ReactNode, useContext, useEffect } from 'react';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';

type SelectItemType = {
  list: { id: string; title: string; icon: ReactNode; onClick: (x: any) => void }[];
  className?: string;
  // onClick: (x: any) => void;
  selected?: string | number;
  id?: string;
  showItems?: string | number | null;
  setShowItems: React.Dispatch<React.SetStateAction<string | number | null>>;
};

export default function SelectItems({
  list = [],
  className = '',
  // onClick,
  selected,
  id = 'selectItem',
  showItems,
  setShowItems,
}: SelectItemType) {
  const { dir } = useContext(LayoutContext);
  console.log('id==', id, showItems);

  const checkIfClickedOutside = (e: MouseEvent) => {
    const target = e.target as Node; // cast EventTarget to Node

    if (showItems == id && document.getElementById(id)?.contains(target)) {
      setShowItems(id);
    } else {
      setShowItems(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showItems]);
  return (
    <ul className={`${styles.container} ${styles[dir]} ${className}`} id={id}>
      {list?.map((item, index) => (
        <li
          key={item?.id}
          className={`${selected == item?.id ? styles.selected : ''} ${styles.item} ${styles[dir]}`}
          onClick={() => {
            item?.onClick(item);
          }}
        >
          {item?.icon}
          <span>{item?.title}</span>
        </li>
      ))}
    </ul>
  );
}
