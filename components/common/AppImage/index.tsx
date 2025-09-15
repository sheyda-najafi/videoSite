import React, { ImgHTMLAttributes, MouseEventHandler } from "react";
import styles from "./styles.module.scss";

type LoaderProps = {
  src: string;
};

const myLoader2 = ({ src }: LoaderProps): string => {
  if (src?.startsWith("/imgs/")) {
    return `${src}`;
  } else {
    return `${process.env.IMAGE_URL}${src}`;
  }
};

type AppImageProps = {
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
  src?: string;
  alt?: string;
  height?: string | number;
  width?: string | number;
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
} & ImgHTMLAttributes<HTMLImageElement>; // allows other img props like style, id, etc.

const AppImage: React.FC<AppImageProps> = ({
  blurDataURL = "/imgs/blur.webp",
  placeholder = "blur",
  src = "/imgs/blur.webp",
  alt = "image",
  height = "300",
  width = "300",
  unoptimized = false,
  layout,
  onClick,
  className = "",
  containerclassName = "",
  text = "",
  toolTipClassName = "",
  toolTip = "",
  textStyle = "nothing",
  title = "",
  titleStyle,
  large = false,
  id = "",
  ...rest
}) => {
  return (
    <div className={containerclassName} id={id}>
      <img
        {...rest}
        src={src?.startsWith("/imgs/") ? src : `${process.env.IMAGE_URL}${src}`}
        alt={alt}
        height={height}
        width={width}
        className={className}
        onClick={onClick}
      />
      {title && (
        <span className={`${titleStyle} ${styles.text}`}>{title}</span>
      )}
      {toolTip && <span className={toolTipClassName}>{toolTip}</span>}
      {text && <span className={`${styles.text} ${textStyle}`}>{text}</span>}
    </div>
  );
};

export default AppImage;
