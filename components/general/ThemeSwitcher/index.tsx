"use client"

import { useContext } from 'react';

import { LayoutContext } from '@/context/LayoutContext';
import CookieFunction from '@/functions/cookieFunction';
import config from '@/api/global';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(LayoutContext) as {
        theme: string;
        setTheme: (theme: string) => void;
    };

    const themes = ['white', 'dark', 'blue'];

    const nextTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
        CookieFunction('set', config.tokenName, themes[nextIndex], 365)
    };

    return (
        <button
            onClick={nextTheme}
        >
            Switch Theme (Current: {theme})
        </button>
    );
}
