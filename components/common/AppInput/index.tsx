import React, { forwardRef, InputHTMLAttributes, ReactNode, useContext } from 'react';
import styles from './styles.module.scss';
import { LayoutContext } from '@/context/LayoutContext';

interface AppInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  extraWrapperClass?: string;
  wrapper?: string;
  prefix?: ReactNode;
  prefixClass?: string;
  affix?: ReactNode;
  affixStyle?: string;
  onClickInput?: () => void;
  themeColor?: string;
  affixWrapper?: string;
}

const AppInput = forwardRef<HTMLInputElement, AppInputProps>((props, ref) => {
  const { dir } = useContext(LayoutContext)
  const {
    className,
    extraWrapperClass,
    wrapper,
    prefix,
    prefixClass,
    affix,
    affixStyle,
    onClickInput,
    themeColor = 'default',
    affixWrapper = "",
    ...inputProps
  } = props;

  return (
    <div
      className={`${styles.container} ${extraWrapperClass || ''}`}
      onClick={props.onClick}
    >
      <div className={`${styles.wrapper}  ${wrapper || ''}`}>
        {prefix && <div className={prefixClass}>{prefix}</div>}
        <input
          {...inputProps}
          ref={ref}
          className={`${styles.inputClassName} ${props.className} ${styles[dir]}`}
          onClick={onClickInput}
          onFocus={props.onFocus ?? (() => console.log('h'))}
          onBlur={props.onBlur ?? (() => console.log('b'))}
        />
        <div className={`${styles.affixContainer} ${affixWrapper}`}>
          {affix && (
            <div className={`${styles.affix} `}>
              {affix}
            </div>
          )}

        </div>
      </div>
    </div>
  );
});

AppInput.displayName = 'AppInput';
export default AppInput;
