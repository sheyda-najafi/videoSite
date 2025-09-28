import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';

import ToolbarIcons from '@/icons/toolbar';
import { LayoutContext } from '@/context/LayoutContext';

const Modal = ({
  modalIcon = <ToolbarIcons.NotificationIconFill />,
  children,
  handleShowModal,
  title,
  extraContentInsideClass = '',
  extraContentStyle,
  extraHeaderStyle = 'nothing',
  extraIconStyle = 'nothing',
  extraWrapperStyle = '',
}) => {
  const { dir } = useContext(LayoutContext);
  const [opcaityHandle, setOpcaityHandle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpcaityHandle(true);
    }, 50);
  }, []);

  return (
    <div className={`${!opcaityHandle ? styles.wrapper : styles.wrapper2}  ${extraWrapperStyle}`}>
      <div className={` ${styles.content} ${extraContentStyle} `}>
        <div className={` ${styles.header} ${extraHeaderStyle}`}>
          <div className={`${styles.titleContainer}`}>
            {modalIcon}
            <p className={`${styles.titleStyle} ${modalIcon && styles.titleMargin} ${styles[dir]}`}>
              {title}
            </p>
          </div>
          <ToolbarIcons.CloseIcon
            className={`${styles.closeIcon}`}
            onClick={() => {
              setOpcaityHandle(false);
              handleShowModal();
            }}
          />
        </div>

        <div className={`${styles.contentInside} ${extraContentInsideClass}`}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
