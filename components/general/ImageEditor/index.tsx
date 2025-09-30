import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import styles from './styles.module.css';

import MoreBox from '@/components/general/MoreBox';
import Uploader from '@/components/common/Uploader';
import { LayoutContext } from '@/context/LayoutContext';
import ToolbarIcons from '@/icons/toolbar';
import CoverImage from '../CoverImage';
import Api from '@/api';

export default function ImageEditor({
  src = '/imgs/profile/profile-cover.svg',
  onUploadComplete = () => {},
  extraItemsInList = [],
  bannerClassName = '',
  boxClassName = '',
  imageMoreBox = '',
  uploadApi = Api.uploadImage,
  className = '',
  showEditor = true,
}) {
  const t = useTranslations('Page');
  const tCommon = useTranslations('common');
  const { dir } = useContext(LayoutContext);

  const imageChangeList = [
    {
      id: 1,
      title: null,
      onClick: () => {},
      icon: (
        <Uploader
          api={uploadApi}
          uploadButton={
            <div className={`${styles.uploadButton}`}>
              <ToolbarIcons.MoreIcon />
              <span> {tCommon(`upload`)}</span>
            </div>
          }
          onUploadComplete={onUploadComplete}
        />
      ),
    },
    {
      id: 2,
      title: tCommon(`remove`),
      onClick: () => {},
      icon: <ToolbarIcons.MoreIcon />,
    },
    ...extraItemsInList,
  ];

  return (
    <CoverImage
      src={src}
      bannerClassName={`${styles.coverImage} ${bannerClassName}`}
      className={`${className}`}
    >
      {showEditor && (
        <MoreBox
          className={`${styles.imageMoreBox} ${imageMoreBox} ${styles[dir]}`}
          list={imageChangeList}
          boxClassName={`${styles.boxClassName} ${styles[dir]} ${boxClassName}`}
        />
      )}
    </CoverImage>
  );
}
