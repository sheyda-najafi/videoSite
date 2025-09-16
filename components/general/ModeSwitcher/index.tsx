'use client';

import { useContext } from 'react';

import { LayoutContext } from '@/context/LayoutContext';
import CookieFunction from '@/functions/cookieFunction';
import config from '@/api/global';

export default function ModeSwitcher() {
  const { mode, setMode, theme, setTheme } = useContext(LayoutContext) as {
    mode: string;
    setMode: (mode: string) => void;
    theme: string;
    setTheme: (mode: string) => void;
  };

  const modes = ['light', 'dark'];
  const themes = ['blue', 'green'];

  const nextmode = () => {
    const currentIndex = modes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setMode(modes[nextIndex]);
    CookieFunction('set', config.modeName, modes[nextIndex], 365);
  };

  const nexttheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    CookieFunction('set', config.themeName, themes[nextIndex], 365);
  };

  return (
    <>
      <button onClick={nextmode}>Switch mode (Current: {mode})</button>
      <button onClick={nexttheme}>Switch theme (Current: {theme})</button>
    </>
  );
}
