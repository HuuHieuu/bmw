import React, { useState, useEffect } from 'react';
import img1 from '~/assets/image/img1.jpeg';
import back1 from '~/assets/image/logo/back1.png';
import background from '~/assets/image/background.jpeg';
import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const images = [background, img1, back1];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Chuyển đổi hình ảnh tự động mỗi 5 giây
    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, []);

  return (
    <div
      className={cx('ca-container')}
      // style={{ position: 'relative', height: '560px', width: '100%', overflow: 'hidden' }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: activeIndex === index ? 1 : 0 /* Hiển thị hình ảnh hoặc ẩn đi */,
            transition: 'opacity 1s ease-in-out' /* Áp dụng transition */,
          }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Cắt hoặc điều chỉnh tỷ lệ khung hình để vừa với container
            }}
          />
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: activeIndex === index ? 'white' : 'gray',
              borderRadius: '50%',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
