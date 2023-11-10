import bmw_3 from '~/assets/image/bmw_3.webp';
import bmw_5 from '~/assets/image/bmw_5.webp';
import bmw_7 from '~/assets/image/bmw_7.webp';
import styles from '~/pages/components/Tabs/components/BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sedan() {
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
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_5} alt="bmw_5" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="">
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
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_7} alt="bmw_7" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="">
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

export default Sedan;
