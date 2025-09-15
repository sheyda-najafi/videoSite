import axios from "axios";
import * as https from "https";
import CookieFunction from "@/functions/cookieFunction";
import { roboto, iransans } from "@/app/[locale]/fonts.ts";

const tokenName = "didarinToken"
const modeName = "didarinMode"
const themeName = "didarinTheme"

const config = {
  langs: [
    { lang: 'en', fontFamily: roboto?.variable },
    { lang: 'fa', fontFamily: iransans?.variable },
  ],
  RTL_LANGUAGES: ['ar', 'fa',], // Arabic, Hebrew, Persian, Urdu
  baseURL: process.env.url,
  tokenName: tokenName,
  modeName: modeName,
  themeName: themeName,
  isRTL: (x) => config.RTL_LANGUAGES.includes(x),

  udata:
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    CookieFunction("get", tokenName),

  axiosHandle: (header = null) => {
    return axios.create({
      baseURL: `${config.baseURL}api/`,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      headers: {
        Authorization: `Bearer ${config?.udata}`,
        "GATEWAY-ID": "30",
        Accept: "application/json",
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        withCredentials: false,
        cache: "default",
        ...header,
      },
    });
  },
};
const config2 = {
  baseURL: process.env.url_backup,
  // baseURL: "/", --> must change for main fanap server (pardis)


  axiosHandle: (header = null) => {
    return axios.create({
      baseURL: `${config2.baseURL}api/`,
      // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      headers: {
        Authorization: `Bearer ${config?.udata}`,
        Accept: "application/json",

        ...header,
      },
    });
  },
};
export default config;
export { config2 };

