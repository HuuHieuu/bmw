import ThongSo from '..';
import { thongSoRowsXM, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import xm_thongso from '~/assets/image/XM/xm_thongso.jpg';

const cx = classNames.bind(styles);

function ThongSoX6({ css }) {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')} style={css}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={xm_thongso} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRowsXM} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoX6;
