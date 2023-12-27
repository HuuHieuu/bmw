import bmw_7 from '~/assets/image/bmw_7.webp';
import styles7 from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles7);
function BMW_7() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/7_series" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_7} alt="bmw_7" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/7_series">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              THE NEW 7
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 4.499.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_7;
