import bmw_x4 from '~/assets/image/bmw_x4.jpg';
import bmw_x6 from '~/assets/image/bmw_x6.webp';
import styles from '~/pages/components/Tabs/components/BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SportActivityCoupe() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img className={cx('only')} src={bmw_x4} alt="bmw_x4" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')} style={{ marginTop: '43px' }}>
          <a href="">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW X4
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 2.899.000.000 VNĐ</span>
          </a>
        </div>
      </div>

      {/* x5 */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('picture')}>
              <img src={bmw_x6} alt="bmw_x6" />
            </div>
          </a>
        </div>
        <div className={cx('card-entry')}>
          <a href="">
            <span style={{ fontSize: '20px' }} className={cx('card-heading')}>
              BMW X6
            </span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Xăng</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 3.799.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SportActivityCoupe;
