import ThongSo from '..';
import { thongSoRows, createData } from '../Data/I4';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import i4_thong_so from '~/assets/image/bmw_i4/i4_thong_so.jpg';

const cx = classNames.bind(styles);

function ThongSoI4() {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={i4_thong_so} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRows} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoI4;
