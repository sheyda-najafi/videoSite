import axios from 'axios';

import CookieFunction from '@/functions/cookieFunction';
import ToolbarIcons from '@/icons/toolbar';

const tokenName = 'didarinToken';
const modeName = 'didarinMode';
const themeName = 'didarinTheme';

const config = {
  routingLangs: ['en', 'fa', 'fr', 'ar'],
  defaultLocale: 'en',

  RTL_LANGUAGES: ['ar', 'fa'],
  baseURL: process.env.url,
  tokenName: tokenName,
  modeName: modeName,
  themeName: themeName,
  isRTL: (x) => config.RTL_LANGUAGES.includes(x),
  modes: [
    { id: 'light', title: 'light', icon: <ToolbarIcons.ChangeModeIcon /> },
    { id: 'dark', title: 'dark', icon: <ToolbarIcons.ChangeModeIconNight /> },
  ],

  udata:
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    CookieFunction('get', tokenName),

  axiosHandle: (header = null) => {
    return axios.create({
      baseURL: `${config.baseURL}api/`,
      headers: {
        Authorization: `Bearer ${config?.udata}`,
        'GATEWAY-ID': '30',
        Accept: 'application/json',
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*',
        withCredentials: false,
        cache: 'default',
        ...header,
      },
    });
  },
};
export default config;
