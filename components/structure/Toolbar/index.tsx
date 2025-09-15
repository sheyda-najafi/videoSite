import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styles from "./styles.module.scss"
import AppInput from '@/components/common/AppInput';
import ToolbarIcons from "@/icons/toolbar"

type ToolbarType = {
    toggleMenuFunction?: () => void
}

export default function Toolbar({ toggleMenuFunction }: ToolbarType) {
    const [searchInput, setSearchInput] = useState("");

    const searchFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value.replace(/\//g, ''));
    };
    const pressKey = (e: KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 13) {
        }
    };
    return (
        <div className={`${styles.container}`}>
            <div>
                <p onClick={toggleMenuFunction}>toggle</p>
            </div>
            <AppInput
                affix={
                    searchInput !== '' && (
                        <span
                            onClick={() => {
                                setSearchInput('');
                            }}
                        >
                            <ToolbarIcons.CloseIcon width={'13px'} height={'13px'} />
                        </span>
                    )
                }
                affix2={
                    <span >
                        <ToolbarIcons.SearchIcon
                            width={'18px'}
                            height={'18px'}
                            onClick={() => {
                                // if (searchInput?.length != 0) {
                                //     addSuggestFunction();
                                //     findSuggest();
                                //     setShowSearchedList(false);
                                //     router.push(`/search/${searchInput?.trim()}?`);

                                //     // setShowSuggestModalToolbar(false);

                                //     router.push(`/search/${searchInput?.trim()}?`);
                                // } else {
                                //     setShowSearchedList(false);
                                //     router.push(`/search/ `);
                                // }
                            }}
                        />
                    </span>
                }
                placeholder={'جستجو'}
                className={styles.search}
                onChange={(e) => {
                    searchFunction(e);
                }}
                value={searchInput}
                onKeyDown={(e) => {
                    pressKey(e);
                }}

            />
            <div></div>
        </div>
    )
}
