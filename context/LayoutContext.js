'use client';
import CookieFunction from '@/functions/cookieFunction';
import { createContext, useEffect, useState } from 'react';
import config from '@/api/global';
import { useLocale } from 'next-intl';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [serverMessage, setServerMessage] = useState({ text: '' });
  const [mode, setMode] = useState('dark');
  const [theme, setTheme] = useState('blue');
  const [dir, setDir] = useState('ltr');
  const [trigger, setTrigger] = useState();
  const locale = useLocale();
  const [login, setLogin] = useState(
    typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      CookieFunction('get', config.tokenName),
  );
  const loginFunction = () => {
    setTrigger('login');
  };

  useEffect(() => {
    let modeValue = 'dark';
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (
        CookieFunction('get', config.modeName) !== null &&
        CookieFunction('get', config.modeName) != undefined
      ) {
        modeValue = CookieFunction('get', config.modeName);
      }
    }
    setMode(modeValue);

    let themeValue = 'blue';
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (
        CookieFunction('get', config.themeName) !== null &&
        CookieFunction('get', config.themeName) != undefined
      ) {
        themeValue = CookieFunction('get', config.themeName);
      }
    }
    setTheme(themeValue);

    setDir(config.isRTL(locale) ? 'rtl' : 'ltr');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
  }, [theme, mode]);

  return (
    <LayoutContext.Provider
      value={{
        serverMessage,
        setServerMessage,
        theme,
        setTheme,
        dir,
        setDir,
        mode,
        setMode,
        trigger,
        setTrigger,
        login,
        setLogin,
        loginFunction,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
