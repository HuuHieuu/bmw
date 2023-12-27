import bmw_x3 from '~/assets/image/bmw_x3.jpg';
import bmw_x4 from '~/assets/image/bmw_x4.jpg';
import bmw_x5 from '~/assets/image/bmw_x5.webp';
import bmw_x6 from '~/assets/image/bmw_x6.webp';
import bmw_x7 from '~/assets/image/bmw_x7.webp';
import bmw_xm from '~/assets/image/XM/LOGO.webp';
import logo_xm from '~/assets/image/XM/logo_xm.png';

import styles from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BMW_X(props) {
  return (
    <div className={cx('bmw-container')} style={{ flexWrap: 'wrap' }}>
      {/* XM */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/XM" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_xm} alt="bmw_XM" />
            </div>
          </a>
        </div>
        <img className={cx('bmw-logo-xm')} src={logo_xm} alt="XM" />
        <div className={cx('card-entry')}>
          <a href="/pages/details/XM">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              THE FIRST-EVER XM
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>XĂNG •PLUG-IN HYBRID</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 10.999.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_X;
