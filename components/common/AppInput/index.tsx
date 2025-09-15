import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface AppInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  extraWrapperClass?: string;
  wrapper?: string;
  prefix?: ReactNode;
  prefixClass?: string;
  affix?: ReactNode;
  affix2?: ReactNode;
  affix3?: ReactNode;
  affixStyle?: string;
  onClickInput?: () => void;
  themeColor?: string;
}

const AppInput = forwardRef<HTMLInputElement, AppInputProps>((props, ref) => {
  const {
    className,
    extraWrapperClass,
    wrapper,
    prefix,
    prefixClass,
    affix,
    affix2,
    affix3,
    affixStyle,
    onClickInput,
    themeColor = 'default',
    ...inputProps
  } = props;

  return (
    <div
      className={`${styles.container} ${className || ''} selectButton ${extraWrapperClass || ''}`}
      onClick={props.onClick}
    >
      <div className={`${styles.wrapper} inputWrapperColor ${wrapper || ''}`}>
        {prefix && <div className={prefixClass}>{prefix}</div>}
        <input
          {...inputProps}
          ref={ref}
          className={props.className}
          onClick={onClickInput}
          onFocus={props.onFocus ?? (() => console.log('h'))}
          onBlur={props.onBlur ?? (() => console.log('b'))}
        />
        {affix && (
          <div className={`${styles.affix} ${themeColor !== 'white' ? 'makeWhite' : ''}`}>
            {affix}
          </div>
        )}
        {affix3 && (
          <div className={`${styles.affix} ${themeColor !== 'white' ? 'makeWhite' : ''}`}>
            {affix3}
          </div>
        )}
        {affix2 && (
          <div
            className={`${styles.affix} ${affixStyle ? affixStyle : themeColor !== 'white' ? 'makeWhite' : ''
              }`}
          >
            {affix2}
          </div>
        )}
      </div>
    </div>
  );
});

AppInput.displayName = 'AppInput';
export default AppInput;
