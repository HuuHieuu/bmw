import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import series3_background from '~/assets/image/3Series/3Series_background.jpeg';

//components
import TabFur3 from '../components/TabFur3';
import Series3Design from '../components/Design/3Series';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function Series3Detail() {
  const text = 'BMW 3 SERIES';
  const sup_text = '';
  const prize = 'VND 1,435,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-3')} src={series3_background} alt="bmw 3 series" />
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
                BMW 3 Series mới mang đến diện mạo nổi bật cho một mẫu sedan thể thao thuần chất. Thiết kế xe gọn gàng
                với những đường cắt nét tinh tế, lưới tản nhiệt được cách tân và hốc gió mới tạo nên bề mặt khác biệt
                khi nhìn từ trực diện của xe. Xứng danh là mẫu sedan được yêu thích nhất từ BMW, BMW 3 Series mới sở hữu
                nhiều công nghệ tiên tiến vận hành hoàn hảo trên hệ điều hành BMW OS 8.0 mới nhất. Kết cấu khung gầm của
                xe chắc chắn, động cơ mạnh mẽ cùng tinh thần thể thao không thể chối từ sẽ mang đến sự phấn khích đặc
                trưng ở phía sau tay lái của The New 3.
              </p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> BMW 3 SERIES </h2>
              </div>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className={cx('tab-furniture')}>
          <TabFur3 />
        </div>
        <div>
          <Series3Design />
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
                      BMW 330i M Sport
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Mâm hợp kim kích thước 18-inch, kiểu 848 M Bicolour với lốp an toàn Runflat</li>
                      <li>Hệ thống treo thích ứng M</li>
                      <li>Hệ thống lái thể thao biến thiên </li>
                      <li>Ốp nội thất Aluminium Rhombicle Anthracite M</li>
                      <li>Ghế lái và ghế hành khách trước thể thao</li>
                      <li>Hệ điều hành BMW OS 8.0</li>
                      <li>Cửa sổ trời chỉnh điện </li>
                      <li>Hệ thống đèn tự động điều chỉnh chế độ chiếu gần - chiếu xa</li>
                    </div>
                  </div>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      BMW 320i M Sport
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Mâm hợp kim kích thước 18-inch, kiểu 848 M Bicolour với lốp an toàn Runflat</li>
                      <li>Kính chắn gió và kính cửa sổ trước cách âm, chống tia UV và chống trộm</li>
                      <li>Ốp nội thất Aluminium 'Mesheffect'</li>
                      <li>Ghế điều chỉnh điện: Độ cao ghế, độ nghiêng tựa lưng, vị trí ghế, độ nghiêng bề mặt ghế</li>
                      <li>Hệ thống điều khiển hành trình có chức năng phanh khi xuống dốc</li>
                      <li>Gói khí động học thể thao M</li>
                      <li>Tùy chỉnh 03 chế độ lái: Comfort, Eco Pro, Sport</li>
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
                      BMW 320i Sportline
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>Xe sở hữu Mâm hợp kim kích thước 18-inch, kiểu 780 Bicolour thể thao</li>
                      <li>Ghế lái có tính năng nhớ 2 vị trí, bao gồm nhớ vị trí gương</li>
                      <li>Hệ thống điều hòa tự động 3 vùng độc lập</li>
                      <li>Hệ thống âm thanh HiFi, 10 loa, công suất 205W</li>
                      <li>Tính năng cảnh báo người lái mất tập trung</li>
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

export default Series3Detail;
