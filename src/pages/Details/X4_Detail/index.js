import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import x4_background from '~/assets/image/bmw_x4/backgroundhome.jpg';

//components
import TabFurX4 from '../components/TabFurX4';
import X4_Design from '../components/Design/X4';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function I7_Detail() {
  const text = 'THE X4';
  const sup_text = 'BMW X4';
  const prize = 'VND 2,899,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-x4')} src={x4_background} alt="bmw x4" />
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
              <p>
                <br></br>
                <br></br>
                BMW X4 xDrive20i M Sport
              </p>
              <p>&nbsp;</p>
              <ul>
                <li>Số chứng nhận: 22KDN/000165</li>
                <li>Mức tiêu hao nhiên liệu ngoài đô thị: 10 (L/100km)</li>
                <li>Mức tiêu hao nhiên liệu trong đô thị: 11.88 (L/100km)</li>
                <li>Mức tiêu hao nhiên liệu kết hợp: 10.68 (L/100km)</li>
              </ul>
              <p>&nbsp;</p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> Mẫu xe BMW X4. </h2>
                <h3> xDrive20i M Sport </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurX4 />
        </div>
        <div>
          <X4_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default I7_Detail;
