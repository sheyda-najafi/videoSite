import React, { ReactNode, useContext } from 'react';
import styles from './styles.module.scss';
import Loader from '../Loader';
import { LayoutContext } from '@/context/LayoutContext';

type ButtonType = {
  onClick?: () => void;
  className?: string;
  icon?: ReactNode | null;
  children?: ReactNode | null;
  loading?: Boolean;
}
const Button = ({ onClick, className = '', icon = null, children, loading = false }: ButtonType) => {
  const { dir } = useContext(LayoutContext)
  return (
    <button
      onClick={onClick}
      className={`${styles.container}${` `}${className}`}
    >
      {loading ? <Loader /> :
        <div className={`${styles.content}`}>
          {icon && icon}
          <span className={`${styles.text} ${styles[dir]}`}>{children}</span>
        </div>
      }

    </button>
  );
};

export default Button;
