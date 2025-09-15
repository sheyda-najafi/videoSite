

import LanguageSwitcher from "@/components/general/LanguageSwitcher";
import ModeSwitcher from "@/components/general/ModeSwitcher";
import { useTranslations } from "next-intl";
// import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';


export default function HomePage({ params }: { params: { locale: string } }) {
    // const { locale } = use(params);
    const locale = params?.locale;
    setRequestLocale(locale);
    const t = useTranslations('HomePage');

    return (
        <>
            <LanguageSwitcher />
            <ModeSwitcher />
            <h1>{t('welcome')}</h1>
        </>
    );
}
