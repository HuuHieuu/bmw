import bmw_5 from '~/assets/image/bmw_5.webp';
import styles5 from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles5);
function BMW_5() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/5_series" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_5} alt="bmw_5" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/5_series">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW 5 Series
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 1.829.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_5;
