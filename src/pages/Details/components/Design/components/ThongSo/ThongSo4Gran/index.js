import ThongSo from '..';
import { thongSoRows4Gran, createData } from '../Data/Ix3';
import styles from '../ThongSoI7/ThongSoI7.module.scss';
import classNames from 'classnames/bind';
import thongso_4gran from '~/assets/image/4Gran/thongsogran4.jpg';

const cx = classNames.bind(styles);

function ThongSo4Gran({ css }) {
  return (
    <>
      <div className={cx('thongso-container')}>
        <div className={cx('thongso-content')} style={css}>
          <div className={cx('picture')}>
            <img style={{ width: '100%' }} src={thongso_4gran} alt="thông số" />
          </div>
          <div className={cx('text')}>
            <ThongSo rows={thongSoRows4Gran} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongSo4Gran;
