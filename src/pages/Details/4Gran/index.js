import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import bmw4_gran_backround from '~/assets/image/4Gran/4gran_backround.jpeg';

//components
import Series4Gran from '../components/Design/4Gran';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function Gran4() {
  const text = 'THE 4';
  const sup_text = 'CHIẾC BMW 4 SERIES GRAN COUPÉ HOÀN TOÀN MỚI';
  const prize = 'VND 2,629,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-4gran')} src={bmw4_gran_backround} alt="bmw 4 series gran coupé" />
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
                  Thiết kế tinh xảo, khả năng xử lý tối ưu và nhiều không gian để sử dụng hàng ngày: BMW 4 Series Gran
                  Coupé mới truyền cảm hứng suốt đường dài. Với sự thoải mái tối đa khi lái xe và nhiều không gian rộng
                  rãi, năm ghế ngồi đủ cỡ và khoang hành lý, chiếc Gran Coupé năm cửa tinh tế này là bạn đồng hành lý
                  tưởng cho mỗi cuộc hành trình.
                </div>
                <br></br>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>430i:</li>
                  <li>Kết hợp tính bằng l/100 km: 8.8</li>
                  <li>Khu vực thành thị tính bằng l/100 km: 11.06</li>
                  <li>Ngoài đô thị tính bằng l/100 km: 7.47</li>
                  <li>Số giấy chứng nhận: 22KDN/000168</li>
                </div>
              </p>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        {/* <div className={cx('tab-furniture')}>
          <TabFur3 />
        </div> */}

        <div>
          <Series4Gran />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Gran4;
