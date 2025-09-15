import React, { useState } from 'react';
import styles from "./styles.module.scss"
import AppInput from '@/components/common/AppInput';

export default function Toolbar() {
    const [searchInput, setSearchInput] = useState("")
    return (
        <div className={`${styles.container}`}>
            <div></div>
            {/* <AppInput
                affix={
                    searchInput !== '' && (
                        <span
                            className={
                                direction == 'rtl'
                                    ? `${styles.borderLeft} pl-1`
                                    : `${styles.borderRight} pr-1`
                            }
                            onClick={() => {
                                setSearchInput('');
                            }}
                        >
                            <ToolbarIcons.CloseIcon width={'13px'} height={'13px'} />
                        </span>
                    )
                }
                affix2={
                    <span className={direction == 'ltr' ? 'pl-1' : 'pr-1'}>
                        <ToolbarIcons.SearchIcon
                            width={'18px'}
                            height={'18px'}
                            onClick={() => {
                                if (searchInput?.length != 0) {
                                    addSuggestFunction();
                                    findSuggest();
                                    setShowSearchedList(false);
                                    router.push(`/search/${searchInput?.trim()}?`);

                                    // setShowSuggestModalToolbar(false);

                                    router.push(`/search/${searchInput?.trim()}?`);
                                } else {
                                    setShowSearchedList(false);
                                    router.push(`/search/ `);
                                }
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

            /> */}
            <div></div>
        </div>
    )
}
