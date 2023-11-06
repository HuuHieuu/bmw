import bmw_3 from '~/assets/image/bmw_3.webp';
import bmw_5 from '~/assets/image/bmw_5.webp';
import bmw_7 from '~/assets/image/bmw_7.webp';
import styles from '~/pages/components/Tabs/components/BMW_I/BMW_I.module.scss';
import classNames from 'classnames/bind';

import BMW_3 from '../../BMW_3';
import BMW_5 from '../../BMW_5';
import BMW_7 from '../../BMW_7';

const cx = classNames.bind(styles);

function Sedan() {
  return (
    <div className={cx('bmw-container')}>
      <div className={cx('bmw-content')}>
        <BMW_3 />
      </div>
      <div className={cx('bmw-content')}>
        <BMW_5 />
      </div>
      <div className={cx('bmw-content')}>
        <BMW_7 />
      </div>
    </div>
  );
}

export default Sedan;
