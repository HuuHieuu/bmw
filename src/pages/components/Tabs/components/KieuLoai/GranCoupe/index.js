import bmw_4_gran from '~/assets/image/bmw_4_gran.webp';
import classNames from 'classnames/bind';
import styles from '~/pages/components/Tabs/components/BMW_I/BMW_I.module.scss';

const cx = classNames.bind(styles);

function GranCoupe() {
  return (
    <div className={cx('bmw-container')}>
      {/* mui trần */}
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

export default GranCoupe;
