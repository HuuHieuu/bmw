import DefaultLayout from '~/layouts/DefaultLayout';
import styles from './GioiThieu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function GioiThieu() {
  return (
    <>
      <DefaultLayout />
      <div className={cx('gioithieu-container')}>
        <div className={cx('gioithieu-content')}>
          <div>
            <span>HOTLINE Kinh Doanh: </span>
            <span>0588.26.26.66</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GioiThieu;
