import { playlist } from '@/commonTypes';
import React from 'react';
import styles from '../styles.module.css';
import ToolbarIcons from '@/icons/toolbar';

export default function PlaylistIcons({ item }: { item: playlist }) {
  let iconList = [
    { id: 1, tile: '', icon: <ToolbarIcons.editIcon onClick={null} /> },
    { id: 1, tile: '', icon: <ToolbarIcons.playlistIcon onClick={() => {}} /> },
    { id: 1, tile: '', icon: <ToolbarIcons.DeleteIcon onClick={() => {}} /> },
  ];
  return (
    <div className={`${styles.iconContainer}`}>
      {iconList?.map((x, j) => (
        <div key={j}>{x?.icon}</div>
      ))}
    </div>
  );
}
