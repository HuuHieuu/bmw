import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import z4_background from '~/assets/image/Z4/z4_background.jpeg';

//components
import TabFurZ4 from '../components/TabFurZ4';
import Z4_Design from '../components/Design/Z4';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function Z4_Detail() {
  const text = 'BMW Z4';
  const sup_text = 'MẪU XE ROADSTER MANG ĐẾN TRẢI NGHIỆM LÁI THỂ THAO VƯỢT BẬC';
  const prize = 'VND 3,139,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-z4')} src={z4_background} alt="bmw z4" />
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
                      BMW Z4 kết hợp sự năng động của một chiếc xe thể thao với sự tự do của một chiếc roadster. Hãy tự
                      mình khám phá:
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Tính thẩm mỹ tiến bộ trong thiết kế roadster mang tính biểu tượng.</li>
                      <li>
                        Động lực lái mạnh mẽ với công suất cực đại lên tới 145 kW (197 HP) với mô men xoắn cực đại 320
                        Nm @ 1450-4200 vòng/phút cùng hộp số tự động 8 cấp thể thao và có khả năng tăng tốc từ 0-100
                        km/h trong 6.8 giây.
                      </li>
                      <li>Gói khí động học M giúp tối ưu hóa hiệu quả và động lực học.</li>
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
          <TabFurZ4 />
        </div>
        <div>
          <Z4_Design />
        </div>
        <div className={cx('description')} style={{ margin: '0' }}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      Z4 sDrive20i:
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Số chứng nhận: 23KDN/010085-00</li>
                      <li>Mức tiêu hao nhiên liệu ngoài đô thị: 7.25 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu trong đô thị: 9.83 (L/100km)</li>
                      <li>Mức tiêu hao nhiên liệu kết hợp : 8.2 (L/100km)</li>
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

export default Z4_Detail;
