import styles from '../BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';
import back_all from '~/assets/image/background_all.png';

const cx = classNames.bind(styles);
function ALL_CAR() {
  return (
    <div className={cx('car-container')}>
      <div style={{ width: '100%' }}>
        <img style={{ width: '100%' }} src={back_all} />
      </div>
      <div className={cx('car-kham-pha-cont')}>
        <div className={cx('car-kham-pha')}>
          <a href="" className={cx('kham-pha')}>
            Khám phá các mẫu xe
          </a>
        </div>
      </div>
    </div>
  );
}

export default ALL_CAR;
