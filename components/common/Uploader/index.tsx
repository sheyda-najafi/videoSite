import React, { useContext, useRef, useState, ChangeEvent } from 'react';
import axios, {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosProgressEvent,
} from 'axios';
import Api from '@/api';
import styles from './styles.module.css';
import { LayoutContext } from '@/context/LayoutContext';

type UploadType = 'image' | 'video' | 'music' | 'pdf' | string;

interface UploaderProps {
  id?: string;
  onUploadComplete: (data: any) => void;
  headTitle?: string;
  children?: React.ReactNode;
  uploadType?: UploadType;
  api?: (formData: FormData, config: AxiosRequestConfig) => Promise<AxiosResponse<any>>;
  showError?: boolean;
  error?: string;
  uploadButton?: React.ReactNode;
}

const Uploader: React.FC<UploaderProps> = ({
  id = 'uploader',
  onUploadComplete,
  headTitle,
  children,
  uploadType = 'image',
  api = Api.uploadImage,
  showError = false,
  error = '',
  uploadButton,
}) => {
  const cancelTokenSource = useRef<CancelTokenSource>(axios.CancelToken.source());
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setServerMessage } = useContext(LayoutContext);

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // ✅ reset before opening
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // recreate cancel token each time
    cancelTokenSource.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('upload', file);
    formData.append('style', 'default');

    setLoading(true);
    setIsLoading(true);
    setProgress(0);

    const config: AxiosRequestConfig = {
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
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

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      })
      .finally(() => {
        setIsLoading(false);
        setProgress(0);
        setLoading(false);
      });

    // ✅ reset immediately so same file can be picked again
    event.target.value = '';
  };

  const handleCancel = () => {
    cancelTokenSource.current.cancel('Upload canceled by the user.');
    setIsLoading(false);
    setProgress(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.description_teacher_button}>{headTitle ? headTitle : '  '}</p>
      <div className={styles.buttonContainer} onClick={handleFileUpload}>
        {uploadButton}
      </div>
      {children}
      {isLoading && (
        <>
          <p>{`در حال بارگذاری... ${progress}%`}</p>
          <button onClick={handleCancel}>کنسل</button>
        </>
      )}
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
      {showError && error && <p className="inputError">{error}</p>}
    </div>
  );
};

export default Uploader;
