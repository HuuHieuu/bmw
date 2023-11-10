import ThongSo from '..';
import { thongSoRows, createData } from '../Data/i7';
import styles from './ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import i7_thong_so from '~/assets/image/i7_Thongso.jpg';

const cx = classNames.bind(styles);

function ThongSoI7() {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={i7_thong_so} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRows} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoI7;
