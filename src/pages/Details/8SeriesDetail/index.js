import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import bmw8_series_backround from '~/assets/image/8Series/b8_background.jpeg';

//components
import TabFur8 from '../components/TabFur8';
import Series8 from '../components/Design/8Series';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function B8Series() {
  const text = 'THE 8';
  const sup_text = 'BMW 8 SERIES GRAN COUPÉ';
  const prize = 'VND 6,899,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-8')} src={bmw8_series_backround} alt="bmw 8 series" />
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
                  Kết hợp hoàn hảo giữa tính năng động và sang trọng sẽ tạo ra sự độc đáo: BMW 8 Series Gran Coupé là
                  dòng xe thể thao bốn cửa cực kỳ cuốn hút với cảm giác không gian vô cùng rộng rãi. Triết lý thiết kế
                  của xe mang đậm tính thẩm mỹ ở dạng thức thăng hoa nhất. Một ngôn ngữ thiết kế hoàn toàn mới dành cho
                  những chiếc xe thể thao sang trọng, toát ra thứ sức mạnh kinh ngạc và tốc độ ấn tượng. BMW 8 Series
                  Gran Coupé giữ trọn cam kết thể thao trên đường với không gian đặc biệt ấn tượng không thể cưỡng lại -
                  một cảm giác có thể cảm nhận được ở bất cứ chỗ ngồi nào trên xe.
                </div>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>840i</li>
                  <li>Kết hợp tính bằng l/100 km: 8.92</li>
                  <li>Khu vực thành thị tính bằng l/100 km: 11.71</li>
                  <li>Ngoài đô thị tính bằng l/100 km: 7.31</li>
                  <li>Số giấy chứng nhận: 22KDN/000172</li>
                </div>
              </p>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className={cx('tab-furniture')}>
          <TabFur8 />
        </div>

        <div>
          <Series8 />
        </div>

        <div className={cx('description')} style={{ margin: '0' }}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('txt_x3_1')} style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Thông số kỹ thuật
                </div>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>Dài x Rộng x Cao: 5082 x 1932 x 1407 mm</li>
                  <li>Chiều dài cơ sở: 3023 mm</li>
                  <li>Chiều rộng cơ sở trước/ sau: 1629/ 1671 mm</li>
                  <li>Khối lượng không tải: 1815 kg</li>
                  <li>Khối lượng toàn tải: 2435 kg</li>
                  <li>Dung tích khoang hành lý: 440 L</li>
                  <li>Dung tích bình xăng: 68 L</li>
                  <li>Động cơ: Xăng; I6; 2998cc; TwinPower Turbo</li>
                  <li>Công suất cực đại: 250 kW (340 HP) @ 5000-6500 rpm</li>
                  <li>Mô men xoắn cực đại: 500 Nm @ 1600-4500 vòng/phút</li>
                  <li>Hộp số: Tự động thể thao 8 cấp Steptronic Sport</li>
                  <li>Dẫn động: Cầu sau</li>
                  <li>Tăng tốc từ 0-100 km/h: 5.4 giây</li>
                  <li>Vận tốc tối đa: 250 km/h</li>
                  <li>Số chứng nhận: 23KDN/000051</li>
                  <li>Mức tiêu hao nhiên liệu ngoài đô thị: 8.27 (L/100km)</li>
                  <li>Mức tiêu hao nhiên liệu trong đô thị: 16.96 (L/100km)</li>
                  <li>Mức tiêu hao nhiên liệu kết hợp : 11.50 (L/100km)</li>
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

export default B8Series;
