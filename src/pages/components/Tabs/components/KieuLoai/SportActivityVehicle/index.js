import bmw_x3 from '~/assets/image/bmw_x3.jpg';
import bmw_x5 from '~/assets/image/bmw_x5.webp';
import bmw_x7 from '~/assets/image/bmw_x7.webp';
import bmw_xm from '~/assets/image/XM/LOGO.webp';
import logo_xm from '~/assets/image/XM/logo_xm.png';
import styles from '~/pages/components/Tabs/components/BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SportActivityVehicle() {
  return (
    // x3
    <div className={cx('bmw-container')} style={{ flexWrap: 'wrap' }}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/x3_detail" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img className={cx('only')} src={bmw_x3} alt="bmw_x3" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')} style={{ marginTop: '43px' }}>
          <a href="/pages/details/x3_detail">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW X3
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 1.789.000.000 VNĐ</span>
          </a>
        </div>
      </div>

      {/* x5 */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/x5_detail" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_x5} alt="bmw_x5" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry', 'card-entry-only')}>
          <a href="/pages/details/x5_detail">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW X5
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 3.909.000.000 VNĐ</span>
          </a>
        </div>
      </div>

      {/* x7 */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/x7_detail" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_x7} alt="bmw_x7" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/x7_detail">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              THE NEW BMW X7
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 5.149.000.000 VNĐ</span>
          </a>
        </div>
      </div>

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

export default SportActivityVehicle;
