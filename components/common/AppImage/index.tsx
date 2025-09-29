import React, { ImgHTMLAttributes, MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

type LoaderProps = {
  src: string;
};

type AppImageProps = {
  blurDataURL?: string;
  placeholder?: 'blur' | 'empty';
  src?: string;
  alt?: string;
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  unoptimized?: boolean;
  layout?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  className?: string;
  containerclassName?: string;
  text?: string;
  toolTipClassName?: string;
  toolTip?: string;
  textStyle?: string;
  title?: string;
  titleStyle?: string;
  large?: boolean;
  id?: string;
  objectFit?: string;
  objectPosition?: string;
  fill?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

const AppImage: React.FC<AppImageProps> = ({
  blurDataURL = '/imgs/blur.webp',
  placeholder = 'blur',
  src = '/imgs/blur.webp',
  alt = 'image',
  height = 300,
  width = 300,
  unoptimized = false,
  layout,
  onClick,
  className = '',
  containerclassName = '',
  text = '',
  toolTipClassName = '',
  toolTip = '',
  textStyle = 'nothing',
  title = '',
  titleStyle,
  large = false,
  id = '',
  objectFit = 'cover',
  objectPosition = '',
  fill = null,
  ...rest
}) => {
  return (
    <Image
      {...rest}
      src={src?.startsWith('/imgs/') ? src : `${process.env.IMAGE_URL}${src}`}
      alt={alt}
      height={height}
      width={width}
      className={className}
      onClick={onClick}
      id={id}
    />
  );
};

export default AppImage;

// ===========

// import React, { ImgHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
// import styles from './styles.module.scss';
// import Image from 'next/image';

// type LoaderProps = {
//   src: string;
// };

// type AppImageProps = {
//   blurDataURL?: string;
//   placeholder?: 'blur' | 'empty';
//   src?: string;
//   alt?: string;
//   height?: number | `${number}` | undefined;
//   width?: number | `${number}` | undefined;
//   unoptimized?: boolean;
//   layout?: string;
//   onClick?: MouseEventHandler<HTMLImageElement>;
//   className?: string;
//   containerclassName?: string;
//   text?: string;
//   toolTipClassName?: string;
//   toolTip?: string;
//   textStyle?: string;
//   title?: string;
//   titleStyle?: string;
//   large?: boolean;
//   id?: string;
//   objectFit?: string;
//   objectPosition?: string;
//   fill?: boolean;
//   children?: ReactNode; // ✅ add children prop
// } & ImgHTMLAttributes<HTMLImageElement>;

// const AppImage: React.FC<AppImageProps> = ({
//   blurDataURL = '/imgs/blur.webp',
//   placeholder = 'blur',
//   src = '/imgs/blur.webp',
//   alt = 'image',
//   height = 300,
//   width = 300,
//   unoptimized = false,
//   layout,
//   onClick,
//   className = '',
//   containerclassName = '',
//   text = '',
//   toolTipClassName = '',
//   toolTip = '',
//   textStyle = 'nothing',
//   title = '',
//   titleStyle,
//   large = false,
//   id = '',
//   objectFit = 'cover',
//   objectPosition = '',
//   fill = null,
//   children, // ✅ destructure children
//   ...rest
// }) => {
//   return (
//     <div className={`${styles.container} ${containerclassName}`} style={{ position: 'relative' }}>
//       <Image
//         {...rest}
//         src={src?.startsWith('/imgs/') ? src : `${process.env.IMAGE_URL}${src}`}
//         alt={alt}
//         height={height}
//         width={width}
//         className={className}
//         onClick={onClick}
//         id={id}
//       />
//       {children && <div className={styles.overlay}>{children}</div>}
//     </div>
//   );
// };

// export default AppImage;
