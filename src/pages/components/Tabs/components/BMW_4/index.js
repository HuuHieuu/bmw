import bmw_4_mt from '~/assets/image/bmw_4_mt.webp';
import bmw_4_gran from '~/assets/image/bmw_4_gran.webp';
import styles4 from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles4);
function BMW_4() {
  return (
    <div className={cx('bmw-container')}>
      {/* mui trần */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/4_series_mui_tran" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_4_mt} alt="bmw_4_mt" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/4_series_mui_tran">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW 4 Series Mui Trần
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}> Giá từ 3.115.000.000 VNĐ</span>
          </a>
        </div>
      </div>
      {/* gran coupe */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/4_series_gran_coupé" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_4_gran} alt="bmw_4_gran" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/4_series_gran_coupé">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW 4 Series Gran Coupé
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 2.629.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_4;
