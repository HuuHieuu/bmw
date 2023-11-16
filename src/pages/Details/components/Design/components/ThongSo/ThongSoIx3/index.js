import ThongSo from '..';
import { thongSoRows, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import ix3_thong_so from '~/assets/image/bmw_ix3/ix3_thongso.jpg';

const cx = classNames.bind(styles);

function ThongSoIx3() {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={ix3_thong_so} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRows} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoIx3;
