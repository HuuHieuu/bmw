import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import x6_background from '~/assets/image/bmw_x6/x6_background.jpg';

//components
import X6_Design from '../components/Design/X6';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function I7_Detail() {
  const text = 'THE X6';
  const sup_text = 'BMW X6: TẤT CẢ NHỮNG ĐIỂM NỔI BẬT';
  const prize = 'VND 3,799,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-i7')} src={x6_background} alt="bmw x5" />
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
        <p>&nbsp;</p>

        <div className={cx('description')}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')}>
                      BMW X6 có đặc điểm diện mạo độc đáo đi cùng với chủ quyền thể thao mạnh mẽ nhờ khối động cơ, hệ
                      thống treo và các trang bị như gói xOffroad.
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>X6 xDrive40i:</li>
                      <li>Kết hợp tính bằng l/100 km: 13.33</li>
                      <li>Khu vực thành thị tính bằng l/100 km: 16.19</li>
                      <li>Ngoài đô thị tính bằng l/100 km: 11.68</li>
                      <li>Số giấy chứng nhận: 22KDN/000270</li>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div>
          <X6_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default I7_Detail;
