"use client"
import CookieFunction from '@/functions/cookieFunction';
import { createContext, useEffect, useState } from 'react';
import config from "@/api/global"
import { useLocale } from 'next-intl';


export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [serverMessage, setServerMessage] = useState({ text: "" })
    const [theme, setTheme] = useState('white');
    const [dir, setDir] = useState("ltr")
    const locale = useLocale();


    useEffect(() => {
        let themeValue = "white"
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (
                CookieFunction('get', config.tokenName) !== null &&
                CookieFunction('get', config.tokenName) != undefined
            ) {
                themeValue = CookieFunction('get', config.tokenName)
            }
        }
        setTheme(themeValue)

        setDir(config.isRTL(locale) ? 'rtl' : 'ltr')

    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <LayoutContext.Provider value={{ serverMessage, setServerMessage, theme, setTheme, dir, setDir }}>
            {children}
        </LayoutContext.Provider>
    );
};
