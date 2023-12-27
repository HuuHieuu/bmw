// PreloadImage.js
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '~/pages/Details/components/TabComponent/TabComponent.module.scss';

const cx = classNames.bind(styles);

function PreloadImages({ src, alt, onLoad }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageLoaded(true);
      onLoad();
    };

    return () => {
      image.onload = null;
    };
  }, [src, onLoad]);

  return <img src={imageLoaded ? src : ''} alt={alt} className={cx('preload-image', { loaded: imageLoaded })} />;
}

export default PreloadImages;
