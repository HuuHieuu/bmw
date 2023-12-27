import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import XM_background from '~/assets/image/XM/XM_background.jpg';
import logo_xm from '~/assets/image/XM/logo_xm.png';
//components
import TabFurXM from '../components/TabFurXM';
import XM from '../components/Design/Xm';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function XMDetail() {
  const text = 'BMW XM THẾ HỆ ĐẦU TIÊN';
  const sup_text = 'THE FIRST-EVER BMW XM';
  const prize = 'VND 10,999,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng • Plug-in Hybrid';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-xm')} src={XM_background} alt="BMW XM" />
          </div>
          <div className={cx('text-overlay')}>
            <h1 className={cx('text-overlay-title')}>{text}</h1>
            <div className={cx('overlay-flex')}>
              <img className={cx('logo-i-hidden')} src={logo_xm} alt="logo-xm" />
              <h3 className={cx('text-overlay-desc')}>{sup_text}</h3>
            </div>
          </div>
          <div className={cx('text-overlay-bot')}>
            <h1 className={cx('text-overlay-title')}>{prize}</h1>
            <h3 className={cx('text-overlay-desc')}>{unit}</h3>
          </div>
          <div className={cx('text-overlay-bot2')}>
            <h1 className={cx('text-overlay-title')}>{fuel}</h1>
            <h3 className={cx('text-overlay-desc')}>{fuel_desc}</h3>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div className={cx('description')}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('txt_x3_1')} style={{ fontSize: '50px' }}>
                  BMW XM
                </div>
                <br></br>
              </p>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurXM />
        </div>

        <div>
          <XM />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default XMDetail;
