import ThongSo from '..';
import { thongSoRowsX6, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import x6_thongso from '~/assets/image/bmw_x6/thongsox6.jpg';

const cx = classNames.bind(styles);

function ThongSoX6({ css }) {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')} style={css}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={x6_thongso} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRowsX6} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoX6;
