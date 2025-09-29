import React, { ReactNode, useContext, useEffect } from 'react';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';

interface AbsolueBoxType {
  id?: string;
  showItems: string | number | null;
  setShowItems: React.Dispatch<React.SetStateAction<string | number | null>>;
  children?: ReactNode;
}
export default function AbsolueBox({
  id = 'categoryBox',
  showItems,
  setShowItems,
  children,
}: AbsolueBoxType) {
  const { dir } = useContext(LayoutContext);
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
    <div className={`${styles.container} ${styles[dir]}`} id={id}>
      {children}
    </div>
  );
}
