import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import x7_background from '~/assets/image/bmw_x7/x7_background.jpeg';

//components
import TabFurX7 from '../components/TabFurX7';
import X7_Design from '../components/Design/X7';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function X7_Detail() {
  const text = 'THE X7';
  const sup_text = '';
  const prize = 'VND 5,149,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-i7')} src={x7_background} alt="bmw x7" />
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
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      BMW X7 xDrive40i Pure Excellence :
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Dài x Rộng x Cao : 5181 x 2000 x 1835 mm</li>
                      <li>Chiều dài cơ sở : 3105 mm</li>
                      <li>Chiều rộng cơ sở Trước/Sau : 1690 / 1705 mm</li>
                      <li>Khối lượng không tải : 2415 kg</li>
                      <li>Khối lượng toàn tải : 3215 kg </li>
                      <li>Dung tích khoang hành lý : 300 - 750 - 2120 L</li>
                      <li>Dung tích bình xăng: 83 L</li>
                      <li>Động cơ : Xăng; I6; TwinPower Turbo; 2998 cc & Mild Hybrid</li>
                      <li>Công suất cực đại : 280 kW (381 PS) @ 5200-6250 vòng/phút</li>
                      <li>Mô men xoắn cực đại : 540 Nm @ 1850-5000 vòng/phút</li>
                      <li>Hộp số : Tự động thể thao 8 cấp Steptronic Sport</li>
                      <li>Dẫn động : AWD</li>
                      <li>Tăng tốc từ 0-100 km/h : 5.8 giây</li>
                      <li>Vận tốc tối đa : 250 km/h</li>
                      <li>Số chứng nhận: 23KDN/000050</li>
                      <li>Mức tiêu hao nhiên liệu ngoài đô thị: 11.01 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu trong đô thị: 13.88 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu kết hợp : 12.07 (L/100km)</li>
                    </div>
                  </div>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      BMW X7 xDrive40i M Sport :
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Dài x Rộng x Cao : 5181 x 2000 x 1835 mm</li>
                      <li>Chiều dài cơ sở : 3105 mm</li>
                      <li>Chiều rộng cơ sở Trước/Sau : 1690 / 1705 mm</li>
                      <li>Khối lượng không tải : 2415 kg</li>
                      <li>Khối lượng toàn tải : 3215 kg </li>
                      <li>Dung tích khoang hành lý : 300 - 750 - 2120 L</li>
                      <li>Dung tích bình xăng: 83 L</li>
                      <li>Động cơ : Xăng; I6; TwinPower Turbo; 2998 cc & Mild Hybrid</li>
                      <li>Công suất cực đại : 280 kW (381 PS) @ 5200-6250 vòng/phút</li>
                      <li>Mô men xoắn cực đại : 540 Nm @ 1850-5000 vòng/phút</li>
                      <li>Hộp số : Tự động thể thao 8 cấp Steptronic Sport</li>
                      <li>Dẫn động : AWD</li>
                      <li>Tăng tốc từ 0-100 km/h : 5.8 giây</li>
                      <li>Vận tốc tối đa : 250 km/h</li>
                      <li>Số chứng nhận: 23KDN/000053</li>
                      <li>Mức tiêu hao nhiên liệu ngoài đô thị: 10.69 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu trong đô thị: 11.65 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu kết hợp : 11.04 (L/100km)</li>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className={cx('tab-furniture')}>
          <TabFurX7 />
        </div>
        <div>
          <X7_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default X7_Detail;
