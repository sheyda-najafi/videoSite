// fonts.ts
import localFont from "next/font/local";

// English font
export const roboto = localFont({
  src: [
    { path: "../../public/fonts/Roboto/static/Roboto-Regular.ttf", style: "normal" },
    // { path: "@/public/fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

// Arabic font
export const iransans = localFont({
  src: [
    { path: "../../public/fonts/Iransans/IRANSansWebFaNum.woff", style: "normal" },
  ],
  variable: "--font-iransans",
  display: "swap",
});
