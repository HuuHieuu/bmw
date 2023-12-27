import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import bmw7_series_backround from '~/assets/image/7Series/b7_background.jpeg';

//components
import TabFur7 from '../components/TabFur7';
import Series7 from '../components/Design/7Series';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function B7Series() {
  const text = 'BMW 7 SERIES';
  const sup_text = '';
  const prize = 'VND 4,499,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-7')} src={bmw7_series_backround} alt="bmw 7 series" />
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
                <div className={cx('txt_x3_1')}>
                  Sự sang trọng thuần túy và giải trí đa giác quan kết hợp với nhau trong BMW 7 Series Mới để tạo ra
                  trải nghiệm lái cao cấp tuyệt đối:
                </div>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>Đèn pha pha lê và lưới tản nhiệt phản quang hình quả thận BMW 'Iconic Glow'</li>
                  <li>Không gian nội thất sang trọng với các tùy chọn Chế độ My Modes</li>
                </div>
              </p>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className={cx('tab-furniture')}>
          <TabFur7 />
        </div>

        <div>
          <Series7 />
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
                      735i M Sport
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Mâm hợp kim kích thước 21-inch, kiểu 908 M Bicolour</li>
                      <li>Hệ thống đánh lái bánh sau</li>
                      <li>Hệ thống treo khí nén hai cầu thích ứng</li>
                      <li>Đèn viền 'Iconic Glow' xung quanh lưới tản nhiệt</li>
                      <li>Phanh M Sport với cùm phanh màu xanh đậm</li>
                      <li>Các chi tiết nội thất điểm pha lê 'Crafted Clarity'</li>
                      <li>Hệ thống thông tin giải trí BMW Live Cockpit Professional</li>
                      <li>Thanh cảm ứng Interaction Bar</li>
                    </div>
                  </div>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      735i Pure Excellence
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Mâm hợp kim kích thước 20-inch, kiểu 905 Bicolour</li>
                      <li>Hệ thống treo khí nén hai cầu thích ứng</li>
                      <li>Đèn định vị pha lê Iconic Glow</li>
                      <li>Cửa sổ trời toàn cảnh Sky Lounge</li>
                      <li>Bảng điều khiển tiện ích Executive Lounge tích hợp trên bệ tỳ tay</li>
                      <li>Hệ thống thông tin giải trí BMW Live Cockpit Professional</li>
                      <li>Tùy chỉnh 06 chế độ không gian nội thất</li>
                      <li>Thanh cảm ứng Interaction Bar</li>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
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
                      740i Pure Excellence
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Mâm hợp kim kích thước 20-inch, kiểu 906 Bicolour 3D</li>
                      <li>Hệ thống đánh lái bánh sau</li>
                      <li>Đèn pha lê Iconic Glow ở cụm đèn trước</li>
                      <li>Đèn viền 'Iconic Glow' xung quanh lưới tản nhiệt</li>
                      <li>Cửa sổ trời toàn cảnh Sky Lounge</li>
                      <li>Bảng điều khiển tiện ích Executive Lounge tích hợp trên bệ tỳ tay</li>
                      <li>Các chi tiết nội thất điểm pha lê 'Crafted Clarity'</li>
                      <li>Hệ thống âm thanh Bowers & Wilkins Diamond, 36 loa, 1965</li>
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

export default B7Series;
