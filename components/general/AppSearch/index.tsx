import AppInput from '@/components/common/AppInput';
import ToolbarIcons from '@/icons/toolbar';
import { useTranslations } from 'next-intl';
import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';

type AppSearchType = {
  callbackSearch?: (x: string) => void;
};
export default function AppSearch({ callbackSearch }: AppSearchType) {
  const t = useTranslations('Structure');
  const { dir } = useContext(LayoutContext);
  const [searchInput, setSearchInput] = useState('');

  const searchFunction = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\//g, '');
    setSearchInput(inputValue);
    callbackSearch && callbackSearch(inputValue);
  };
  const pressKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13) {
      callbackSearch && callbackSearch(searchInput);
    }
  };
  return (
    <AppInput
      affix={
        searchInput == '' ? (
          <ToolbarIcons.SearchIcon
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
        ) : (
          <ToolbarIcons.CloseIcon
            onClick={() => {
              setSearchInput('');
              callbackSearch && callbackSearch('');
            }}
          />
        )
      }
      extraWrapperClass={styles.wrapper}
      affixWrapper={`${styles.affixWrapper} ${styles[dir]}`}
      placeholder={t('search')}
      onChange={(e) => {
        searchFunction(e);
      }}
      value={searchInput}
      onKeyDown={(e) => {
        pressKey(e);
      }}
    />
  );
}
