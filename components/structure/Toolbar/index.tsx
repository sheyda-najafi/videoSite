import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styles from "./styles.module.scss"
import ToolbarIcons from "@/icons/toolbar"
import { useTranslations } from 'next-intl';
import AppSearch from '@/components/general/AppSearch';
import AppImage from '@/components/common/AppImage';
import Button from '@/components/common/Button';

type ToolbarType = {
    toggleMenuFunction?: () => void
}

export default function Toolbar({ toggleMenuFunction }: ToolbarType) {
    const t = useTranslations("Structure")
    const toolbarIconList=[
        {id:1, icon:"", title:t("notification"), onClick:()=>{}},
        {id:2, icon:"", title:t("theme"), onClick:()=>{}},
        {id:3, icon:"", title:t("more"), onClick:()=>{}},
    ]
    const callbackSearch = () => {
    }
    const loginFunction = () => {

    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sideContainer}`}>
                <ToolbarIcons.BurgerIcon onClick={toggleMenuFunction} />
                <AppImage src="/imgs/logo.svg" className={`${styles.logo}`} width={90} height={20} />
            </div>
            <AppSearch callbackSearch={callbackSearch} />
            <div className={`${styles.sideContainer}`}>
                <Button icon={<ToolbarIcons.SigninIcon onClick={loginFunction} />}>{t("signin")}</Button>
            </div>
        </div>
    )
}
