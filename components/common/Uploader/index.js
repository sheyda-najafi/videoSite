import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import Api from '@/api';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';

const Uploader = ({
  id = 'uploader',
  onUploadComplete,
  headTitle,
  childern,
  uploadType = 'image',
  api = Api.uploadImage,
  showError = false,
  error = 'این فیلد ضروری است.',
  uploadButton,
}) => {
  const cancelTokenSource = useRef(axios.CancelToken.source());
  const fileInputRef = useRef();
  const { setServerMessage } = useContext(LayoutContext);

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // ✅ always reset before opening
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // recreate cancel token each time
    cancelTokenSource.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('upload', file);
    formData.append('style', 'default');

    setLoading(true);
    setIsLoading(true);
    setProgress(0);

    const config = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
      cancelToken: cancelTokenSource.current.token,
    };

    api(formData, config)
      .then((res) => {
        onUploadComplete(res?.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          console.log('File upload failed:', err);
          setServerMessage({ text: 'error uploading file' });
        }
        setIsLoading(false);
        setProgress(0);
        setLoading(false);

        // reset file input so same file can be picked again
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      })
      .finally(() => {
        setIsLoading(false);
        setProgress(0);
        setLoading(false);
      });

    // ✅ also reset the input immediately after picking file
    event.target.value = '';
  };

  const handleCancel = (e) => {
    cancelTokenSource.current.cancel('Upload canceled by the user.');
    setIsLoading(false);
    setProgress(0);
    // ✅ Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.description_teacher_button}>{headTitle ? headTitle : '  '}</p>
      <div
        onClick={() => {
          handleFileUpload();
        }}
      >
        {' '}
        {uploadButton}
      </div>
      {childern}
      {isLoading ? (
        <>
          <p>{`در حال بارگذاری... ${progress}%`}</p>
          <button onClick={handleCancel}>کنسل</button>
        </>
      ) : (
        <></>
      )}
      {/* {showImg &&
        (isLoading ? (
          <>
            <p>{`در حال بارگذاری... ${progress}%`}</p>
            <button onClick={handleCancel}>کنسل</button>
          </>
        ) : (
          uploadedFile && (
            <div className={`${styles.uploadedFileStyle}`}>
              <p>فایل آپلود شده:</p>
              <a target="_blank" href={uploadedFile?.href ? uploadedFile?.href : ''}>
                {uploadedFile?.name}
              </a>
            </div>
          )
        ))} */}
      <input
        key={progress + id}
        name="upload"
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept={
          uploadType === 'image'
            ? 'image/*'
            : uploadType === 'video'
              ? 'video/*'
              : uploadType === 'music'
                ? 'audio/*'
                : uploadType === 'pdf'
                  ? '.pdf'
                  : '*/*'
        }
        onChange={handleFileChange}
      />
      {showError == true && error && <p className={`inputError`}>{error}</p>}
    </div>
  );
};

export default Uploader;
