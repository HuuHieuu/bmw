import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import x5_background from '~/assets/image/bmw_x5/background.jpeg';

//components
import TabFurX5 from '../components/TabFurX5';
import X5_Design from '../components/Design/X5';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function I7_Detail() {
  const text = 'BMW X5';
  const sup_text = 'A SIGN OF CHARACTER';
  const prize = 'VND 3,909,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-i7')} src={x5_background} alt="bmw x5" />
          </div>
          <div className={cx('text-overlay')}>
            <h1 className={cx('text-overlay-title')}>{text}</h1>
            <div className={cx('overlay-flex')}>
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

        <div className={cx('description')}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>&nbsp;</p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> Mẫu xe BMW X5. </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurX5 />
        </div>
        <div>
          <X5_Design />
        </div>
        <div className={cx('description')} style={{ marginTop: '0' }}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      X5 xDrive 40i M Sport:
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Số chứng nhận: 22KDR/000086</li>
                      <li>Mức tiêu hao nhiên liệu ngoài đô thị: 8.3 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu trong đô thị: 10.9 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu kết hợp : 9.2 (L/100km)</li>
                    </div>
                  </div>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      X5 xDrive 40i Xline:
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Số chứng nhận: 22KDR/000087</li>
                      <li>Mức tiêu hao nhiên liệu ngoài đô thị: 8.3 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu trong đô thị: 10.9 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu kết hợp : 9.2 (L/100km)</li>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default I7_Detail;
