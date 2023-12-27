import classNames from 'classnames/bind';
import DefaultLayout from '~/layouts/DefaultLayout';
import styles from './MauXe.module.scss';
import BMW_I from '../components/Tabs/components/BMW_I';
import BMW_X from '../components/Tabs/components/BMW_X';
import BMW_XM from '../components/Tabs/components/BMW_XM';
import BMW_3 from '../components/Tabs/components/BMW_3';
import BMW_4 from '../components/Tabs/components/BMW_4';
import BMW_5 from '../components/Tabs/components/BMW_5';
import BMW_7 from '../components/Tabs/components/BMW_7';
import BMW_8 from '../components/Tabs/components/BMW_8';
import BMW_Z4 from '../components/Tabs/components/BMW_Z4';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function MauXe() {
  return (
    <>
      <DefaultLayout />
      <div className={cx('mx-container')}>
        <div className={cx('mx-content')}>
          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>i</span>
            <BMW_I />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>X</span>
            <BMW_X />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>M</span>
            <BMW_XM />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>3</span>
            <BMW_3 />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>4</span>
            <BMW_4 />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>5</span>
            <BMW_5 />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>7</span>
            <BMW_7 />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>8</span>
            <BMW_8 />
          </div>

          <div className={cx('i')}>
            <span style={{ fontSize: '2rem' }}>Z4</span>
            <BMW_Z4 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MauXe;
