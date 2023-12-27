import ThongSo from '..';
import { thongSoRows5, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import thongso_5 from '~/assets/image/5Series/thongso5.jpg';

const cx = classNames.bind(styles);

function ThongSoX6({ css }) {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')} style={css}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={thongso_5} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRows5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSoX6;
