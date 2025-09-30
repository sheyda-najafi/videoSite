import ImageEditor from '@/components/general/ImageEditor';
import React from 'react';
import styles from './styles.module.css';
import Api from '@/api';
import ChannelInfo from './ChannelInfo';
import ChannelButtons from './ChannelButtons';

export default function ProfileSetting({ data }) {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <ImageEditor
          src="/imgs/home/cardChannelImage.jpg"
          bannerClassName={`${styles.thumbnail}`}
          imageMoreBox={styles.imageMoreBox}
          boxClassName={`${styles.boxClassName}`}
          uploadApi={Api.uploadImage}
          className={styles.imageContainer}
        />
        <ChannelInfo data={data} />
      </div>
      <ChannelButtons className={`${styles.channelButtons}`} page={'profile'} />
    </div>
  );
}
