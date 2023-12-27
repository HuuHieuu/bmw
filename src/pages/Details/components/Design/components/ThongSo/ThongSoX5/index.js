import ThongSo from '..';
import { thongSoRowsX5, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import x5_thongso from '~/assets/image/bmw_x5/x5_thongso.jpg';

const cx = classNames.bind(styles);

function ThongSoIx3() {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={x5_thongso} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRowsX5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoIx3;
