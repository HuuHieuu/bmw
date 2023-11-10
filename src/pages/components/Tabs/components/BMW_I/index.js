//icon
import icon_plugin from '~/assets/image/plugin_3.png';
import bmw_i from '~/assets/image/bmw_i.png';
// i
import bmw_i7 from '~/assets/image/bmw_i7.webp';
import bmw_ix3 from '~/assets/image/bmw_ix3.webp';
import bmw_i4 from '~/assets/image/bmw_i4.webp';
import styles from './BMW_I.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function BMW_I() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/i7_detail" title="Hiển thị thêm">
            <div className={cx('electricIcon')}>
              <span>
                <img src={icon_plugin} alt="plug-in" />
              </span>
            </div>
            <div className={cx('picture')}>
              <img src={bmw_i7} alt="bmw_i7" />
            </div>
          </a>
          <img className={cx('bmw-logo-i')} src={bmw_i} alt="i" />
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/i7_detail">
            <span className={cx('card-heading')}>BMW i7</span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Chạy điện toàn phần</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 7.199.000.000 VNĐ</span>
          </a>
        </div>
      </div>
      {/* ix3 */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="/pages/details/ix3_detail" title="Hiển thị thêm">
            <div className={cx('electricIcon')}>
              <span>
                <img src={icon_plugin} alt="plug-in" />
              </span>
            </div>
            <div className={cx('picture')}>
              <img src={bmw_ix3} alt="bmw_ix3" />
            </div>
          </a>
          <img className={cx('bmw-logo-i')} src={bmw_i} alt="i" />
        </div>
        <div className={cx('card-entry')}>
          <a href="/pages/details/ix3_detail">
            <span className={cx('card-heading')}>BMW iX3</span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Chạy điện toàn phần</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 3.479.000.000 VNĐ</span>
          </a>
        </div>
      </div>
      {/* i4 */}
      <div className={cx('bmw-content')}>
        <div className={cx('card-image')} style={{ position: 'relative' }}>
          <a href="" title="Hiển thị thêm">
            <div className={cx('electricIcon')}>
              <span>
                <img src={icon_plugin} alt="plug-in" />
              </span>
            </div>
            <div className={cx('picture')}>
              <img src={bmw_i4} alt="bmw_i4" />
            </div>
          </a>
          <img className={cx('bmw-logo-i')} src={bmw_i} alt="i" />
        </div>
        <div className={cx('card-entry')}>
          <a href="">
            <span className={cx('card-heading')}>BMW i4</span>
            <div className={cx('card-heading-desc')}>
              <span style={{ color: '#1c69d4' }}>Chạy điện toàn phần</span>
            </div>
            <span className={cx('card-heading')}>Giá từ 3.739.000.000 VNĐ</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BMW_I;
