import bmw_8 from '~/assets/image/bmw_8.jpg';
import styles8 from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles8);
function BMW_8() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img className={cx('only')} src={bmw_8} alt="bmw_8" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')} style={{ marginTop: '43px' }}>
          <a href="">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW 8 Series Gran Coupé
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 6.899.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_8;
