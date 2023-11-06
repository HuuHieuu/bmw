import bmw_3 from '~/assets/image/bmw_3.webp';
import styles3 from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles3);

function BMW_3() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_3} alt="bmw_3" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              THE NEW 3
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 1.435.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_3;
